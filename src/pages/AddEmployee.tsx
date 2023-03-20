/////////// IMPORTS
///
//import classes from './AddEmployee.module.css'
import { Helmet } from "react-helmet-async"
import { OuterFormLayout } from "../components/molecules/OuterFormLayout"
import { NationalAddress } from "../components/templates/NationalAddress"
import { EmployeeMainData } from "../components/EmployeeMainData"
import { Button } from "../components/atoms/buttons/Button"
import { Formik, Form } from "formik"
import { InnerForm } from "../utils/utils-components/InnerForm"
import * as Yup from "yup"
import { isValidPhoneNumber } from "react-phone-number-input"
///
/////////// Types
///
type AddEmployeeProps_TP = {
  title: string
}

type InitialValues_TP = {
  // employee main data types
  name_ar: string
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
  age: string
  birth_date: Date
  hiring_date: Date
  day: string
  email: string
  password: string
  // national address types
  city_id: string
  district_id: string
  min_Address: string // review backend
  building_number: string
  street_number: string
  sub_number: string
  postal_number: string
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
  age: "",
  birth_date: new Date(),
  hiring_date: new Date(),
  day: "",
  email: "",
  password: "",
  // national address initial values
  city_id: "",
  district_id: "",
  min_Address: "", // review backend
  building_number: "",
  street_number: "",
  sub_number: "",
  postal_number: "",
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
  age: Yup.date().required("برجاء ملئ هذا الحقل"),
  birthDate: Yup.date().required("برجاء ملئ هذا الحقل"),
  hiringDate: Yup.date().required("برجاء ملئ هذا الحقل"),
  day: Yup.date().required("برجاء ملئ هذا الحقل"),
  email: Yup.string().trim().required("برجاء ملئ هذا الحقل"),
  password: Yup.string().trim().required("برجاء ملئ هذا الحقل"),

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
          console.log(values)
        }}
        validationSchema={validatingSchema}
      >
        <Form>
          <InnerForm>
            <OuterFormLayout header="إضافة موظف">
              <EmployeeMainData title="البيانات الاساسية" />
              <NationalAddress />
            </OuterFormLayout>
          </InnerForm>
        </Form>
      </Formik>
    </>
  )
}
