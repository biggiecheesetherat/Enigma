import { writable } from "svelte/store";

export const activeModals = writable({
    settings: false,
});