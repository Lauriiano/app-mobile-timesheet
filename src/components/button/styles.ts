import styled from "styled-components/native";
import { colors } from "../../theme";

export const Container = styled.View`
    display: flex;
    justify-content: center;
    margin-bottom: 25px;
`;

export const Button = styled.TouchableHighlight`
    background-color: ${colors.primaryLight};
    padding: 10px;
    border-radius: 10px;
`;

export const ButtonTitle = styled.Text`
    align-self: center;
    color: #fff;
    font-size: 16px;
`;
