import { FormContext } from "../context";
import Body from "./Body/Body";

const AuthForm = () => {
    return (
        <FormContext.Provider
            value={{
                pushFieldToSubmit: () => {},
                formId: "authForm",
            }}
        >
            <form>
                <Body />
            </form>
        </FormContext.Provider>
    );
};

export default AuthForm;
