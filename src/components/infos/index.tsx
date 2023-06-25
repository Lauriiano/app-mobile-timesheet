import { TotalTrabalhadoProps } from "../../interfaces/UteisInterfaces";
import * as C from "./styles";

export const Infos = ({ title, valor, color }: TotalTrabalhadoProps) => {
    return (
        <C.Container>
            <C.Header>
                <C.TextoHeader>{title}</C.TextoHeader>
            </C.Header>
            <C.AreaValue>
                <C.value color={color}>{valor}</C.value>
            </C.AreaValue>
        </C.Container>
    );
};
