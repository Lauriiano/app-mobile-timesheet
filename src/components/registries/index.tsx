import { Text } from "react-native";
import { PropsRegistries } from "../../interfaces/ButtonInterfaces";
import * as C from "./styles";

export const Registries = ({ hour, title }: PropsRegistries) => {
    const alterarVogal = (title: string): string => {
        title = title.charAt(0).toUpperCase() + title.slice(1).toLowerCase();
        if (title == "Entrada" || title == "Saida") {
            return title + " registrada";
        }
        return title + " registrado";
    };

    return (
        <C.Container>
            <C.Title>{`${alterarVogal(title)} as ${
                hour.split(":")[0]
            } horas e ${hour.split(":")[1]} minutos`}</C.Title>
        </C.Container>
    );
};
