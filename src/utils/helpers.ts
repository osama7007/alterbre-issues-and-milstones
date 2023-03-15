import { CFile_TP } from "../types"

//  PDF OR IMAGE
type pdfOrImageReturn = 'pdf' | 'image' | 'unknown'
export const pdfOrImage = (file: CFile_TP): pdfOrImageReturn => {
    const pdfWordOccurrence = file.type.indexOf("pdf")
    const imageWordOccurrence = file.type.indexOf("image")
    if (pdfWordOccurrence !== -1) {
        return 'pdf'

    } else if (imageWordOccurrence !== -1) {
        return 'image'
    } else {
        return 'unknown'
    }
}