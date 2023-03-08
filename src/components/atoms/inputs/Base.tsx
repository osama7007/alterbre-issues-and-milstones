export type BaseInputProps_TP = {
  placeholder?: string
  value?: string
  type?: string
  name?: string
  id: string
  className?: string
  disabled?: boolean
}

const BASE_CLASS_NAME: string =
  "shadows w-full rounded-md border-2 border-transparent px-4 py-[.30rem] outline-none focus:!border-2 focus:!border-mainGreen"

export const BaseInput = ({
  placeholder,
  type = "text",
  name,
  id,
  className,
  disabled,
  ...props
}: BaseInputProps_TP) => {
  var newClassName = `${BASE_CLASS_NAME} ${className || ""}`
  return (
    <input
      type={type}
      name={name}
      id={id}
      placeholder={placeholder || ""}
      disabled={disabled}
      className={newClassName}
      {...props}
    />
  )
}
