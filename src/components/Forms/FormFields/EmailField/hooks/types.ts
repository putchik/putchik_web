import { EmailFieldValidationError as EmailFieldValidationError } from "../utils/validate";

export type EmailFieldValue = string;

export type EmailFieldValidationResult =
    EmailFieldValidationError | null;

export type UseEmailFieldResult = {
    revalidate: EmailFieldRevalidate;
    value: EmailFieldValue;
    error: EmailFieldValidationResult;
    handleChange: (value: EmailFieldValue) => void;
};

export type UseEmailField = () => UseEmailFieldResult;

export type EmailFieldRevalidate =
    () => Promise<EmailFieldValidationResult>;

export type EmailFieldSubmitEvent = CustomEvent<{
    formId: string;
}>;

export type EmailFieldPushEvent = CustomEvent<{
    value: EmailFieldValue;
    error: EmailFieldValidationResult;
}>;
