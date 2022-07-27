export type TextInputValidatorType = (
    textInput: string,
    required?: boolean,
    maxLength?: number
) => boolean;

export type ParametersExceptFirst<F> = F extends (
    arg0: any,
    ...rest: infer P
) => any
    ? P
    : never;
