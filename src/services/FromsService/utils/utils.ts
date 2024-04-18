import { v4 } from "uuid";

export const generateFormId = () => v4().slice(0, 8);

export class MyForm {
    public fieldsCount: number;
    public readyFieldsCount: number;
    public error: boolean;
    public fields: Map<string, any>;

    constructor() {
        this.fieldsCount = 0;
        this.readyFieldsCount = 0;
        this.error = false;
        this.fields = new Map();
    }
}
