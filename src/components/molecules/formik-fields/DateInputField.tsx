import { useFormikContext } from "formik"
import { useState } from "react"
import DatePicker from "react-date-picker"
import { MdOutlineDateRange } from "react-icons/md"
import { tv } from "tailwind-variants"
import { FormikError, Label } from "../../atoms"

const dateInputField = tv({
  variants: {
    active: {
      true: "active",
    },
    error: {
      true: "error",
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
  const { setFieldValue, setFieldTouched, errors, touched, values } =
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
        onCalendarOpen={() => {
          setDateActive(true)
          setFieldTouched(name, true, true)
        }}
        onCalendarClose={() => {
          setDateActive(false)
          setFieldTouched(name, true, true)
        }}
        value={values[name] ? new Date(values[name]) : new Date()}
        onChange={(date: Date) => {
          setFieldValue(name, date, true)
        }}
        maxDate={maxDate}
        minDate={minDate}
        format="d-M-y"
        calendarIcon={
          <MdOutlineDateRange className=" !stroke-mainGreen" size={20} />
        }
        className={dateInputField({
          active: dateActive,
          error: touched[name] && !!errors[name],
        })}
        required
      />
      <FormikError name={name} />
    </div>
  )
}
