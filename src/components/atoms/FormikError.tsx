import { useFormikContext } from "formik"
import React from "react"
// tailwind merge
import { twMerge } from "tailwind-merge"

export const FormikError = ({
  name,
  as = "p",
  className,
}: {
  name: string
  as?: string
  className?: string
}) => {
  const { errors: formikErrors, touched: formikTouched } = useFormikContext<{
    [key: string]: any
  }>()
  const error = formikErrors[name]
  const isTouched = formikTouched[name]
  if (name === "date") {
    console.log(error, isTouched)
  }
  return !!error && isTouched
    ? React.createElement(
        as,
        { className: twMerge(className, "text-mainRed") },
        error.toString()
      )
    : null
}
