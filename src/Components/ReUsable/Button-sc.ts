import styled, { css } from "styled-components";
import { COLOR } from "../../Constants/colors";

interface Props {
    color: keyof typeof colorStyles;
    dimensions: keyof typeof dimensionStyles;
    wide?: true;
}

const dimensionStyles = {
    sm: css`
        padding: 0.5rem;
        font-size: 0.6rem;
    `,
    md: css`
        padding: 0.75rem;
        font-size: 0.9rem;
    `,
    lg: css`
        padding: 1rem;
        font-size: 1rem;
    `,
};

const colorStyles = {
    primary: css`
        background-color: ${COLOR.primary};
        color: ${COLOR.secondary};
        &:hover {
            background-color: ${COLOR.primary_dark};
        }
    `,
    secondary: css`
        background-color: ${COLOR.secondary};
        color: ${COLOR.primary};
        &:hover {
            background-color: ${COLOR.primary_light};
            color: ${COLOR.secondary};
        }
    `,
};

export const Button = styled.button<Props>`
    ${(props) => dimensionStyles[props.dimensions]}
    ${(props) => colorStyles[props.color]}
    display: inline-block;
    text-align: center;
    font-weight: 500;
    border: none;
    border-radius: 0.25rem;
    width: ${(props) => (props.wide ? "100%" : "fit-content")};
    cursor: pointer;
    text-decoration: none;
`;
