type LabelProps_TP = {
  label: string
  htmlFor: string
  color?: string
  className?: string
}

type Colors_TP = "primary" | "secondary" | "white"

const BASE_CLASS_NAME = "mb-1 text-[13px]"

const Colors = {
  primary: "text-mainGreen",
  secondary: "text-mainBlack",
  white: "text-white",
  red: "text-mainRed",
}

export const Label = ({
  label,
  htmlFor,
  color = "secondary",
  className,
}: LabelProps_TP) => {
  const colorClass = Colors[color as Colors_TP]
  var newClassName = `${BASE_CLASS_NAME} ${colorClass}`
  newClassName = className ? `${newClassName} ${className}` : newClassName
  return (
    <label htmlFor={htmlFor} className={newClassName}>
      {label}
    </label>
  )
}
