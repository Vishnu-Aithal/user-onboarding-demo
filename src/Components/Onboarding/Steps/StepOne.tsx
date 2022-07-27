import { Button } from "../../ReUsable/Button-sc";
import { BlockLabel, HelperLabel } from "../../ReUsable/Label-sc";
import { TextInput } from "../../ReUsable/TextInput-sc";
import { StepHeading } from "./StepComponents/StepHeading-sc";
import { StepInputsWrapper } from "./StepComponents/StepInputsWrapper-sc";
import { StepProps } from "./StepProps";
import { StepSubHeading } from "./StepComponents/StepSubHeading-sc";
import { StepWrapper } from "./StepComponents/StepWrapper-sc";
import { useTextInput } from "../../../Hooks/useTextInput";
import { onlyLettersAndSpaces } from "../../../Utils/TextInputValidators/onlyLettersAndSpaces";
import { useFocusOnMount } from "../../../Hooks/useFocusOnMount";

export const StepOne: React.FC<StepProps> = ({ formDispatch, formState }) => {
    const fullName = useTextInput(onlyLettersAndSpaces, [true]);
    const displayName = useTextInput(onlyLettersAndSpaces, []);
    const suggestedDisplayName = fullName.value.split(" ")[0] || "Steve";
    useFocusOnMount(fullName.ref);
    const nextHandler: React.MouseEventHandler<HTMLButtonElement> = () => {
        if (!fullName.valid) {
            fullName.ref.current?.focus();
            return;
        }
        formDispatch({
            type: "SET_FULLNAME",
            payload: { fullName: fullName.value.trim() },
        });
        formDispatch({
            type: "SET_DISPLAYNAME",
            payload: {
                displayName: displayName.value.trim() || suggestedDisplayName,
            },
        });
        formDispatch({ type: "SET_STEP", payload: { step: 2 } });
    };
    return (
        <StepWrapper>
            <StepHeading>Welcome! First things first...</StepHeading>
            <StepSubHeading>You can always change them later.</StepSubHeading>
            <StepInputsWrapper>
                <BlockLabel htmlFor="full-name">
                    Full Name{" "}
                    {!fullName.valid && (
                        <HelperLabel>
                            (required, only letters and spaces)
                        </HelperLabel>
                    )}
                </BlockLabel>
                <TextInput
                    id="full-name"
                    ref={fullName.ref}
                    value={fullName.value}
                    onChange={fullName.onChange}
                    onBlur={fullName.onBlur}
                    wide
                    dimensions="md"
                    type="text"
                    placeholder="Steve Jobs"
                />

                <BlockLabel htmlFor="display-name">Display Name</BlockLabel>
                <TextInput
                    id="display-name"
                    value={displayName.value}
                    onChange={displayName.onChange}
                    onBlur={displayName.onBlur}
                    dimensions="md"
                    type="text"
                    placeholder={suggestedDisplayName}
                    wide
                />
                <Button
                    type="button"
                    onClick={nextHandler}
                    color="primary"
                    dimensions="md"
                    wide>
                    Next
                </Button>
            </StepInputsWrapper>
        </StepWrapper>
    );
};
