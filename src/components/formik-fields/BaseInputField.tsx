import { useField, ErrorMessage, FieldHookConfig } from "formik"
import { BaseInput } from "../atoms/inputs/Base"
import { Label } from "../atoms/Label"
// props type
type Props_TP = {
  [key: string]: any
}

export const BaseInputField = ({
  label,
  id,
  ...props
}: { label: string; id: string } & Props_TP) => {
  const [field, meta] = useField(props as FieldHookConfig<string>)
  return (
    <div className="mb-2">
      <Label label={label} htmlFor={field.name} />
      <BaseInput
        id={id}
        {...field}
        {...props}
        className={`form-control shadow-none ${
          meta.touched && meta.error && "is-invalid"
        }`}
      />
      <ErrorMessage component="p" className="error" name={field.name} />
    </div>
  )
}
