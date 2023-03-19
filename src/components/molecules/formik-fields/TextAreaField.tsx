import { useFormikContext } from "formik"
import { TextAreaInputProp_TP } from "../../atoms/inputs/TextAreaInput"

import { FormikError, Label, TextAreaInput } from "../../atoms"

export const TextAreaField = ({
  label,
  id,
  required,
  ...props
}: { label: string; id: string } & TextAreaInputProp_TP) => {
  const { setFieldValue, setFieldTouched, errors, touched } = useFormikContext<{
    [key: string]: any
  }>()
  return (
    <div className="mb-2">
      <Label htmlFor={id} required={required}>
        {label}
      </Label>
      <TextAreaInput
        id={id}
        className={`${
          touched[props.name as string] &&
          !!errors[props.name as string] &&
          "!border-mainRed border-2"
        }`}
        onChange={(e) => {
          setFieldValue(props.name as string, e.target.value)
        }}
        onBlur={() => {
          setFieldTouched(props.name as string, true)
        }}
        {...props}
      />

      <FormikError name={props.name as string} />
    </div>
  )
}
