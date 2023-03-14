import DatePicker from "react-date-picker"
import { Label } from "../../atoms/Label"
import { MdOutlineDateRange } from "react-icons/md"
import { useState } from "react"
import { tv } from "tailwind-variants"

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
  setFieldValue,
  value,
  error,
  maxDate,
  minDate,
  labelProps,
}: {
  label: string
  name: string
  setFieldValue: any
  value: Date
  error: string
  maxDate?: Date
  minDate?: Date
  labelProps?: {
    [key: string]: any
  }
}) => {
  const [dateActive, SetDateActive] = useState(false)
  const [touched, setIsTouched] = useState(false)

  return (
    <div className="mb-2">
      <Label htmlFor={name} {...labelProps}>
        {label}
      </Label>
      <DatePicker
        onCalendarOpen={() => SetDateActive(true)}
        onCalendarClose={() => {
          SetDateActive(false)
          setIsTouched(true)
        }}
        value={value}
        onChange={setFieldValue.bind(null, [name])}
        maxDate={maxDate}
        minDate={minDate}
        format="d-M-y"
        calendarIcon={
          <MdOutlineDateRange className=" !stroke-mainGreen" size={20} />
        }
        className={dateInputField({
          active: dateActive,
          error: touched && !!error,
        })}
        required
      />
      {touched && error && <p className="text-mainRed mt-1">{error}</p>}
      {/* <ErrorMessage component="p" className="text-mainRed mt-1" name={name} /> */}
    </div>
  )
}
