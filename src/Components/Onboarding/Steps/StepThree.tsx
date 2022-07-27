import { Button } from "../../ReUsable/Button-sc";
import { StepHeading } from "./StepComponents/StepHeading-sc";
import { StepInputsWrapper } from "./StepComponents/StepInputsWrapper-sc";
import { StepProps } from "./StepProps";
import { StepSelectBox } from "./StepComponents/StepSelectBox";
import { StepSubHeading } from "./StepComponents/StepSubHeading-sc";
import { StepWrapper } from "./StepComponents/StepWrapper-sc";

export const StepThree: React.FC<StepProps> = ({ formDispatch, formState }) => {
    return (
        <StepWrapper>
            <StepHeading>How are you planning to use Eden?</StepHeading>
            <StepSubHeading>
                We'll streamline your setup experience accordingly.
            </StepSubHeading>
            <StepInputsWrapper>
                <StepSelectBox
                    formDispatch={formDispatch}
                    formState={formState}
                />
                <Button color="primary" dimensions="md" type="submit" wide>
                    Create Workspace
                </Button>
            </StepInputsWrapper>
        </StepWrapper>
    );
};
