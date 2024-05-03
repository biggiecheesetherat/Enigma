// JSON.stringify can fail on circular structures
const safeStringify = (value) => {
    try {
        return JSON.stringify(value);
    } catch {
        return "null";
    }
}
const safeParse = (json) => {
    try {
        return JSON.parse(json);
    } catch {
        return;
    }
}

export function encodeToSave(value) {
    // Strings will not break this, since they include the quotation marks
    if (value === undefined) return "undefined";
    return safeStringify(value);
}

export function decodeFromSave(string) {
    // Strings will not break this, since they include the quotation marks
    if (string === 'undefined') return undefined;
    return safeParse(string);
}