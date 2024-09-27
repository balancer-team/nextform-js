import { BASE_URL } from './constants'
import { SessionResponse } from '../src/schemas/session'

type NexformOptions = {
  apiKey: string
}

type CreateSessionOptions = {
  formType: string
  reference?: string
  successUrl?: string
  signerEmail?: string
  customization?: string
  brandId?: string
  expiresAt?: Date
  expirationMessage?: string
  formData?: any
}

export class Nextform {
  readonly apiKey: string

  constructor({ apiKey }: NexformOptions) {
    this.apiKey = apiKey
  }

  async createSession({
    formType,
    reference,
    successUrl,
    signerEmail,
    customization,
    brandId,
    expiresAt,
    expirationMessage,
    formData,
  }: CreateSessionOptions): Promise<SessionResponse> {
    const res = await fetch(`${BASE_URL}/sessions`, {
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
    })

    if (!res.ok) {
      throw new Error('Failed to create session')
    }

    const data = await res.json()

    return data as SessionResponse
  }
}
