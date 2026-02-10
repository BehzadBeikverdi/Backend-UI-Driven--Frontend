import type { RegistryComponent } from "../schema/registry";
import type { ApiAction } from "../schema/types";

export const ActionButton: RegistryComponent = (props) => {
    const text = typeof props.text === "string" ? props.text : "Button";

    const action = props.action as ApiAction | undefined;
    const handleAction = props.handleAction as ((action?: ApiAction, payload?: Record<string, unknown>) => void) | undefined;

    return (
        <button
            style={{
                margin: 8,
                backgroundColor: "blueviolet",
                color: "white",
                padding: "8px 16px",
                borderRadius: 4,
                cursor: "pointer",
            }}
            onClick={() => handleAction?.(action)}
        >
            {text}
        </button>
    );
};
