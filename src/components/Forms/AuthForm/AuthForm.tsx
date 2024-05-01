import { FormContext } from "../context";

import Body from "./Body/Body";
import { useAuthForm } from "./hooks/useAuthForm";

const AuthForm = () => {
    const {
        startFormSubmit,
        pushFieldToSubmit,
        formId,
    } = useAuthForm();

    return (
        <FormContext.Provider
            value={{
                startFormSubmit,
                pushFieldToSubmit,
                formId,
            }}
        >
            <form>
                <Body />
            </form>
        </FormContext.Provider>
    );
};

export default AuthForm;
