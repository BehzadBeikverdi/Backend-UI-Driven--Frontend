import type { RegistryComponent } from "../schema/registry";

export const BalanceCard: RegistryComponent = (props) => {
    const amount = typeof props.amount === "number" ? props.amount : "-";
    const currency = typeof props.currency === "string" ? props.currency : "";

    return (
        <div
            style={{
                borderRadius: 8,
                backgroundColor: "blueviolet",
                height: 42,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: 8,
                color: "white",
                fontWeight: "bold",
            }}
        >
            Balance: {amount} {currency}
        </div>
    );
};
