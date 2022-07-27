import { TextInputValidatorType } from "./TextInputValidatorType";

export const onlyLetters: TextInputValidatorType = (
    input,
    required,
    maxLength
) => {
    if (required && input.trim() === "") {
        return false;
    }
    if (maxLength && input.trim().length > maxLength) {
        return false;
    }
    return /^[a-zA-Z]+$/.test(input);
};
