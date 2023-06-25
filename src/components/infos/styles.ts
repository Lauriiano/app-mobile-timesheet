import styled from "styled-components/native";
import { colors, fontSizes } from "../../theme";

export const Container = styled.View`
    width: 150px;
    height: 150px;
    border: 1px solid rgba(0, 0, 0, 0.5);
    border-radius: 10px;
`;

export const Header = styled.View`
    border-bottom-width: 1px;
    border-bottom-color: black;
    border-bottom-color: rgba(0, 0, 0, 0.5);
`;

export const TextoHeader = styled.Text`
    align-self: center;
    margin: 5px;
    font-size: ${fontSizes.medium}px;
    letter-spacing: ${fontSizes.letterSpacing}px;
    color: ${colors.primary};
`;

export const AreaValue = styled.View`
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
`;

interface Props {
    color: string;
}

export const value = styled.Text<Props>`
    font-size: ${fontSizes.medium}px;
    font-weight: bold;
    letter-spacing: ${fontSizes.letterSpacing}px;
    color: ${(props) => props.color};
`;
