import * as Yup from "yup";
import type {FormFieldSchema} from "../schema/types.ts";

export function buildYupSchema(fields: FormFieldSchema[]) {
    const shape: Record<string, Yup.AnySchema> = {};

    for (const field of fields) {
        let rule = Yup.string();

        if (field.required) {
            rule = rule.required("Required");
        }

        if (field.minLength) {
            rule = rule.min(field.minLength, `Min ${field.minLength} characters`);
        }

        if (field.format === "EMAIL") {
            rule = rule.email("Invalid email");
        }

        shape[field.name] = rule;
    }

    return Yup.object(shape);
}
