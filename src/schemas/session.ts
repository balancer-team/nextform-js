import { z } from 'zod'

export const sessionResponseSchema = z.object({
  id: z.string(),
  formType: z.string(),
  reference: z.string().nullish(),
  status: z.string(),
  url: z.string(),
  successUrl: z.string().nullable(),
  signerName: z.string().nullable(),
  signerEmail: z.string().nullable(),
  customization: z.string().nullish(),
  brand: z.any(),
  brandId: z.string().nullish(),
  expiresAt: z.date().nullish(), // Links never expire
  createdAt: z.date(),
  emailedAt: z.date().nullish(),
  viewedAt: z.date().nullish(),
  expirationMessage: z.string().nullish(),
  customDomain: z.string().nullish(),
  formData: z.any(),
  metadata: z.record(z.string()).nullish(),
})

export type SessionResponse = z.infer<typeof sessionResponseSchema>
