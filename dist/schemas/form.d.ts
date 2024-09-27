import { z } from 'zod';
export declare const formResponseSchema: z.ZodObject<{
    id: z.ZodString;
    createdAt: z.ZodDate;
    type: z.ZodString;
    reference: z.ZodNullable<z.ZodString>;
    brandId: z.ZodNullable<z.ZodString>;
    signerEmail: z.ZodNullable<z.ZodString>;
    signerName: z.ZodNullable<z.ZodString>;
    data: z.ZodAny;
    metadata: z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodString>>;
    signatures: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        createdAt: z.ZodDate;
        reference: z.ZodNullable<z.ZodString>;
        consent: z.ZodBoolean;
        name: z.ZodString;
        email: z.ZodString;
        party: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: string;
        reference: string | null;
        createdAt: Date;
        consent: boolean;
        name: string;
        email: string;
        party: string;
    }, {
        id: string;
        reference: string | null;
        createdAt: Date;
        consent: boolean;
        name: string;
        email: string;
        party: string;
    }>, "many">>>;
}, "strip", z.ZodTypeAny, {
    id: string;
    reference: string | null;
    signerName: string | null;
    signerEmail: string | null;
    brandId: string | null;
    createdAt: Date;
    type: string;
    metadata: Record<string, string> | null;
    data?: any;
    signatures?: {
        id: string;
        reference: string | null;
        createdAt: Date;
        consent: boolean;
        name: string;
        email: string;
        party: string;
    }[] | null | undefined;
}, {
    id: string;
    reference: string | null;
    signerName: string | null;
    signerEmail: string | null;
    brandId: string | null;
    createdAt: Date;
    type: string;
    metadata: Record<string, string> | null;
    data?: any;
    signatures?: {
        id: string;
        reference: string | null;
        createdAt: Date;
        consent: boolean;
        name: string;
        email: string;
        party: string;
    }[] | null | undefined;
}>;
export type FormResponse = z.infer<typeof formResponseSchema>;
