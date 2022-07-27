import styled from "styled-components";
import { EdenLogo } from "../../Assets/Logo";
import { COLOR } from "../../Constants/colors";
import { flexCenter } from "../../Utils/css-helpers/flexCenter";

const Wrapper = styled.div`
    ${flexCenter("row")}
    gap: 0.25rem;
    margin-bottom: 3rem;
    padding-right: 0.75rem;
`;

export const Heading = styled.h1`
    text-align: center;
    font-size: 1.75rem;
    color: ${COLOR.text_dark};
`;

export const EdenHeader: React.FC = () => {
    return (
        <Wrapper>
            <EdenLogo height="2.5rem" width="2.5rem" />
            <Heading>Eden</Heading>
        </Wrapper>
    );
};
