import { ResponseTypeEnum } from "../enums/responseTypeEnum";
import { ApiCallMethodEnum } from "../enums/apiCallMethodEnum";
import { ApiActionTypeEnum } from "../enums/apiActionTypeEnum";
import {FieldFormatEnum} from "../enums/fieldFormatEnum.ts";

export interface ApiAction {
    type: ApiActionTypeEnum;
    endpoint: string;
    method?: ApiCallMethodEnum;
    responseType: ResponseTypeEnum;
    model?: string;
}

export interface SchemaNode {
    type: string;
    props?: Record<string, unknown>;
    action?: ApiAction;
    children?: SchemaNode[];
}

export interface UiSchemaResponse {
    responseType: ResponseTypeEnum.UI_SCHEMA;
    schema: {
        components: SchemaNode[];
    };
}

export interface DataResponse {
    responseType: ResponseTypeEnum.DATA;
    model: string;
    data: Record<string, unknown>;
}

export interface FormFieldSchema {
    name: string;
    label?: string;
    required?: boolean;
    minLength?: number;
    format?: FieldFormatEnum;
}

export interface DynamicFormProps {
    fields: FormFieldSchema[];
    action?: ApiAction;
    handleAction?: (action?: ApiAction, values?: Record<string, string>) => void;
}

export type BackendResponse = UiSchemaResponse | DataResponse;
