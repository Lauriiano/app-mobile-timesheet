import { Text } from "react-native";
import { formatDate } from "../../uteis/formatDate";
import * as C from "./styles";

export const Header = () => {
    const getDataFormatada = (): string => {
        return formatDate(new Date(), "dd/mm/aaaa");
    };

    return (
        <C.Container>
            <C.AreaInfos>
                <C.TextoName>Acran Laureano</C.TextoName>
                <C.TextoData>{getDataFormatada()}</C.TextoData>
            </C.AreaInfos>
            {/*<C.AreaWarnning>
                <C.TextoInfo>Você chegou na Golden Cross as 09:25</C.TextoInfo>
            </C.AreaWarnning>*/}
        </C.Container>
    );
};
