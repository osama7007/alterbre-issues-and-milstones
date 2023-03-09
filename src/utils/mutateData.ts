import { serialize } from "object-to-formdata"
import { request } from "./axios-util"
import i18n from "../i18n"

//////// TYPES
const postMethods_TP = {
    post: 'POST',
    put: 'PUT'
} as const
export type MutateDataParameters_TP = { endpointName: string, dataType?: 'json' | 'formData', values?: any, method?: keyof typeof postMethods_TP }
///
//////// VARUIABLES
///
const lang = i18n.language.startsWith("ar") ? "ar" : "en"
///
export const mutateData = async <T>(
    comingData: MutateDataParameters_TP
) => {
    const { endpointName, dataType = "json", values, method = 'post' } = comingData

    if (dataType === 'json') {
        return await request<T>({
            url: endpointName,
            method,
            data: values,
        })
    }
    if (dataType === "formData") {
        let data = serialize(values)
        return await request<T>({
            url: endpointName,
            method,
            data,
            headers: {
                "Accept-Language": lang,
                "Content-Type": `multipart/form-data`
            }
        })
    }
}