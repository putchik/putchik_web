import { useFormNumberField } from "./usePhoneNumberField";
import { useCallback, useState } from "react";

export const useFormNumberField = ({ init }) => {
    const [value, setValue] = useState<string>(init);

    const revalidate = useCallback(() => {}, []);

    return {
        value,
        error,
        revalidate,
        handleChange,
    };
};
