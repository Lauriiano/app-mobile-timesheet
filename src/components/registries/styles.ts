import styled from "styled-components/native";
import { colors, fontSizes } from "../../theme";

export const Container = styled.View`
    width: 100%;
    border-bottom-width: 1px;
    border-bottom-color: rgba(0, 0, 0, 0.5);
    margin-bottom: 20px;
    border-bottom-left-radius: 10px;
`;

export const Title = styled.Text`
    padding-left: 15px;
    letter-spacing: ${fontSizes.letterSpacing}px;
    color: ${colors.primary};
    font-size: ${fontSizes.medium}px;
    font-weight: bold;
`;
