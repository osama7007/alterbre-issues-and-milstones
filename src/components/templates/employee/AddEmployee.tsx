/////////// IMPORTS
///
//import classes from './AddEmployee.module.css'
import { Form, Formik } from "formik"
import { useState } from "react"
import { Helmet } from "react-helmet-async"
import { isValidPhoneNumber } from "react-phone-number-input"
import * as Yup from "yup"
import { EmployeeMainData, NationalAddress } from ".."
import { HandleBackErrors } from "../../../utils/utils-components/HandleBackErrors"
import { OuterFormLayout } from "../../molecules"
import { Documents } from "../Documents"
///
/////////// Types
///
type AddEmployeeProps_TP = {
  title: string
}

type InitialValues_TP = {
  // employee main data types
  name_en: string
  branch: string
  management: string
  jobTitle: string
  company: string
  address: string
  phone: string
  secondPhone: string
  resident: string
  jobDegree: string
  nationality: string
  birthDate: Date
  hiringDate: Date
  day: string
  email: string
  password: string
  // employee main data types
  name_ar: string  // national address types
  city_id: string
  district_id: string
  min_Address: string // review backend
  building_number: string
  street_number: string
  sub_number: string
  postal_number: string
  // document type
  docType:string
  docName:string
  docNumber:string
  endDate:Date
  reminder:string
  files:any
}
/////////// HELPER VARIABLES & FUNCTIONS
///
const initialValues: InitialValues_TP = {
  // employee main data initial values
  name_ar: "",
  name_en: "",
  branch: "",
  management: "",
  jobTitle: "",
  company: "",
  address: "",
  phone: "",
  secondPhone: "",
  resident: "",
  jobDegree: "",
  nationality: "",
  birthDate: new Date(),
  hiringDate: new Date(),
  day: "",
  email: "",
  password: "",  // national address initial values
  city_id: "",
  district_id: "",
  min_Address: "", // review backend
  building_number: "",
  street_number: "",
  sub_number: "",
  postal_number: "",
   // docs data initial values
   docType: "",
   docName: "",
   docNumber: "",
   endDate: new Date(),
   reminder: "",
   files: [],
}
const validatingSchema = Yup.object({
  // employee main data validation
  name_ar: Yup.string().trim().required("برجاء ملئ هذا الحقل"),
  name_en: Yup.string().trim().required("برجاء ملئ هذا الحقل"),
  branch: Yup.string().trim().required("برجاء ملئ هذا الحقل"),
  management: Yup.string().trim().required("برجاء ملئ هذا الحقل"),
  jobTitle: Yup.string().trim().required("برجاء ملئ هذا الحقل"),
  company: Yup.string().trim().required("برجاء ملئ هذا الحقل"),
  address: Yup.string().trim().required("برجاء ملئ هذا الحقل"),
  phone: Yup.string()
  .trim()
  .required("برجاء ملئ هذا الحقل").test('isValidateNumber', 'رقم غير صحيح', function (value:string) {
    return isValidPhoneNumber(value || "")
  }),
  secondPhone: Yup.string().trim().required("برجاء ملئ هذا الحقل"),
  resident: Yup.string().trim().required("برجاء ملئ هذا الحقل"),
  jobDegree: Yup.date().required("برجاء ملئ هذا الحقل"),
  nationality: Yup.date().required("برجاء ملئ هذا الحقل"),
  birthDate: Yup.date().required("برجاء ملئ هذا الحقل"),
  hiringDate: Yup.date().required("برجاء ملئ هذا الحقل"),
  day: Yup.date().required("برجاء ملئ هذا الحقل"),
  email: Yup.string().trim().required("برجاء ملئ هذا الحقل"),
  password: Yup.string().trim().required("برجاء ملئ هذا الحقل"),
  birth_date: Yup.date().required("برجاء ملئ هذا الحقل"),
  hiring_date: Yup.date().required("برجاء ملئ هذا الحقل"),
  // national address validation
  city_id: Yup.string().trim().required("برجاء ملئ هذا الحقل"),
  district_id: Yup.string().trim().required("برجاء ملئ هذا الحقل"),
  min_Address: Yup.string().trim().required("برجاء ملئ هذا الحقل"),
  building_number: Yup.string().trim().required("برجاء ملئ هذا الحقل"),
  street_number: Yup.string().trim().required("برجاء ملئ هذا الحقل"),
  sub_number: Yup.string().trim().required("برجاء ملئ هذا الحقل"),
  postal_number: Yup.string().trim().required("برجاء ملئ هذا الحقل"),
})
///
export const AddEmployee = ({ title }: AddEmployeeProps_TP) => {
  /////////// VARIABLES
  ///

  ///
  /////////// CUSTOM HOOKS
  ///
  const [docsFormValues, setDocsFormValues] = useState()
  ///
  /////////// STATES
  ///

  ///
  /////////// SIDE EFFECTS
  ///

  ///
  /////////// FUNCTIONS | EVENTS | IF CASES
  ///

  ///
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
          console.log(values , docsFormValues)
        }}
        //validationSchema={validatingSchema}
      >
        <Form>
          <HandleBackErrors>
            <OuterFormLayout header="إضافة موظف">
              <EmployeeMainData title="البيانات الاساسية" />
              <NationalAddress />
              <Documents setDocsFormValues={setDocsFormValues}/>
            </OuterFormLayout>
          </HandleBackErrors>
        </Form>
      </Formik>
    </>
  )
}
