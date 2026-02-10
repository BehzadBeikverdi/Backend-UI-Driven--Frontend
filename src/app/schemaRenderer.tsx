import { registry } from "../schema/registry";
import type {ApiAction, SchemaNode} from "../schema/types.ts";

export function renderNode(
    node: SchemaNode,
    index: number,
    handleAction: (action?: ApiAction, payload?: Record<string, unknown>) => void,
    dataStore: Record<string, unknown>
) {
    const Component = registry[node.type];
    if (!Component) return null;

    const props = { ...node.props, action: node.action, handleAction };

    // if (node.type === "BalanceCard" && dataStore["BalanceModel"]) {
    //     Object.assign(props, dataStore["BalanceModel"]);
    // }
    // 1. If node has 'data' in props, merge it (from backend UI schema)
    if (node.props?.data && typeof node.props.data === "object") {
        Object.assign(props, node.props.data);
    }

    // 2. If node has 'model' and dataStore has updated data, override with latest
    if (node.props?.model && dataStore[node.props.model as string]) {
        Object.assign(props, dataStore[node.props.model as string]);
    }


    return (
        <Component key={index} {...props}>
            {node.children?.map((childNode, i) =>
                renderNode(childNode, i, handleAction, dataStore)
            )}
        </Component>
    );
}
