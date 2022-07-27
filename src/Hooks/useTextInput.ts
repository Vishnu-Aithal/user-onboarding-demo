import React, { useRef, useState } from "react";
import {
    ParametersExceptFirst,
    TextInputValidatorType,
} from "../Utils/TextInputValidators/TextInputValidatorType";

export const useTextInput = (
    validatorFn: TextInputValidatorType,
    options: ParametersExceptFirst<TextInputValidatorType>
) => {
    const [value, setValue] = useState("");
    const [valid, setValid] = useState(true);
    const ref = useRef<HTMLInputElement>(null);
    const onChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setValue(e.target.value);
        if (validatorFn(e.target.value, ...options)) {
            setValid(true);
        } else {
            setValid(false);
        }
    };
    const onBlur: React.FocusEventHandler<HTMLInputElement> = (e) => {
        setValid(validatorFn(value, ...options));
    };

    return { ref, value, onChange, onBlur, valid } as const;
};
