import { serialize } from "object-to-formdata"
import { request } from "./axios-util"
import i18n from "../i18n"
import { MutateDataParameters_TP } from "../types"

//////// TYPES
///
//////// VARUIABLES
///
const lang = i18n.language.startsWith("ar") ? "ar" : "en"
///
export const mutateData = async <T>(
    comingData: MutateDataParameters_TP
) => {
    const { endpointName, dataType = "json", values, method = 'post', axiosOptions } = comingData

    if (dataType === 'json') {
        return await request<T>({
            url: endpointName,
            method,
            data: values,
            ...axiosOptions
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
            },
            ...axiosOptions
        })
    }
}