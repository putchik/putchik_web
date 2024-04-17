import { FormContextType } from "../context";
import { SubmitOptions } from "../types";

export type PushFieldToSendingParams = {
    formContext: FormContextType,
    fieldId: string,
    value: AnyFieldValue,
    error: ValidationResult,
    submitOptions: SubmitOptions,
};
export type PushFieldToSending = (params: PushFieldToSendingParams) => void;