import { Button } from "../../ReUsable/Button-sc";
import { BlockLabel, HelperLabel } from "../../ReUsable/Label-sc";
import { TextInput } from "../../ReUsable/TextInput-sc";
import { TextInputWithAddon } from "../../ReUsable/TextInputWithAddon";
import { StepHeading } from "./StepComponents/StepHeading-sc";
import { StepInputsWrapper } from "./StepComponents/StepInputsWrapper-sc";
import { StepProps } from "./StepProps";
import { StepSubHeading } from "./StepComponents/StepSubHeading-sc";
import { StepWrapper } from "./StepComponents/StepWrapper-sc";
import { useTextInput } from "../../../Hooks/useTextInput";
import { onlyLettersAndSpaces } from "../../../Utils/TextInputValidators/onlyLettersAndSpaces";
import { onlyLetters } from "../../../Utils/TextInputValidators/onlyLetters";
import { removeSpaces } from "../../../Utils/stringTansformers/removeSpaces";
import { useFocusOnMount } from "../../../Hooks/useFocusOnMount";

export const StepTwo: React.FC<StepProps> = ({ formDispatch, formState }) => {
    const workspaceName = useTextInput(onlyLettersAndSpaces, [true]);
    const workspaceUrl = useTextInput(onlyLetters, []);
    const suggestedWorkspaceUrl = removeSpaces(
        workspaceName.value
    ).toLowerCase();
    const addOnUrl = "www.eden.com/";
    useFocusOnMount(workspaceName.ref);
    const nextHandler: React.MouseEventHandler<HTMLButtonElement> = () => {
        if (!workspaceName.valid) {
            workspaceName.ref.current?.focus();
            return;
        }
        formDispatch({
            type: "SET_WORKSPACENAME",
            payload: { workspaceName: workspaceName.value.trim() },
        });
        formDispatch({
            type: "SET_WORKSPACEURL",
            payload: {
                workspaceUrl:
                    addOnUrl +
                    (workspaceUrl.value.trim() || suggestedWorkspaceUrl),
            },
        });
        formDispatch({ type: "SET_STEP", payload: { step: 3 } });
    };
    return (
        <StepWrapper>
            <StepHeading>Let's set up a home for all your work</StepHeading>
            <StepSubHeading>
                You can always create another workspace later.
            </StepSubHeading>
            <StepInputsWrapper>
                <BlockLabel htmlFor="workspace-name">
                    Workspace Name{" "}
                    {!workspaceName.valid && (
                        <HelperLabel>
                            (required, only letters and spaces)
                        </HelperLabel>
                    )}
                </BlockLabel>
                <TextInput
                    id="workspace-name"
                    ref={workspaceName.ref}
                    value={workspaceName.value}
                    onChange={workspaceName.onChange}
                    onBlur={workspaceName.onBlur}
                    wide
                    dimensions="md"
                    type="text"
                    placeholder="Eden"
                />
                <BlockLabel htmlFor="workspace-url">
                    Workspace URL <HelperLabel>(optional)</HelperLabel>
                </BlockLabel>
                <TextInputWithAddon
                    id="workspace-url"
                    value={workspaceUrl.value}
                    onChange={workspaceUrl.onChange}
                    onBlur={workspaceUrl.onBlur}
                    wide
                    addOnText={addOnUrl}
                    side="left"
                    dimensions="md"
                    type="text"
                    placeholder={suggestedWorkspaceUrl || "eden"}
                />
                <Button
                    onClick={nextHandler}
                    color="primary"
                    dimensions="md"
                    type="button"
                    wide>
                    Next
                </Button>
            </StepInputsWrapper>
        </StepWrapper>
    );
};
