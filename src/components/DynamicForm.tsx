import { Formik, Form, Field, ErrorMessage } from "formik";
import { buildYupSchema } from "../form/yupBuilder";
import type { RegistryComponent } from "../schema/registry";
import type { ApiAction, FormFieldSchema } from "../schema/types";

export const DynamicForm: RegistryComponent = (props) => {
    // Runtime-safe prop extraction
    const fields = Array.isArray(props.fields) ? (props.fields as FormFieldSchema[]) : [];
    const action = props.action as ApiAction | undefined;
    const handleAction = props.handleAction as ((action?: ApiAction, values?: Record<string, string>) => void) | undefined;

    if (fields.length === 0) return null;

    // Initialize values
    const initialValues = fields.reduce<Record<string, string>>((acc, f) => {
        acc[f.name] = "";
        return acc;
    }, {});

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={buildYupSchema(fields)}
            onSubmit={(values) => handleAction?.(action, values)}
        >
            {({ isSubmitting }) => (
                <Form style={{ marginTop: 60 }}>
                    {fields.map((f) => (
                        <div key={f.name} style={{ margin: 8 }}>
                            {f.label && <label>{f.label}</label>}
                            <Field
                                name={f.name}
                                type={f.format === "EMAIL" ? "email" : "text"}
                                style={{ marginLeft: 8, padding: 4 }}
                            />
                            <div style={{ color: "red" }}>
                                <ErrorMessage name={f.name} />
                            </div>
                        </div>
                    ))}
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        style={{ margin: 8, backgroundColor: "blueviolet", color: "white", padding: "8px 16px" }}
                    >
                        {isSubmitting ? "Submitting..." : "Submit"}
                    </button>
                </Form>
            )}
        </Formik>
    );
};
