import { useFormikContext } from "formik"
import { useState } from "react"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import { tv } from "tailwind-variants"
import { BaseInput, FormikError, Label } from "../../atoms"

const dateInputField = tv({
  base: "direction-rtl",
  variants: {
    active: {
      true: "!rounded-md !border-2 !border-mainGreen !ring-0",
    },
    error: {
      true: "!rounded-md !border-2 !border-mainRed",
    },
  },
})

export const DateInputField = ({
  label,
  name,
  maxDate,
  minDate,
  labelProps,
}: {
  label: string
  name: string
  maxDate?: Date
  minDate?: Date
  labelProps?: {
    [key: string]: any
  }
}) => {
  const { setFieldValue, errors, touched, handleBlur, values } =
    useFormikContext<{
      [key: string]: any
    }>()
  const [dateActive, setDateActive] = useState(false)

  return (
    <div className="mb-2">
      <Label htmlFor={name} {...labelProps}>
        {label}
      </Label>
      <DatePicker
        selected={values[name]}
        onChange={(date: Date) => {
          setFieldValue(name, date)
        }}
        onBlur={handleBlur(name)}
        className={dateInputField({
          active: dateActive,
          error: touched[name] && !!errors[name],
        })}
        onCalendarOpen={() => {
          setDateActive(true)
        }}
        onCalendarClose={() => {
          setDateActive(false)
        }}
          maxDate={maxDate}
        minDate={minDate}
        customInput={<BaseInput name={name} placeholder="Select a date" />}
        isClearable={true}
      />
      <FormikError name={name} />
    </div>
  )
}
