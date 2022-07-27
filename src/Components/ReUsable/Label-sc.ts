import styled from "styled-components";
import { COLOR } from "../../Constants/colors";

export const BlockLabel = styled.label`
    color: ${COLOR.text_medium};
    font-weight: 600;
    font-size: 0.8rem;
    display: block;
`;
export const Label = styled.label`
    color: ${COLOR.text_medium};
    font-weight: 600;
    font-size: 0.8rem;
`;

export const HelperLabel = styled.span`
    margin: 0 0.25rem;
    color: ${COLOR.text_light};
`;
