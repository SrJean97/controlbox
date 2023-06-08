import { IAddress } from "./address"

export interface IUser {
    id?: number | null,
    name?: string | null,
    username?: string | null,
    email?: string | null,
    address?: IAddress | null,
    phone?: string | null,
    website?: string | null,
    company?: {
        name?: string | null,
        catchPhrase?: string | null,
        bs?: string | null
    }
}