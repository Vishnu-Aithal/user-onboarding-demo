import { TextInputValidatorType } from "./TextInputValidatorType";

export const onlyLettersAndSpaces: TextInputValidatorType = (
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
    return /^[A-Za-z\s]*$/.test(input);
};
