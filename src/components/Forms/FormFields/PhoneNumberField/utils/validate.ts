import { PhoneNumberFieldValue } from "../hooks/types";

export const validate = (value: PhoneNumberFieldValue) => {
    return (
        value.length === 16
        ? null
        : new ValidationError("invalid", "Введите корректный номер телефона!")
    );
}

export class ValidationError {
    constructor (public type: "invalid", public message: string) {
        this.type = type;
        this.message = message;
    }
}