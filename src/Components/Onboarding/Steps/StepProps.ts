import React from "react";
import {
    FormState,
    OnboardingFormReducerActions,
} from "../../../Reducers/onboardingFormReducer";

export interface StepProps {
    formState: FormState;
    formDispatch: React.Dispatch<OnboardingFormReducerActions>;
}
