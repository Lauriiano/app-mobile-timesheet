import {
    RegistrarEntrada,
    RetornoApiProps,
    StateTelaError,
} from "../interfaces/UteisInterfaces";

const BASE_URL = "http://192.168.0.122:8080/timesheet/v1/ponto/";

export const api = {
    registrarPonto: async (
        data: RegistrarEntrada,
        endpoint: string
    ): Promise<RetornoApiProps | StateTelaError> => {
        const main = {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "content-type": "application/json",
            },
        };

        try {
            const req = await fetch(`${BASE_URL}registro/${endpoint}`, main);
            return await req.json();
        } catch (e) {
            const json: StateTelaError = {
                error: true,
                mensagem: "Erro ao conectar com o servidor.",
            };
            return json;
        }
    },
    buscarPorData: async (
        data: string
    ): Promise<RetornoApiProps | StateTelaError> => {
        try {
            const req = await fetch(`${BASE_URL}${data}`);
            return await req.json();
        } catch (e) {
            const json: StateTelaError = {
                error: true,
                mensagem: "Erro ao conectar com o servidor.",
            };
            console.log(e);
            return json;
        }
    },
};
