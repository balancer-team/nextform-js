import { z } from 'zod'

export const formResponseSchema = z.object({
  id: z.string(),
  createdAt: z.date(),
  type: z.string(),
  reference: z.string().nullable(),
  brandId: z.string().nullable(),
  signerEmail: z.string().nullable(),
  signerName: z.string().nullable(),
  data: z.any(),
  metadata: z.record(z.string()).nullable(),
  signatures: z
    .array(
      z.object({
        id: z.string(),
        createdAt: z.date(),
        reference: z.string().nullable(),
        consent: z.boolean(),
        name: z.string(),
        email: z.string(),
        party: z.string(),
      })
    )
    .nullish(),
})

export type FormResponse = z.infer<typeof formResponseSchema>
