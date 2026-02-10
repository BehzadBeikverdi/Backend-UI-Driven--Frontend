import type {RegistryComponent} from "../schema/registry";

export const Header: RegistryComponent = (props) => {
    const title =
        typeof props.title === "string"
            ? props.title
            : "Missing title";

    return (
        <h1
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                background: "blueviolet",
                color: "white",
                padding: 12,
            }}
        >
            {title}
        </h1>
    );
};
