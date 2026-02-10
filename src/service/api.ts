import type { BackendResponse, ApiAction } from "../schema/types";
import {EndPoints} from "../values/endPoints.ts";

/**
 * Generic function to run a backend-driven action.
 * @param baseUrl - Base API URL
 * @param action - Backend-defined action
 * @param payload - Optional payload for POST/PUT requests
 * @returns Promise resolving to BackendResponse
 */
export async function runAction(
    action: ApiAction,
    payload?: Record<string, unknown>
): Promise<BackendResponse> {
    const baseUrl = EndPoints.baseUrl;
    const res = await fetch(`${baseUrl}${action.endpoint}`, {
        method: action.method,
        headers: { "Content-Type": "application/json" },
        body: payload ? JSON.stringify(payload) : undefined,
    });

    if (!res.ok) {
        throw new Error(`API request failed: ${res.status} ${res.statusText}`);
    }

    const data: BackendResponse = await res.json();
    return data;
}

