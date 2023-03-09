/////////// IMPORTS
///
import { useContext, useEffect } from "react"
import { useMutation } from "@tanstack/react-query"
import { Form, Formik } from "formik"
import { Helmet } from "react-helmet-async"
import { Button } from "../components/atoms/buttons/Button"

import { mutateData, MutateDataParameters_TP } from "../utils/mutateData"
import { notify } from "../utils/toast"
import * as Yup from "yup"
import Cookies from "js-cookie"
import { authCtx } from "../context/auth-and-perm/auth"
import { useNavigate } from "react-router-dom"
import { BaseInputField } from "../components/molecules/formik-fields/BaseInputField"
///
/////////// Types
///
type LoginProps_TP = {
  title: string
}

type LoginValues_TP = {
  username: string
  password: string
  //   remember: false
}
/////////// HELPER VARIABLES & FUNCTIONS
///
const loginSchema = Yup.object().shape({
  username: Yup.string().trim().required(),
  password: Yup.string().trim().required(),
})
///
export const Login = ({ title }: LoginProps_TP) => {
  /////////// VARIABLES
  ///
  ///
  /////////// CUSTOM HOOKS
  ///
  const navigate = useNavigate()
  const { logInHandler, isLoggedIn } = useContext(authCtx)

  ///
  /////////// STATES
  ///

  ///
  /////////// SIDE EFFECTS
  ///
  useEffect(() => {
    if (isLoggedIn) {
      navigate("/", { replace: true })
    }
  }, [])

  ///
  /////////// FUNCTIONS | EVENTS | IF CASES
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
          initialValues={{
            username: "01288952666",
            password: "123456789",
            // remember: false
          }}
          validationSchema={loginSchema}
          onSubmit={(values) => {
            console.log("values", values)
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
            {/* <CheckBoxField label="Remember me" name="remember" id="remember" /> */}
            <Button type="submit" version="primary">
              دخول
            </Button>
          </Form>
        </Formik>
        <p>01288952666</p>
        <p>123456789</p>
      </div>
    </>
  )
}
