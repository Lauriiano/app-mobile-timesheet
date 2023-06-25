import { Props } from "../../interfaces/ButtonInterfaces";
import * as C from "./styles";

export const Button = ({ titleButton, handleRegistry }: Props) => {
    return (
        <C.Container>
            <C.Button onPress={handleRegistry}>
                <C.ButtonTitle>{titleButton}</C.ButtonTitle>
            </C.Button>
        </C.Container>
    );
};
