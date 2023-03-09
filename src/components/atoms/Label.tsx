import { ReactNode } from "react"

const BASE_CLASS_NAME = "text-[13px]"

const Colors = {
  primary: "text-mainGreen",
  secondary: "text-mainBlack",
  white: "text-white",
  red: "text-mainRed",
}
type Colors_TP = keyof typeof Colors

type LabelProps_TP = {
  label: string | ReactNode
  htmlFor: string
  color?: Colors_TP
  className?: string
  size?: "sm" | "md" | "lg"
}

export const Label = ({
  htmlFor,
  color = "secondary",
  className,
  label,
  size = "md",
}: LabelProps_TP) => {
  const colorClass = Colors[color as Colors_TP]
  var newClassName = `${BASE_CLASS_NAME} ${colorClass}`
  newClassName = className ? `${newClassName} ${className}` : newClassName
  newClassName = size === "sm" ? `${newClassName} text-[11px]` : newClassName
  newClassName = size === "lg" ? `${newClassName} text-[15px]` : newClassName

  return (
    <label htmlFor={htmlFor} className={newClassName}>
      {label}
    </label>
  )
}
