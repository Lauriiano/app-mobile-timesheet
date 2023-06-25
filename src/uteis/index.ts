import { api } from "../api";
import {
    RetornoApiProps,
    StateTelaError,
    StateTelaProps,
} from "../interfaces/UteisInterfaces";
import { formatDate, formatHour } from "./formatDate";

export const checkin = async (
    titleBtn: string,
    idRegistro: number
): Promise<StateTelaProps[] | StateTelaError> => {
    titleBtn = titleBtn == "almoço" ? "almoco" : titleBtn;
    titleBtn = titleBtn == "saída" ? "saida" : titleBtn;
    const horaEnviada: string = formatHour(new Date(), "hh:mm");
    const retornoApi: RetornoApiProps | StateTelaError =
        await api.registrarPonto(
            {
                id: idRegistro,
                data: formatDate(new Date(), "aaaa-mm-dd"),
                hora: horaEnviada,
            },
            titleBtn
        );

    if ("error" in retornoApi) {
        let retornoError: StateTelaError = {
            error: true,
            mensagem: retornoApi.mensagem,
        };
        return retornoError;
    }

    const retornoSuccess: StateTelaProps[] = [
        {
            hora: horaEnviada,
            title: (titleBtn = titleBtn == "almoco" ? "almoço" : titleBtn),
            id: retornoApi.id,
            totalTrabalhado: retornoApi.total,
            diferenca: retornoApi.diferenca,
        },
    ];

    return retornoSuccess;
};

export const buscarPorData = async (): Promise<
    StateTelaProps[] | StateTelaError
> => {
    const retornoApi = await api.buscarPorData(
        formatDate(new Date(), "aaaa-mm-dd")
    );
    if ("error" in retornoApi) {
        let retornoError: StateTelaError = {
            error: true,
            mensagem: retornoApi.mensagem,
        };
        return retornoError;
    }
    const stateTelaPropsArray = converterRetornoApi(retornoApi);
    return orderArrayRetornoApiConvertido(stateTelaPropsArray);
};

export const changeRequest = (anteriousRequest: string): string => {
    switch (anteriousRequest) {
        case "entrada":
            return "almoço";
        case "almoço":
            return "retorno";
        case "retorno":
            return "saída";
        default:
            return "";
    }
};

function converterRetornoApi(retornoApi: any): StateTelaProps[] {
    const array: StateTelaProps[] = [];
    for (let key of ["entrada", "almoco", "volta_almoco", "saida"]) {
        let title = key;
        if (key == "volta_almoco") {
            title = "retorno";
        }

        if (key == "almoco") {
            title = "almoço";
        }

        if (retornoApi[key] != null) {
            const obj: StateTelaProps = {
                id: retornoApi.id,
                hora: retornoApi[key],
                title: title,
                totalTrabalhado: retornoApi.total,
                diferenca: retornoApi.diferenca,
            };
            array.push(obj);
        }
    }

    return array;
}

function orderArrayRetornoApiConvertido(
    stateTelaPropsArray: StateTelaProps[]
): StateTelaProps[] {
    stateTelaPropsArray.sort((a, b) => {
        const horaA = parseInt(a.hora.split(":")[0], 10);
        const horaB = parseInt(b.hora.split(":")[0], 10);

        if (horaA < horaB) {
            return -1;
        } else if (horaA > horaB) {
            return 1;
        } else {
            return 0;
        }
    });
    return stateTelaPropsArray;
}
