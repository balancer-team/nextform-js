"use strict";
// Joi Version
//
// module.exports = Joi.object({
//   name: Joi.string().max(255).required(),
//   businessName: Joi.string().empty(''),
//   taxClassification: Joi.string()
//     .valid('individual', 'cCorp', 'sCorp', 'partnership', 'trustOrEstate', 'llc', 'other')
//     .required(),
//   llcClassification: Joi.when('taxClassification', {
//     is: 'llc',
//     then: Joi.string().valid('c', 's', 'p').required(),
//     otherwise: Joi.string().empty(''),
//   }),
//   otherClassification: Joi.when('llcClassification', {
//     is: 'other',
//     then: Joi.string().max(255).required(),
//     otherwise: Joi.string().empty(''),
//   }),
//   line3b: Joi.boolean().default(false),
//   payeeExemption: Joi.string()
//     .empty('')
//     .pattern(/^[0-9]([0-3])?$/),
//   factaExemption: Joi.string()
//     .empty('')
//     .lowercase()
//     .pattern(/^[a-m]$/),
//   country: Joi.string().length(2).lowercase().required(),
//   address: Joi.string().required(),
//   city: Joi.string().required(),
//   state: Joi.when('country', {
//     is: 'us',
//     then: Joi.string().length(2).lowercase().required(),
//     otherwise: Joi.string().empty(''),
//   }),
//   zip: Joi.when('country', {
//     is: 'us',
//     then: Joi.string()
//       .pattern(/^\d{5}(?:[-\s]?\d{4})?$/)
//       .required(),
//     otherwise: Joi.string().empty(''),
//   }),
//   account: Joi.string().empty(''),
//   ssn: Joi.string()
//     .empty('')
//     .pattern(/^\d{3}-?\d{2}-?\d{4}$/)
//     .replace('-', ''),
//   ein: Joi.string()
//     .empty('')
//     .pattern(/^\d{2}-?\d{7}$/)
//     .replace('-', ''),
//   hasWithholding: Joi.boolean().required(),
// }).xor('ssn', 'ein')
Object.defineProperty(exports, "__esModule", { value: true });
exports.w9Schema = void 0;
const zod_1 = require("zod");
// Zod Version
exports.w9Schema = zod_1.z
    .object({
    name: zod_1.z.string().min(1),
    businessName: zod_1.z.string().optional(),
    taxClassification: zod_1.z.enum(['individual', 'cCorp', 'sCorp', 'partnership', 'trustOrEstate', 'llc', 'other']),
    llcClassification: zod_1.z.string().optional(),
    otherClassification: zod_1.z.string().optional(),
    line3b: zod_1.z.boolean().default(false),
    payeeExemption: zod_1.z
        .string()
        .regex(/^[0-9]([0-3])?$/)
        .optional(),
    factaExemption: zod_1.z
        .string()
        .regex(/^[a-m]$/)
        .optional(),
    country: zod_1.z.string().length(2).toLowerCase(),
    address: zod_1.z.string(),
    city: zod_1.z.string(),
    state: zod_1.z.string().optional(),
    zip: zod_1.z.string().optional(),
    account: zod_1.z.string().optional(),
    ssn: zod_1.z
        .string()
        .regex(/^\d{3}-?\d{2}-?\d{4}$/)
        .transform((v) => v.replace('-', ''))
        .optional(),
    ein: zod_1.z
        .string()
        .regex(/^\d{2}-?\d{7}$/)
        .transform((v) => v.replace('-', ''))
        .optional(),
    hasWithholding: zod_1.z.boolean(),
})
    .refine((data) => {
    return data.ssn !== '' || data.ein !== '';
});
// Example usage
const validW9 = {
    name: 'a',
    taxClassification: 'individual',
    country: 'us',
    address: '123 Main St',
    city: 'Springfield',
    state: 'il',
    zip: '62701',
    ssn: '123-45-6789',
    hasWithholding: false,
};
const parsedW9 = exports.w9Schema.parse(validW9);
console.log(parsedW9);
