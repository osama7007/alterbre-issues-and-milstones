import { useFormikContext } from "formik"
import { useState } from "react"
import DatePicker from "react-date-picker"
import { MdOutlineDateRange } from "react-icons/md"
import { tv } from "tailwind-variants"
import { Label } from "../../atoms/Label"
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
  value,
  maxDate,
  minDate,
  labelProps,
}: {
  label: string
  name: string
  value: Date
  maxDate?: Date
  minDate?: Date
  labelProps?: {
    [key: string]: any
  }
}) => {
  const [dateActive, SetDateActive] = useState(false)
  const [isTouched, setIsTouched] = useState(false)
  const { errors, touched , setFieldValue } = useFormikContext<any>()
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
        onChange={(date: Date)=> setFieldValue( name, date)}
        maxDate={maxDate}
        minDate={minDate}
        format="d-M-y"
        calendarIcon={
          <MdOutlineDateRange className=" !stroke-mainGreen" size={20} />
        }
        className={dateInputField({
          active:dateActive,
          error: isTouched && !!errors,
        })}
        required
      />
      {isTouched && errors && <p className="text-mainRed mt-1">{errors.name?.toLocaleString()}</p>}
      {/* <ErrorMessage component="p" className="text-mainRed mt-1" name={name} /> */}
    </div>
  )
}