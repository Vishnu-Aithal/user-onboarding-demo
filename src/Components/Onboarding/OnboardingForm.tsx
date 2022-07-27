import { useReducer } from "react";
import styled from "styled-components";
import { BREAKPOINT } from "../../Constants/breakpoints";
import {
    onBoardingFormReducer,
    InitialState,
} from "../../Reducers/onboardingFormReducer";
import { flexCenter } from "../../Utils/css-helpers/flexCenter";
import { EdenHeader } from "./EdenHeader";
import { OnboardingProgress } from "./OnboardingProgress";
import { StepFour } from "./Steps/StepFour";
import { StepOne } from "./Steps/StepOne";
import { StepThree } from "./Steps/StepThree";
import { StepTwo } from "./Steps/StepTwo";

const StyledForm = styled.form`
    ${flexCenter("column")}
    gap: 1rem;
    @media only screen and (max-width: ${BREAKPOINT.sm}) {
        & {
            max-width: 85%;
        }
    }
`;

export const OnboardingForm: React.FC = () => {
    const [formState, formDispatch] = useReducer(
        onBoardingFormReducer,
        InitialState
    );
    const submitHandler: React.FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();
        const formDetails = { ...formState };
        Reflect.deleteProperty(formDetails, "step");
        console.log("Form data sent to server", formDetails);
        formDispatch({ type: "SET_STEP", payload: { step: 4 } });
    };
    const { step } = formState;
    return (
        <StyledForm onSubmit={submitHandler}>
            <EdenHeader />
            <OnboardingProgress
                formState={formState}
                formDispatch={formDispatch}
            />
            {step === 1 && (
                <StepOne formState={formState} formDispatch={formDispatch} />
            )}
            {step === 2 && (
                <StepTwo formState={formState} formDispatch={formDispatch} />
            )}
            {step === 3 && (
                <StepThree formState={formState} formDispatch={formDispatch} />
            )}
            {step === 4 && (
                <StepFour formState={formState} formDispatch={formDispatch} />
            )}
        </StyledForm>
    );
};
