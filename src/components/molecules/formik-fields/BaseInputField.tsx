import { useFormikContext } from "formik"
import { Label } from "../../atoms/Label"
import { BaseInput } from "../../atoms/inputs/Base"

export const BaseInputField = ({
  label,
  id,
  required,
  labelProps,
  type = "text",
  ...props
}: {
  label: string
  id: string
  required?: boolean
  labelProps?: {
    [key: string]: any
  }
  name: string
  type: string
} & React.InputHTMLAttributes<HTMLInputElement>) => {
  const { setFieldValue, setFieldTouched, errors, touched, values } =
    useFormikContext<{
      [key: string]: any
    }>()

  return (
    <div className="col-span-1 relative ">
      <div className="flex flex-col gap-1">
        <Label htmlFor={id} {...labelProps} required={required}>
          {label}
        </Label>
        <BaseInput
          id={id}
          {...props}
          value={values[props.name]}
          error={touched[props.name] && !!errors[props.name]}
          autocomplete="off"
          onBlur={() => {
            setFieldTouched(props.name, true)
          }}
          onChange={(e) => {
            setFieldValue(props.name, e.target.value)
          }}
        />
      </div>
      {touched[props.name] && !!errors[props.name] ? (
        <p className="text-mainRed text-xs">{errors[props.name]?.toString()}</p>
      ) : null}
    </div>
  )
}
