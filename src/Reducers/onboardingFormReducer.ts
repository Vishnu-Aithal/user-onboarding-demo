export interface FormState {
    step: Steps;
    fullName: string;
    displayName: string;
    workspaceName: string;
    workSpaceUrl: string;
    usage: Usages;
}
export type Steps = 1 | 2 | 3 | 4;
export type Usages = "team" | "myself";
export type OnboardingFormReducerActions =
    | { type: "SET_STEP"; payload: { step: Steps } }
    | { type: "SET_FULLNAME"; payload: { fullName: string } }
    | { type: "SET_DISPLAYNAME"; payload: { displayName: string } }
    | { type: "SET_WORKSPACENAME"; payload: { workspaceName: string } }
    | { type: "SET_WORKSPACEURL"; payload: { workspaceUrl: string } }
    | { type: "SET_USAGE"; payload: { usage: "team" | "myself" } };

export const InitialState: FormState = {
    step: 1,
    fullName: "",
    displayName: "",
    workspaceName: "",
    workSpaceUrl: "",
    usage: "myself",
};

export const onBoardingFormReducer = (
    state: FormState,
    action: OnboardingFormReducerActions
): FormState => {
    switch (action.type) {
        case "SET_STEP":
            return { ...state, step: action.payload.step };
        case "SET_FULLNAME":
            return { ...state, fullName: action.payload.fullName };
        case "SET_DISPLAYNAME":
            return { ...state, displayName: action.payload.displayName };
        case "SET_WORKSPACENAME":
            return { ...state, workspaceName: action.payload.workspaceName };
        case "SET_WORKSPACEURL":
            return { ...state, workSpaceUrl: action.payload.workspaceUrl };
        case "SET_USAGE":
            return { ...state, usage: action.payload.usage };
        default:
            return state;
    }
};
