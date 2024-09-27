import { SessionResponse } from '../src/schemas/session';
type NexformOptions = {
    apiKey: string;
};
type CreateSessionOptions = {
    formType: string;
    reference?: string;
    successUrl?: string;
    signerEmail?: string;
    customization?: string;
    brandId?: string;
    expiresAt?: Date;
    expirationMessage?: string;
    formData?: any;
};
export declare class Nextform {
    readonly apiKey: string;
    constructor({ apiKey }: NexformOptions);
    createSession({ formType, reference, successUrl, signerEmail, customization, brandId, expiresAt, expirationMessage, formData, }: CreateSessionOptions): Promise<SessionResponse>;
}
export {};
