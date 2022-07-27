import { StringTransformerType } from "./StringTransformersType";

export const removeSpaces: StringTransformerType = (input) => {
    return input.replaceAll(" ", "");
};
