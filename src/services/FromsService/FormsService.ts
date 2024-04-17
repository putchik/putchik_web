import { MyForm, generateFormId } from "./utils/utils";

export class FormsService {
    public forms = new Map<string, MyForm>();
    private static _instance: FormsService | null;

    static getInstance() {
        if (!FormsService._instance) {
            FormsService._instance = new FormsService();
        }
        
        return FormsService._instance;
    }

    constructor () {
        if (FormsService._instance) {
            return FormsService._instance;
        }
    }

    deleteForm(id: string) {
        this.forms.delete(id);
    }

    createForm() {
        const id = generateFormId();

        if (!this.forms.get(id)) {
            this.forms.set(id, new MyForm());
        }

        return id;
    }

    getForm(formId: string) {
        const form = this.forms.get(formId);

        return form!;
    }
}