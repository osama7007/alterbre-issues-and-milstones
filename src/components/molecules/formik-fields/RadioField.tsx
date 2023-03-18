import { useFormikContext } from "formik"
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
  const { setFieldValue, setFieldTouched, errors, touched, values } =
    useFormikContext<{
      [key: string]: any
    }>()

  return (
    <div className="mb-2">
      <Radio
        {...props}
        label={label}
        id={id}
        name={props.name}
        className={`${errors[props.name] && "ring-2 ring-mainRed"}`}
        checked={values[props.name]}
        onChange={(e: any) => {
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
