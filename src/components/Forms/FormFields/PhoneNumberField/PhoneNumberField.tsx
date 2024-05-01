import { usePhoneNumberField } from "./hooks/usePhoneNumberField";

import TextInput from "../../../UI/TextInput/TextInput";
import FormField from "../FormField/FormField";

import { FormFieldContext } from "../FormField/context";

const fieldId = "phoneNumber";

const PhoneNumberField = () => {
    const { handleChange, revalidate, error, value } = usePhoneNumberField();

    return (
        <FormFieldContext.Provider
            value={{
                revalidate,
                value,
                error,
                fieldId,
            }}
        >
            <FormField>
                <TextInput
                    handleChange={handleChange}
                    value={value}
                    id={fieldId + "Input"}
                    autoFocus
                />
            </FormField>
        </FormFieldContext.Provider>
    );
};

export default PhoneNumberField;
