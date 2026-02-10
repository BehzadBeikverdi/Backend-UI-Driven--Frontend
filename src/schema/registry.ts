import { Header } from "../components/Header";
import { ActionButton } from "../components/ActionButton";
import { BalanceCard } from "../components/BalanceCard";
import { DynamicForm } from "../components/DynamicForm";
import React from "react";
import type {ApiAction} from "./types.ts";

export interface BaseComponentProps {
    children?: React.ReactNode;
    handleAction?: (action?: ApiAction, payload?: Record<string, unknown>) => void;
    action?: ApiAction;
}

export type RegistryComponent =
    React.FC<BaseComponentProps & Record<string, unknown>>;

export const registry: Record<string, RegistryComponent> = {
    Header,
    ActionButton,
    BalanceCard,
    DynamicForm,
};
