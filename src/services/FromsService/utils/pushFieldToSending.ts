import { FormsService } from "../FormsService";
import { PushFieldToSending } from "./types";

export const pushFieldToSending: PushFieldToSending = ({
    formContext,
    fieldId,
    value,
    error,
    submitOptions,
}) => {
    const { formId, submit, onSubmitFailure, onSubmitSuccess, onSubmitEnd } =
        formContext;

    const form = FormsService.getInstance().getForm(formId);

    form.fieldsCount = document.querySelectorAll(
        `[data-formId="${formId}"]`
    ).length;
    form.fields.set(fieldId, value);

    if (!!error) {
        form.error = true;
    }

    form.readyFieldsCount++;

    if (form.readyFieldsCount < form.fieldsCount) {
        return;
    }

    form.readyFieldsCount = 0;

    if (form.error) {
        form.error = false;
        return;
    }

    submit(form.fields, submitOptions)
        .then(onSubmitSuccess)
        .catch(onSubmitFailure)
        .finally(onSubmitEnd);
};
