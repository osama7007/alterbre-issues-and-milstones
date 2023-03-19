/////////// IMPORTS
///
import { Form, Formik } from "formik"
import { Helmet } from "react-helmet-async"
import { DropFile } from "../components/molecules/DropFile"
import { CFile_TP } from "../types"
import * as Yup from "yup"
import { Button } from "../components/atoms/buttons/Button"
import { Example } from "../try-ahmed/Example"
///
/////////// Types
///
type SystemProps_TP = {
  title: string
}
/////////// HELPER VARIABLES & FUNCTIONS
///
export const initialValues = {
  type: "",
  weight: "",
  karat: "",
  stock: "",
}

const validation = Yup.object().shape({
  type: Yup.string().trim().required(),
  weight: Yup.string().trim().required(),
  karat: Yup.string().trim().required(),
  stock: Yup.string().trim().required(),
})
///
export const System = ({ title }: SystemProps_TP) => {
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
        onSubmit={(values) => console.log("values", values)}
        initialValues={initialValues}
        validationSchema={validation}
      >
        {({ values, errors }) => (
          <Form>
            <Example />
            <button type="submit">OKK</button>
          </Form>
        )}
      </Formik>
    </>
  )
}
