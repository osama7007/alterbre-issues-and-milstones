import { AxiosRequestConfig, HttpStatusCode } from "axios"
import { FormikErrors } from "formik"
import { SlideImage } from "yet-another-react-lightbox"


/* 
permissions
*/
export type permissionsRule_TP = 'OR' | "AND"

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
    axiosOptions?: AxiosRequestConfig
}

// custom error type
export type CError_TP = {
    response: {
        data: {
            is_success: false
            status_code: HttpStatusCode
            message: string
            data?: FormikErrors<{ [key: string]: string[]; }>
        }
    }

}

/* 
upload
*/
// custom file type
export interface CFile_TP extends File {
    src: string
    preview: string
    id: string
}

// custom image file type
export interface CImageFile_TP extends SlideImage, CFile_TP {
    type: "image"
}