/////////// IMPORTS
///
//import classes from './Home.module.css'
import { Helmet } from "react-helmet-async"
import { Button } from "../components/atoms/buttons/Button"
import { Formik, Form, ErrorMessage, Field } from "formik"
import { BaseInputField } from "../components/molecules/formik-fields/BaseInputField"
import { CheckBoxField } from "../components/molecules/formik-fields/CheckBoxField"
import { PhoneInputs } from "../components/molecules/phone-input/PhoneInput"
import * as Yup from "yup"
import { isValidPhoneNumber } from "react-phone-number-input"

///
/////////// Types
///
type HomeProps_TP = {
  title: string
}
/////////// HELPER VARIABLES & FUNCTIONS
///

const validatingSchema = Yup.object({
  phone: Yup.string()
    .trim()
    .required("برجاء ملئ هذا الحقل").test('isValidateNumber', 'رقم غير صحيح', function (value) {
      return isValidPhoneNumber(value || "");
    })
})
///
export const Home = ({ title }: HomeProps_TP) => {
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
  /////////// IF CASES
  ///

  ///
  /////////// EVENTS
  ///

  ///
  /////////// FUNCTIONS
  ///

  ///
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <div className="flex flex-col items-center justify-center h-screen gap-3">
        <h1 className="text-4xl font-bold">Home</h1>
        <Formik
          initialValues={{ email: "", password: "", name: "", remember: false , phone:"" }}
          onSubmit={(values) => {
            console.log(values)
          }}
          validationSchema={validatingSchema}
        >
          <Form>
            <BaseInputField
              id="email"
              label="Email"
              name="email"
              type="email"
              placeholder="Email"
            />
            <BaseInputField
              id="name"
              label="Name"
              name="name"
              type="text"
              placeholder="Name"
            />
            <BaseInputField
              id="password"
              label="Password"
              name="password"
              type="password"
              placeholder="Password"
            />
            <PhoneInputs label='phone' name='phone' placeholder='phone'/>
            <CheckBoxField label="Remember me" name="remember" id="remember" />
            <Button type="submit" variant="primary">
              Submit
            </Button>
          </Form>
        </Formik>
      </div>
    </>
  )
}
