import { useFormikContext } from "formik"
import { createElement } from "react"
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
  return !!error && isTouched
    ? createElement(
        as,
        { className: twMerge(className, "text-mainRed") },
        error.toString()
      )
    : null
}
