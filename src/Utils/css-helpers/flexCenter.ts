import { css } from "styled-components";

export type FlexDirections =
    | "row"
    | "column"
    | "row-reverse"
    | "column-reverse";
export const flexCenter = (direction: FlexDirections) => {
    return css`
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: ${direction};
    `;
};
