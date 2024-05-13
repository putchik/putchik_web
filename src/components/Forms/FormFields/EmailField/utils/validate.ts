import { EmailFieldValue } from "../hooks/types";

export const validate = (value: EmailFieldValue) => {
    return value.length === 16
        ? null
        : new EmailFieldValidationError(
            "invalid",
            "Введите корректный адрес почты!"
        );
};

export class EmailFieldValidationError {
    constructor(
        public type: "invalid",
        public message: string
    ) {
        this.type = type;
        this.message = message;
    }
}
