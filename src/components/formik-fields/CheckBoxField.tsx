import { useField, ErrorMessage, FieldHookConfig } from "formik"
import { Checkbox } from "../molecules/Checkbox"

// props type
type Props_TP = {
  [key: string]: any
}

export const CheckBoxField = ({
  label,
  ...props
}: { label: string } & Props_TP) => {
  const [field, meta] = useField(props as FieldHookConfig<string>)
  return (
    <div className="mb-2">
      <Checkbox
        label={label}
        id={field.name}
        className={`form-control shadow-none ${
          meta.touched && meta.error && "is-invalid"
        }`}
        {...field}
        {...props}
      />
      <ErrorMessage component="p" className="error" name={field.name} />
    </div>
  )
}
