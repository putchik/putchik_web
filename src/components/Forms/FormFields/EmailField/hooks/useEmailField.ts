import { useCallback, useState } from "react";
import {
    EmailFieldValue,
    UseEmailField,
    EmailFieldValidationResult,
} from "./types";
import { validate } from "../utils/validate";
import { defaultValue, parseValue } from "../utils/parseValue";

export const useEmailField: UseEmailField = () => {
    const [value, setValue] = useState<EmailFieldValue>(defaultValue);
    const [error, setError] = useState<EmailFieldValidationResult>(null);

    const revalidate = useCallback(async () => {
        return validateAndSetError(value);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value]);

    const validateAndSetError = useCallback((val: EmailFieldValue) => {
        const err = validate(val);

        setError(err);

        return err;
    }, []);

    const handleChange = useCallback((val: EmailFieldValue) => {
        setValue(parseValue(val));
    }, []);

    return {
        value,
        error,
        revalidate,
        handleChange,
    };
};
