"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formResponseSchema = void 0;
const zod_1 = require("zod");
exports.formResponseSchema = zod_1.z.object({
    id: zod_1.z.string(),
    createdAt: zod_1.z.date(),
    type: zod_1.z.string(),
    reference: zod_1.z.string().nullable(),
    brandId: zod_1.z.string().nullable(),
    signerEmail: zod_1.z.string().nullable(),
    signerName: zod_1.z.string().nullable(),
    data: zod_1.z.any(),
    metadata: zod_1.z.record(zod_1.z.string()).nullable(),
    signatures: zod_1.z
        .array(zod_1.z.object({
        id: zod_1.z.string(),
        createdAt: zod_1.z.date(),
        reference: zod_1.z.string().nullable(),
        consent: zod_1.z.boolean(),
        name: zod_1.z.string(),
        email: zod_1.z.string(),
        party: zod_1.z.string(),
    }))
        .nullish(),
});
