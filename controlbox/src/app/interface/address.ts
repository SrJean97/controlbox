export interface IAddress{
    street?: string | null,
    suite?: string | null,
    city?: string | null,
    zipcode?: string | null,
    geo?: IGeo
}

export interface IGeo {
    lat?: string | null,
    lng?: string | null
}