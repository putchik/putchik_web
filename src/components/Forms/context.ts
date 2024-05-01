import { createContext, useContext } from "react";
import { PushFieldToSubmit } from "./types";

type FormContextType = {
    formId: string;
    pushFieldToSubmit: PushFieldToSubmit;
};

export const FormContext = createContext<null | FormContextType>(null);

export const useFormContext = () => {
    const context = useContext(FormContext);

    if (!context) {
        throw new Error("useFormContext must be called within FormContext.");
    }

    return context;
}