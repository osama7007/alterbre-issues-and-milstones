import { Label } from "../atoms/Label"
import { BaseInput } from "../atoms/inputs/Base"
import { useIsRTL } from "../../hooks/useIsRTL"

type RadioProps_TP = {
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

// const BASE_CLASS_NAME: string = "form-radio text-mainGreen focus:ring-mainGreen"

export const Radio = ({
  label,
  name,
  id,
  className,
  disabled,
  checked,
  ...props
}: RadioProps_TP & Props_TP) => {
  // var newClassName = `${BASE_CLASS_NAME} ${className ? className : ""}`
  const isRTL = useIsRTL()
  const marginClass = isRTL ? "mr-2" : "ml-2"

  return (
    <div className="flex items-center">
      <BaseInput
        id={id}
        {...{
          ...props,
          type: "radio",
          name,
          // className: newClassName,
          disabled,
          checked,
        }}
      />
      <Label htmlFor={id} className={marginClass}>
        {label}
      </Label>
    </div>
  )
}
