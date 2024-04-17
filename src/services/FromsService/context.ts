import { createContext, useContext } from 'react'; 
import { OnSubmitEnd, OnSubmitFailure, OnSubmitSuccess, Submit } from './types';

export type FormContextType = {
    formId: string;
    submit: Submit;
    onSubmitSuccess?: OnSubmitSuccess;
    onSubmitFailure?: OnSubmitFailure;
    onSubmitEnd: OnSubmitEnd;
};

export const FormContext = createContext<FormContextType | null>(null);

export const useFormContext = () => {
    const context = useContext(FormContext);

    if (!context) {
        throw new Error('useFormContext must be used within a FormContext');
    }

    return context;
};