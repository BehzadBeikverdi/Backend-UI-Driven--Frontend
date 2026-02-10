import {useEffect, useState} from "react";
import {renderNode} from "./app/schemaRenderer.tsx";
import type {ApiAction, BackendResponse, DataResponse, SchemaNode, UiSchemaResponse} from "./schema/types.ts";
import {EndPoints} from "./values/endPoints.ts";
import {ResponseTypeEnum} from "./enums/responseTypeEnum.ts";
import {runAction} from "./service/api.ts";
import {ApiActionTypeEnum} from "./enums/apiActionTypeEnum.ts";
import {ApiCallMethodEnum} from "./enums/apiCallMethodEnum.ts";
import "./App.css"

export default function App() {
    const [schema, setSchema] = useState<UiSchemaResponse["schema"] | null>(null);
    const [dataStore, setDataStore] = useState<Record<string, unknown>>({});

    // --------- Initial fetch ---------
    useEffect(() => {
        const fetchInitial = async () => {
            try {
                // fetchPage could be used here if you prefer
                const result: BackendResponse = await runAction({
                    type: ApiActionTypeEnum.API_CALL,
                    method: ApiCallMethodEnum.GET,
                    endpoint: EndPoints.initial,
                    responseType: ResponseTypeEnum.UI_SCHEMA
                });
                if (result.responseType === ResponseTypeEnum.UI_SCHEMA) {
                    setSchema(result.schema);
                }
            } catch (err) {
                console.error(err);
            }
        };
        fetchInitial();
    }, []);

    // --------- Action handler ---------
    const handleAction = async (action?: ApiAction, payload?: Record<string, unknown>) => {
        if (!action) return;

        try {
            const result: BackendResponse = await runAction(action, payload);

            if (result.responseType === ResponseTypeEnum.DATA) {
                const dataResult = result as DataResponse;
                setDataStore(prev => ({ ...prev, [dataResult.model]: dataResult.data }));
            }

            if (result.responseType === ResponseTypeEnum.UI_SCHEMA) {
                setSchema(result.schema);
            }
        } catch (err) {
            console.error("Action failed:", err);
        }
    };

    // --------- Render ---------
    if (!schema) return <div>Loading...</div>;

    return (
        <div>
            {schema.components.map((node: SchemaNode, index: number) =>
                renderNode(node, index, handleAction, dataStore)
            )}
        </div>
    );
}
