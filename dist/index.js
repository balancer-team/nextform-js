"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Nextform = void 0;
const constants_1 = require("./constants");
class Nextform {
    apiKey;
    constructor({ apiKey }) {
        this.apiKey = apiKey;
    }
    async createSession({ formType, reference, successUrl, signerEmail, customization, brandId, expiresAt, expirationMessage, formData, }) {
        const res = await fetch(`${constants_1.BASE_URL}/sessions`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${this.apiKey}`,
            },
            body: JSON.stringify({
                formType,
                reference,
                successUrl,
                signerEmail,
                customization,
                brandId,
                expiresAt,
                expirationMessage,
                formData,
            }),
        });
        if (!res.ok) {
            throw new Error('Failed to create session');
        }
        const data = await res.json();
        return data;
    }
}
exports.Nextform = Nextform;
