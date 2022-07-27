import styled, { keyframes } from "styled-components";
import { flexCenter } from "../../../../Utils/css-helpers/flexCenter";

const fadeIn = keyframes`
    0%{opacity:0};
    100%{opacity:1;};
`;

export const StepWrapper = styled.div`
    ${flexCenter("column")}
    animation-name: ${fadeIn};
    animation-duration: 350ms;
    animation-timing-function: ease-in;
    animation-fill-mode: backwards;
`;
