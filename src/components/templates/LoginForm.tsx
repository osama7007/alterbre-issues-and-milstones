/////////// IMPORTS
///

import { Form, Formik } from "formik"
import { authCtx } from "../../context/auth-and-perm/auth"
import * as Yup from "yup"
import { useContext } from "react"
import { BaseInputField } from "../molecules/formik-fields/BaseInputField"
import { Button } from "../atoms/buttons/Button"
import { Spinner } from "../atoms/UI/Spinner"
///
/////////// Types
///
type LoginFormProps_TP = {}
/////////// HELPER VARIABLES & FUNCTIONS
///
const loginSchema = Yup.object().shape({
  username: Yup.string().trim().required(),
  password: Yup.string().trim().required(),
})
///
export const LoginForm = () => {
  /////////// VARIABLES
  ///

  ///
  /////////// CUSTOM HOOKS
  ///
  const { logInHandler, isLoggedIn, isLoggingIn } = useContext(authCtx)
  ///
  /////////// STATES
  ///

  ///
  /////////// SIDE EFFECTS
  ///

  /////////// FUNCTIONS | EVENTS | IF CASES
  ///

  ///
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-3">
      <h1 className="text-4xl font-bold mb-10">Tenant login</h1>
      <Formik
        initialValues={{
          username: "01288952666",
          password: "123456789",
        }}
        validationSchema={loginSchema}
        onSubmit={(values) => {
          logInHandler(values)
        }}
      >
        <Form>
          <BaseInputField
            id="username"
            label="Username"
            name="username"
            type="text"
            placeholder="username"
          />
          <BaseInputField
            id="password"
            label="Password"
            name="password"
            type="password"
            placeholder="Password"
          />
          <Button
            disabled={isLoggingIn}
            customStyles="mt-3"
            type="submit"
            version="primary"
          >
            {isLoggingIn ? <Spinner /> : "دخول"}
          </Button>
        </Form>
      </Formik>
    </div>
  )
}
