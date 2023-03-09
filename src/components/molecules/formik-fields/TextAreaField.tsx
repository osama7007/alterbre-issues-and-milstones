import { useField, ErrorMessage, FieldHookConfig } from "formik"
import {
  TextAreaInput,
  TextAreaInputProp_TP,
} from "../../atoms/inputs/TextAreaInput"

import { Label } from "../../atoms/Label"

export const TextAreaField = ({
  label,
  id,
  ...props
}: { label: string } & TextAreaInputProp_TP) => {
  const [field, meta] = useField(props as FieldHookConfig<string>)
  return (
    <div className="mb-2">
      <Label
        label={
          <div className="flex gap-1">
            {label}
            {props.required && <span className="text-mainRed">*</span>}
          </div>
        }
        htmlFor={field.name}
      />
      <TextAreaInput
        id={id}
        {...field}
        {...props}
        className={`${meta.error && "!border-mainRed border-2"}`}
      />

      <ErrorMessage
        component="p"
        className="text-mainRed mt-1"
        name={field.name}
      />
    </div>
  )
}
