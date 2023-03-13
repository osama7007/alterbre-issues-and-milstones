import { t } from "i18next"
import * as Yup from "yup"

export type Permission_TP = {
    id: string
    name: string
    front_key: string
}
export type permissionGroup_TP = {
    id: string
    name: string
    permissions: Permission_TP[]
}

export const schema = () => Yup.object().shape({
    name: Yup.string()
        .trim()
        .required(t('required') || 'هذا الحقل مطلوب'),
})