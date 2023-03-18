import { useFormikContext } from "formik"
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
  const { setFieldValue, setFieldTouched, errors, touched, values } =
    useFormikContext<{
      [key: string]: any
    }>()
  return (
    <div className="mb-2">
      <Checkbox
        label={label}
        id={id}
        value={values[props.name]}
        className={`${errors[props.name] && "border-2 border-mainRed"}`}
        {...props}
        checked={values[props.name]}
        onChange={(e) => {
          setFieldValue(props.name, e.target.checked)
        }}
        onBlur={() => {
          setFieldTouched(props.name, true)
        }}
      />
      {touched[props.name] && !!errors[props.name] ? (
        <p className="text-mainRed text-xs">{errors[props.name]?.toString()}</p>
      ) : null}
    </div>
  )
}
