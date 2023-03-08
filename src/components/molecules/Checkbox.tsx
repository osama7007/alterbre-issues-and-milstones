import { Label } from "../atoms/Label"
import { useIsRTL } from "../../hooks/useIsRTL"
type CheckboxProps_TP = {
  label: string
  name: string
  id: string
  className?: string
  disabled?: boolean
  checked?: boolean
}

type Props_TP = {
  [key: string]: any
}

const BASE_CLASS_NAME: string =
  "w-4 h-4 text-mainGreen border-gray-300 rounded focus:ring-mainGreen  form-control shadow-none"

export const Checkbox = ({
  label,
  name,
  id,
  className,
  disabled,
  checked,
  ...props
}: CheckboxProps_TP & Props_TP) => {
  var newClassName = `${BASE_CLASS_NAME} ${className || ""}`
  const isRTL = useIsRTL()
  const marginClass = isRTL ? "mr-2" : "ml-2"

  return (
    <div className="flex items-center">
      <input
        type="checkbox"
        name={name}
        id={id}
        disabled={disabled}
        {...(checked ? { checked: true } : {})}
        className={newClassName}
        {...props}
      />
      <Label label={label} htmlFor={id} className={marginClass} />
    </div>
  )
}
