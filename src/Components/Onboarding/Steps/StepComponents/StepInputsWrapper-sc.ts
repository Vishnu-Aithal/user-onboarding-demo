import styled from "styled-components";
import { BlockLabel } from "../../../ReUsable/Label-sc";

export const StepInputsWrapper = styled.div`
    width: 350px;
    & > ${BlockLabel} {
        margin-bottom: 0.5rem;
    }
    & > * {
        margin-bottom: 1rem;
    }
`;
