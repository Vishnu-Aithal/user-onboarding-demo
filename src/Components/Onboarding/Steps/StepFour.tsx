import styled from "styled-components";
import { COLOR } from "../../../Constants/colors";
import { flexCenter } from "../../../Utils/css-helpers/flexCenter";
import { Button } from "../../ReUsable/Button-sc";
import { StepHeading } from "./StepComponents/StepHeading-sc";
import { StepInputsWrapper } from "./StepComponents/StepInputsWrapper-sc";
import { StepProps } from "./StepProps";
import { StepSubHeading } from "./StepComponents/StepSubHeading-sc";
import { StepWrapper } from "./StepComponents/StepWrapper-sc";

const RoundTick = styled.div`
    ${flexCenter("row")}
    width: 3rem;
    height: 3rem;
    color: ${COLOR.off_white};
    background-color: ${COLOR.primary};
    border-radius: 50%;
    margin-bottom: 2rem;
`;

export const StepFour: React.FC<StepProps> = ({ formDispatch, formState }) => {
    return (
        <StepWrapper>
            <RoundTick>
                <span>✔</span>
            </RoundTick>
            <StepHeading>{`Congratulations, ${formState.displayName}`}</StepHeading>
            <StepSubHeading>
                You have completed onboarding, you can start using the Eden!
            </StepSubHeading>

            <StepInputsWrapper>
                <Button as="a" color="primary" dimensions="md" wide href="/">
                    Launch Eden
                </Button>
            </StepInputsWrapper>
        </StepWrapper>
    );
};
