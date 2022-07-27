import styled, { css } from "styled-components";
import { COLOR } from "../../Constants/colors";

const dimensionStyles = {
    sm: css`
        padding: 0.5rem;
        font-size: 0.6rem;
    `,
    md: css`
        padding: 0.75rem;
        font-size: 0.8rem;
    `,
    lg: css`
        padding: 1rem;
        font-size: 1rem;
    `,
};

export type TextInputDimensions = keyof typeof dimensionStyles;

interface AddonProps {
    dimensions: TextInputDimensions;
    side: keyof typeof placeStyles;
}

const placeStyles = {
    left: css`
        border-radius: 0.25rem 0 0 0.25rem;
        transform: scaleX(105%) translateX(2.5%);
    `,
    right: css`
        border-radius: 0 0.25rem 0.25rem 0;
        transform: scaleX(105%) translateX(-2.5%);
    `,
};

export const TextAddon = styled.span<AddonProps>`
    ${(props) => dimensionStyles[props.dimensions]}
    background-color: ${COLOR.off_white};
    color: ${COLOR.text_muted};
    display: inline-block;
    outline: none;
    border: 2px solid ${COLOR.border};
    ${(props) => placeStyles[props.side]}
`;

export type TextInputTypes =
    | "text"
    | "email"
    | "password"
    | "number"
    | "search"
    | "url"
    | "tel"
    | "datetime";

interface Props {
    type: TextInputTypes;
    dimensions: TextInputDimensions;
    wide?: true;
}

export const TextInput = styled.input<Props>`
    ${(props) => dimensionStyles[props.dimensions]}
    width:${(props) => (props.wide ? "100%" : "fit-content")};
    border: 2px solid;
    border-color: ${COLOR.border};
    border-radius: 0.25rem;
    outline-color: ${COLOR.primary_light};
    &::placeholder {
        font-weight: 600;
        opacity: 0.5;
    }
    &:focus + ${TextAddon} {
        z-index: -1;
    }
`;
