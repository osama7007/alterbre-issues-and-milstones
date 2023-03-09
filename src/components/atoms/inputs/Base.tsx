export interface BaseInputProps_TP
  extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string
  override?: boolean
  autocomplete?: string
}

const BASE_CLASS_NAME: string =
  "shadows w-full rounded-md border-2 border-transparent px-4 py-[.30rem] outline-none focus:!border-2 focus:!border-mainGreen form-input"

export const BaseInput = ({
  placeholder,
  type = "text",
  name,
  id,
  className,
  disabled,
  override,
  autocomplete,
  value,
  ...props
}: BaseInputProps_TP) => {
  var newClassName = `${BASE_CLASS_NAME} ${className || ""}`
  if (override) {
    newClassName = className || ""
  }
  return (
    <input
      type={type}
      name={name}
      id={id}
      {...(placeholder
        ? {
            placeholder,
          }
        : {})}
      disabled={disabled}
      className={newClassName}
      autoComplete={autocomplete}
      {...{ value }}
      {...props}
    />
  )
}
