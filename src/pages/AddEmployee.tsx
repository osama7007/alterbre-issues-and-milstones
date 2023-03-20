/////////// IMPORTS
///
//import classes from './AddEmployee.module.css'
import { Form, Formik } from "formik"
import { Helmet } from "react-helmet-async"
import * as Yup from "yup"
import { OuterFormLayout } from "../components/molecules"
import { EmployeeMainData, NationalAddress } from "../components/templates"
import { InnerForm } from "../utils/utils-components/InnerForm"
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
  address: string
  birth_date: Date
  hiring_date: Date
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
  address: "",
  birth_date: new Date(),
  hiring_date: new Date(),
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
  address: Yup.string().trim().required("برجاء ملئ هذا الحقل"),
  birth_date: Yup.date().required("برجاء ملئ هذا الحقل"),
  hiring_date: Yup.date().required("برجاء ملئ هذا الحقل"),
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
