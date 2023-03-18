import { useFormikContext } from "formik"
import { BaseInput, FormikError, Label } from "../../atoms"

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
      <FormikError name={props.name} />
    </div>
  )
}
