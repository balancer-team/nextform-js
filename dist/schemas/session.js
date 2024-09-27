"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sessionResponseSchema = void 0;
const zod_1 = require("zod");
exports.sessionResponseSchema = zod_1.z.object({
    id: zod_1.z.string(),
    formType: zod_1.z.string(),
    reference: zod_1.z.string().nullish(),
    status: zod_1.z.string(),
    url: zod_1.z.string(),
    successUrl: zod_1.z.string().nullable(),
    signerName: zod_1.z.string().nullable(),
    signerEmail: zod_1.z.string().nullable(),
    customization: zod_1.z.string().nullish(),
    brand: zod_1.z.any(),
    brandId: zod_1.z.string().nullish(),
    expiresAt: zod_1.z.date().nullish(), // Links never expire
    createdAt: zod_1.z.date(),
    emailedAt: zod_1.z.date().nullish(),
    viewedAt: zod_1.z.date().nullish(),
    expirationMessage: zod_1.z.string().nullish(),
    customDomain: zod_1.z.string().nullish(),
    formData: zod_1.z.any(),
    metadata: zod_1.z.record(zod_1.z.string()).nullish(),
});
