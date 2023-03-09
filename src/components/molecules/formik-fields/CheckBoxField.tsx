import { useField, ErrorMessage, FieldHookConfig } from "formik"
import { Checkbox } from "../Checkbox"

// props type
type Props_TP = {
  [key: string]: any
}

export const CheckBoxField = ({
  label,
  id,
  ...props
}: { label: string } & Props_TP) => {
  const [field, meta] = useField(props as FieldHookConfig<string>)
  return (
    <div className="mb-2">
      <Checkbox
        label={label}
        id={id}
        className={`${meta.error && "border-2 border-mainRed"}`}
        {...field}
        {...props}
      />
      <ErrorMessage
        component="p"
        className="text-mainRed mt-1"
        name={field.name}
      />
    </div>
  )
}
