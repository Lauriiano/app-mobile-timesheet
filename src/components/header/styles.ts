import styled from "styled-components/native";
import { colors, fontSizes } from "../../theme";

export const Container = styled.View`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 250px;
    background-color: ${colors.primary};
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
`;

export const TextoName = styled.Text`
    font-size: ${fontSizes.large}px;
    color: #fff;
    font-weight: bold;
    letter-spacing: 0.2px;
`;

export const TextoData = styled.Text`
    font-size: ${fontSizes.medium}px;
    color: #fff;
    letter-spacing: 0.2px;
`;

export const AreaInfos = styled.View`
    align-items: center;
`;

export const AreaWarnning = styled.View`
    margin-top: 25px;
`;

export const TextoInfo = styled.Text`
    font-size: ${fontSizes.medium}px;
    color: #fff;
    font-weight: bold;
`;
