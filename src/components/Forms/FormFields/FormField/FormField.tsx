import { useEffect } from "react";

import { useFormContext } from "../../context";
import { useFormFieldContext } from "./context";

import { FormFieldProps } from "./types";

const FormField = ({ children }: FormFieldProps) => {
    const { formId, pushFieldToSubmit } = useFormContext();
    const { revalidate, value, fieldId } = useFormFieldContext();

    useEffect(() => {
        const onSubmitStart = () => {
            pushFieldToSubmit({
                fieldId,
                error: revalidate(),
                value,
            });
        };

        document.addEventListener(`submit-start-${formId}`, onSubmitStart);

        return () => {
            document.removeEventListener(
                `submit-start-${formId}`,
                onSubmitStart
            );
        };
    }, []);

    return <div>{children}</div>;
};

export default FormField;
