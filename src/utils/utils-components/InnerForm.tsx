/////////// IMPORTS
///
import { FormikErrors, useFormikContext } from "formik"
import { useEffect } from "react"
///
/////////// Types
///
type InnerFormProps_TP = {
  children: JSX.Element
  errors: FormikErrors<{ [key: string]: string[] }> | undefined
}
/////////// HELPER VARIABLES & FUNCTIONS
///

///
export const InnerForm = ({ children, errors }: InnerFormProps_TP) => {
  /////////// VARIABLES
  ///

  ///
  /////////// CUSTOM HOOKS
  ///
  const { setFieldError } = useFormikContext()
  ///
  /////////// STATES
  ///

  ///
  /////////// SIDE EFFECTS
  ///
  useEffect(() => {
    if (errors) {
      Object.entries(errors).map(([key, val]) => {
        if (val) {
          setFieldError(key, val[0])
        }
      })
    }
  }, [errors])
  /////////// FUNCTIONS | EVENTS | IF CASES
  ///

  ///
  return children
}
