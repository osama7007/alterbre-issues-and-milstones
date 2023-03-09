import { useField, ErrorMessage, FieldHookConfig } from "formik"
import { Radio } from "../Radio"

// props type
type Props_TP = {
  [key: string]: any
}

export const RadioField = ({
  label,
  id,
  ...props
}: { label: string } & Props_TP) => {
  const [field, meta] = useField(props as FieldHookConfig<string>)
  return (
    <div className="mb-2">
      <Radio
        label={label}
        id={id}
        className={`${meta.error && "ring-2 ring-mainRed"}`}
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
