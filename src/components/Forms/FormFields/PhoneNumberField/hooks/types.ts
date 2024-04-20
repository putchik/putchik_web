import { ValidationError } from "../utils/validate";

export type PhoneNumberFieldValue = string;

export type ValidationResult = ValidationError | null;

export type UsePhoneNumberFieldResult = {
    revalidate: Revalidate;
    value: PhoneNumberFieldValue;
    error: ValidationResult;
    handleChange: (value: PhoneNumberFieldValue) => void;

};

export type UsePhoneNumberField = () => UsePhoneNumberFieldResult;

export type Revalidate = () => ValidationResult;