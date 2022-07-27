import { createGlobalStyle } from "styled-components";
import { COLOR } from "./Constants/colors";

export const GlobalStyles = createGlobalStyle`
body, body *{
    margin: 0;
    padding:0;
    box-sizing: border-box;

}

body {
        color: ${COLOR.text_dark};
}
`;
