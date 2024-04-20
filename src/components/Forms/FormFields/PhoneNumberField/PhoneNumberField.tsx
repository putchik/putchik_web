import TextInput from "../../../UI/TextInput/TextInput";
import { usePhoneNumberField } from "./hooks/usePhoneNumberField";

const PhoneNumberField = () => {
    const {
        handleChange,
        revalidate,
        error,
        value,
    } = usePhoneNumberField();

    return (
        <div>
            <TextInput
                handleChange={handleChange}
                value={value}
                id="phoneNumber"
                autoFocus
            />
        </div>
    );
};

export default PhoneNumberField;
