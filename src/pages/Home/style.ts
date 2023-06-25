import styled from "styled-components/native";
import { fontSizes } from "../../theme";

export const Container = styled.View`
    padding-left: 20px;
    padding-right: 20px;
    margin-top: 30px;
`;

export const AreaResgistries = styled.View`
    max-height: 150px;
    margin-bottom: 30px;
`;

export const AreaInfos = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
`;

export const Texto = styled.Text`
    align-self: center;
    font-size: ${fontSizes.medium}px;
`;
