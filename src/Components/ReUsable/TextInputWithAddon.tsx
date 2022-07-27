import { forwardRef, InputHTMLAttributes } from "react";
import styled, { css } from "styled-components";
import {
    TextAddon,
    TextInput,
    TextInputDimensions,
    TextInputTypes,
} from "./TextInput-sc";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    side: "left" | "right";
    addOnText: string;
    dimensions: TextInputDimensions;
    type: TextInputTypes;
    wide?: true;
}

const borderRadiusStyles = {
    right: css`
        border-radius: 0.25rem 0 0 0.25rem;
    `,
    left: css`
        border-radius: 0 0.25rem 0.25rem 0;
    `,
};

const Wrapper = styled.div<{ side: "left" | "right"; wide?: true }>`
    position: relative;
    display: flex;
    height: fit-content;
    flex-direction: ${(props) =>
        props.side === "left" ? "row-reverse" : "row"};
    width: ${(props) => (props.wide ? "100%" : "fit-content")};

    & ${TextInput} {
        ${(props) => borderRadiusStyles[props.side]}
    }
`;

export const TextInputWithAddon: React.FC<Props> = forwardRef<
    HTMLInputElement,
    Props
>((props, ref) => {
    return (
        <Wrapper side={props.side} wide={props.wide}>
            <TextInput
                ref={ref}
                {...props}
                dimensions={props.dimensions}
                type={props.type}
            />
            <TextAddon dimensions={props.dimensions} side={props.side}>
                {props.addOnText}
            </TextAddon>
        </Wrapper>
    );
});
