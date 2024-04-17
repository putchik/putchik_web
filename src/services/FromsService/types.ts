export type SubmitOptions = {
    additionalData?: any;
};

export type OnSubmitSuccess = (response: Response) => void;
export type OnSubmitFailure = (error: Error) => void;
export type OnSubmitEnd = () => void;
export type Submit = (
    fields: Map<string, any>,
    options?: SubmitOptions,
) => Promise<any>;

export type GetSubmitHandlerParams = {
    needRevalidate: boolean;
    submitOptions: SubmitOptions;
};
export type GetSubmitHandler = (
    params: GetSubmitHandlerParams,
) => () => void;

export type UseFormHookParams = {
    formId: string,
    submit: Submit,
    onSubmitEnd: OnSubmitEnd,
    onSubmitSuccess?: OnSubmitSuccess,
    onSubmitFailure?: OnSubmitFailure,
};
export type UseFormHookResult = {
    isSending: boolean;
    submit: Submit;

    getSubmitHandler: GetSubmitHandler;
};
export type UseFormHook = (
    params: UseFormHookParams,
) => UseFormHookResult;