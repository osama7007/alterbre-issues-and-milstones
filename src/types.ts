import { AxiosRequestConfig } from "axios"

/* 
Permissions
*/
export type permissionsRule = 'OR' | "AND"

/* 
api calls
*/
export type PostedData_TP = 'json' | 'formData'

const postMethods_TP = {
    post: 'POST',
    put: 'PUT'
} as const

export type MutateDataParameters_TP = {
    endpointName: string,
    dataType?: PostedData_TP,
    values?: any,
    method?: keyof typeof postMethods_TP,
    axiosOptions?: AxiosRequestConfig }