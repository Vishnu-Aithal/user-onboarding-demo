import { css } from "styled-components";
import { COLOR } from "../../Constants/colors";

const sizes = {
    xs: "0px 2px 3px",
    sm: "0px 2px 6px",
};

export const boxShadow = (
    size: keyof typeof sizes,
    color: keyof typeof COLOR
) => css`
    box-shadow: ${sizes[size]} ${COLOR[color]};
`;
