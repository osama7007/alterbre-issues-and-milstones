/////////// IMPORTS
///
import { FormikErrors, useFormikContext } from "formik"
import { useEffect } from "react"
///
/////////// Types
///
type HandleBackErrorsProps_TP = {
  children: JSX.Element
  errors?: FormikErrors<{ [key: string]: string[] }> | undefined
}
/////////// HELPER VARIABLES & FUNCTIONS
///

///
export const HandleBackErrors = ({
  children,
  errors,
}: HandleBackErrorsProps_TP) => {
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
          /* 
          دلوقتي انا مهندل ان لو رجعلي اراي اوف ايرورز متعلقة بفيلد واحد انا باخد منهم اول ايرور بس
          محتاج اهندل طريقة اني اعرض الباقي
          */
          if (val.length > 1 && typeof val === "object") {
            setFieldError(key, val.join("& "))
          } else {
            setFieldError(key, val[0])
          }
        }
      })
    }
  }, [errors])
  /////////// FUNCTIONS | EVENTS | IF CASES
  ///

  ///
  return children
}
