import { useField, ErrorMessage, FieldHookConfig } from "formik"
import {
  TextAreaInput,
  TextAreaInputProp_TP,
} from "../../atoms/inputs/TextAreaInput"

import { Label } from "../../atoms/Label"

export const TextAreaField = ({
  label,
  id,
  required,
  ...props
}: { label: string; id: string } & TextAreaInputProp_TP) => {
  const [field, meta] = useField(props as FieldHookConfig<string>)
  console.log("textarea", required)
  return (
    <div className="mb-2">
      <Label htmlFor={id} required={required}>
        {label}
      </Label>
      <TextAreaInput
        id={id}
        {...field}
        {...props}
        className={`${
          meta.touched && meta.error && "!border-mainRed border-2"
        }`}
      />

      <ErrorMessage
        component="p"
        className="text-mainRed mt-1"
        name={field.name}
      />
    </div>
  )
}
