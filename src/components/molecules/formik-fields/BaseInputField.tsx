import { useField, ErrorMessage, FieldHookConfig } from "formik"
import { BaseInput,BaseInputProps_TP } from "../../atoms/inputs/Base"
import { Label } from "../../atoms/Label"
// props type
type Props_TP = {
  [key: string]: any
}

export const BaseInputField = ({
  label,
  id,
  ...props
}: { label: string; id: string } & BaseInputProps_TP) => {
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
      <BaseInput
        id={id}
        {...field}
        {...props}
        className={`${meta.error && "!border-mainRed"}`}
        autocomplete="off"
      />

      <ErrorMessage
        component="p"
        className="text-mainRed mt-1"
        name={field.name}
      />
    </div>
  )
}
