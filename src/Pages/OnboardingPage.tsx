import styled, { keyframes } from "styled-components";
import { OnboardingForm } from "../Components/Onboarding/OnboardingForm";
import { flexCenter } from "../Utils/css-helpers/flexCenter";
import { fullScreen } from "../Utils/css-helpers/fullScreen";

const enter = keyframes`
    0%{opacity:0;transform:translateY(-2rem)};
    100%{opacity:1;transform:translateY(0)};
`;

const OnboardingLayout = styled.main`
    ${flexCenter("row")}
    ${fullScreen()}
    animation-name: ${enter};
    animation-duration: 200ms;
    animation-timing-function: ease-in;
    animation-fill-mode: backwards;
`;

export const OnboardingPage: React.FC = () => {
    return (
        <OnboardingLayout>
            <OnboardingForm />
        </OnboardingLayout>
    );
};
