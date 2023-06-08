export interface Response<T> {
    isSuccess: boolean,
    data: T,
    message: "",
    errors: ""
}