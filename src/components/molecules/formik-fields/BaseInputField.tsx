import { useField, ErrorMessage, FieldHookConfig } from "formik"
import { BaseInput, BaseInputProps_TP } from "../../atoms/inputs/Base"
import { Label } from "../../atoms/Label"
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
  const [field, meta] = useField(props as FieldHookConfig<string>)
  return (
    <>
      <div className="mb-2">
        <Label htmlFor={id} {...labelProps} required={required}>
          {label}
        </Label>
        <BaseInput
          id={id}
          {...field}
          {...props}
          error={meta.touched && !!meta.error}
          autocomplete="off"
        />
      </div>
      <ErrorMessage
        component="p"
        className="text-mainRed mt-1"
        name={field.name}
      />
    </>
  )
}
