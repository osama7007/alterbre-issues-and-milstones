import { tv, type VariantProps } from "tailwind-variants"

const GeneralInputClass: string = "form-input px-4 py-[.30rem] w-full shadows"

const baseInput = tv({
  base: "rounded-md border-2 border-transparent focus:!border-2 focus:!border-mainGreen",
  variants: {
    error: {
      true: "border-mainRed",
    },
    type: {
      checkbox:
      
        "w-4 h-4 text-mainGreen border-gray-300 rounded focus:ring-mainGreen form-checkbox shadow-none",
      radio:
        "w-5 h-5 form-radio rounded-full focus:ring-mainGreen border-gray-300",
      text: GeneralInputClass,
      email: GeneralInputClass,
      password: GeneralInputClass,
      number: GeneralInputClass,
      date: GeneralInputClass,
      time: GeneralInputClass,
      datetime: GeneralInputClass,
      month: GeneralInputClass,
      week: GeneralInputClass,
      tel: GeneralInputClass,
      url: GeneralInputClass,
      search: GeneralInputClass,
      color: GeneralInputClass,
    },
  },
})

type BaseInputVariants_TP = VariantProps<typeof baseInput>

export interface BaseInputProps_TP
  extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string
  autocomplete?: string
  error?: boolean
}

export const BaseInput = ({
  placeholder,
  type = "text",
  name,
  id,
  className,
  disabled,
  autocomplete,
  error,
  value,
  ...props
}: BaseInputVariants_TP & BaseInputProps_TP) => {
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
      className={baseInput({
        error,
        className,
        type,
      })}
      autoComplete={autocomplete}
      {...{ value }}
      {...props}
    />
  )
}
