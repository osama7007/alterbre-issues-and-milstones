import { ReactNode } from "react"
import { tv, type VariantProps } from "tailwind-variants"

const button = tv({
  base: "relative active:top-[1px] py-2 px-8 font-bold rounded-md text-white",
  variants: {
    color: {
      primary: "bg-mainGreen",
      danger: "bg-mainRed",
    },
    disabled: {
      true: "bg-gray-200 active:top-0 cursor-not-allowed px-4",
    },
    bordered: {
      true: "border-2",
    },
  },
  compoundVariants: [
    {
      color: "primary",
      disabled: true,
      className: "text-mainGreen border-mainGreen border-2",
    },

    {
      color: "danger",
      disabled: true,
      className: "text-mainRed border-mainRed border-2",
    },
    {
      color: "primary",
      bordered: true,
      className: "text-mainGreen border-mainGreen bg-white",
    },
    {
      color: "danger",
      bordered: true,
      className: "text-mainRed border-mainRed bg-white",
    },
  ],
  defaultVariants: {
    color: "primary",
  },
})

const spinner = tv({
  base: "h-6 w-6 animate-spin rounded-full border-b-2",
  variants: {
    color: {
      primary: "border-mainGreen",
      danger: "border-mainRed",
      bordered: "border-mainGreen",
    },
  },
  defaultVariants: {
    color: "primary",
  },
})

type ButtonVariants_TP = VariantProps<typeof button>

interface ButtonProps_TP extends ButtonVariants_TP {
  children: ReactNode
  className?: string
  disabled?: boolean
  action?: () => void
  variant?: "primary" | "danger"
  loading?: boolean
  type?: "button" | "submit" | "reset"
  bordered?: boolean
}

export const Button = ({
  variant,
  children,
  className,
  disabled,
  action,
  loading,
  type = "button",
  bordered = false,
  ...props
}: ButtonProps_TP) => {
  var newClass =
    className + " " + loading ? "inline-flex items-center gap-2" : ""
  return (
    <button
      type={type}
      disabled={disabled || loading}
      className={button({
        color: variant,
        disabled: disabled || loading,
        bordered: bordered,
        className: newClass,
      })}
      onClick={action}
      {...props}
    >
      {/* <div className="flex items-center justify-center gap-2"> */}
      {loading && (
        <div className=" flex items-center justify-center">
          <div
            className={spinner({
              color: variant,
            })}
          ></div>
        </div>
      )}

      {children}
      {/* </div> */}
    </button>
  )
}
