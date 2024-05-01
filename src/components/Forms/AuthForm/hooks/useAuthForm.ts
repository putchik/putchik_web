import { useForm } from "../../Form/hooks/useForm";
import { OnFormSubmitStart, UseFormResult } from "../../Form/hooks/types";

export const useAuthForm = (): UseFormResult => {
    const onFormSubmitStart: OnFormSubmitStart = () => {
        return new Promise((res) => setTimeout(() => res(null), 1000));
    };

    const {
        startFormSubmit,
        pushFieldToSubmit,
        formId,
    } = useForm({
        formId: "authForm",
        fieldValues: {
            phoneNumber: "+7 ",
            useTermsField: false,
        },
        onFormSubmitStart,
    });

    return {
        startFormSubmit,
        pushFieldToSubmit,
        formId,
    }
}