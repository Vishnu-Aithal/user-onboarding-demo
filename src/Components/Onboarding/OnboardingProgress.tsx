import styled from "styled-components";
import { COLOR } from "../../Constants/colors";
import { flexCenter } from "../../Utils/css-helpers/flexCenter";
import { StepProps } from "./Steps/StepProps";

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 4rem;
    max-width: 100%;
`;
interface DivProps {
    filled?: boolean;
}
const RoundDiv = styled.div<DivProps>`
    ${flexCenter("row")}
    width: 2rem;
    height: 2rem;
    background-color: ${(props) =>
        props.filled ? COLOR.primary : "transparent"};

    color: ${(props) => (props.filled ? COLOR.off_white : COLOR.text_medium)};
    font-size: 0.8rem;
    font-weight: 600;
    border: 2px solid;
    border-radius: 50%;
    border-color: ${(props) => (props.filled ? COLOR.primary : COLOR.border)};
    transition: all 300ms ease-in;
`;
const LineDiv = styled.div<DivProps>`
    border-top: 1px solid;
    width: 2rem;
    transition: all 300ms ease-in;
    border-color: ${(props) => (props.filled ? COLOR.primary : COLOR.border)};
`;

export const OnboardingProgress: React.FC<StepProps> = (props) => {
    const { step } = props.formState;
    const isFilled = (number: number) => number <= step;
    return (
        <Wrapper>
            <RoundDiv filled={isFilled(1)}>
                <span>1</span>
            </RoundDiv>
            <LineDiv filled={isFilled(1)} />
            <LineDiv filled={isFilled(2)} />
            <RoundDiv filled={isFilled(2)}>
                <span>2</span>
            </RoundDiv>
            <LineDiv filled={isFilled(2)} />
            <LineDiv filled={isFilled(3)} />
            <RoundDiv filled={isFilled(3)}>
                <span>3</span>
            </RoundDiv>
            <LineDiv filled={isFilled(3)} />
            <LineDiv filled={isFilled(4)} />
            <RoundDiv filled={isFilled(4)}>
                <span>4</span>
            </RoundDiv>
        </Wrapper>
    );
};
