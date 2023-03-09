/////////// IMPORTS
///
//import classes from './Home.module.css'
import { Helmet } from "react-helmet-async"
import { Button } from "../components/atoms/buttons/Button"
import { Formik, Form, ErrorMessage, Field } from "formik"
import { BaseInputField } from "../components/molecules/formik-fields/BaseInputField"
import { CheckBoxField } from "../components/molecules/formik-fields/CheckBoxField"


///
/////////// Types
///
type HomeProps_TP = {
  title: string
}
/////////// HELPER VARIABLES & FUNCTIONS
///

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
          initialValues={{ email: "", password: "", name: "", remember: false }}
          onSubmit={(values) => {
            console.log(values)
          }}
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
            <CheckBoxField label="Remember me" name="remember" id="remember" />
            <Button type="submit" version="primary">
              Submit
            </Button>
          </Form>
        </Formik>
      </div>
    </>
  )
}
