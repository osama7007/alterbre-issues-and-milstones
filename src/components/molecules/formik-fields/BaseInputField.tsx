import { ErrorMessage, FieldHookConfig, useField } from "formik"
import { BaseInput } from "../../atoms/inputs/Base"
import { Label } from "../../atoms/Label"
export const BaseInputField = ({
  label,
  id,
  required,
  labelProps,
  type = "text",
  ...props
}: {
  label?: string
  id: string
  required?: boolean
  labelProps?: {
    [key: string]: any
  }
  name: string
  type: "text" | "number" | "password" | "email"
} & React.InputHTMLAttributes<HTMLInputElement>) => {
  const [field, meta] = useField(props as FieldHookConfig<string>)
  return (
    <div className="col-span-1">
      <div className="flex flex-col gap-1">
        {label && (
          <Label htmlFor={id} {...labelProps} required={required}>
            {label}
          </Label>
        )}

        <BaseInput
          type={type}
          id={id}
          {...field}
          {...props}
          error={meta.touched && !!meta.error}
          autocomplete="off"
        />
      </div>
      <ErrorMessage
        component="p"
        className="text-red-500"
        name={field.name}
      />
    </div>
  )
}