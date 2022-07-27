import styled from "styled-components";
import { MultiUserIcon } from "../../../../Assets/Icons/MultiUserIcon";
import { UserIcon } from "../../../../Assets/Icons/UserIcon";
import { COLOR } from "../../../../Constants/colors";
import { MutedText } from "../../../ReUsable/Text-sc";
import { StepProps } from "../StepProps";

const SelectBox = styled.button<{ active?: boolean }>`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    width: 100%;
    padding: 1rem;
    text-align: left;
    gap: 0.75rem;
    color: ${COLOR.text_dark};
    border: solid 2px;
    border-color: ${(props) => (props.active ? COLOR.primary : COLOR.border)};
    border-radius: 0.5rem;
    background-color: transparent;
    cursor: pointer;
    transition: all 200ms ease-out;
    & svg {
        fill: ${(props) => (props.active ? COLOR.primary : COLOR.text_dark)};
    }
    & ${MutedText} {
        margin-bottom: auto;
    }
`;

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: stretch;
    justify-content: center;
    gap: 2rem;
`;

export const StepSelectBox: React.FC<StepProps> = ({
    formDispatch,
    formState,
}) => {
    return (
        <Wrapper>
            <SelectBox
                active={formState.usage === "myself"}
                type="button"
                onClick={() =>
                    formDispatch({
                        type: "SET_USAGE",
                        payload: { usage: "myself" },
                    })
                }>
                <UserIcon width="1.25rem" height="1.5rem" />
                <h3>For myself</h3>
                <MutedText>
                    Write better, Think more clearly, Stay organized.
                </MutedText>
            </SelectBox>
            <SelectBox
                active={formState.usage === "team"}
                type="button"
                onClick={() =>
                    formDispatch({
                        type: "SET_USAGE",
                        payload: { usage: "team" },
                    })
                }>
                <MultiUserIcon width="1.25rem" height="1.5rem" />
                <h3>With my team</h3>
                <MutedText>
                    Wikis, docs, tasks & projects, all in one place.
                </MutedText>
            </SelectBox>
        </Wrapper>
    );
};
