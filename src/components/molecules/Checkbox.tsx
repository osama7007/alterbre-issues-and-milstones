import { Label } from "../atoms/Label"
import { BaseInput } from "../atoms/inputs/Base"
import { useIsRTL } from "../../hooks/useIsRTL"
interface CheckboxProps_TP extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string
  className?: string
  id: string
}

type Props_TP = {
  [key: string]: any
}

const BASE_CLASS_NAME: string =
  "w-4 h-4 text-mainGreen border-gray-300 rounded focus:ring-mainGreen form-checkbox shadow-none"

export const Checkbox = ({
  label,
  name,
  id,
  className,
  disabled,
  checked,
  ...props
}: CheckboxProps_TP & Props_TP) => {
  var newClassName = `${BASE_CLASS_NAME} ${className ? className : ""}`
  const isRTL = useIsRTL()
  const marginClass = isRTL ? "mr-2" : "ml-2"

  return (
    <div className="flex items-center">
      <BaseInput
        id={id}
        {...{
          ...props,
          type: "checkbox",
          name,
          className: newClassName,
          disabled,
          checked,
          override: true,
        }}
      />
      <Label label={label} htmlFor={id} className={marginClass} />
    </div>
  )
}