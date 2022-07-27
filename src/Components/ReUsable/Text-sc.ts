import styled from "styled-components";
import { COLOR } from "../../Constants/colors";

export const MutedText = styled.p`
    color: ${COLOR.text_muted};
`;

export const SmallErrorMessage = styled.span`
    color: ${COLOR.error};
    font-size: 0.6rem;
`;
