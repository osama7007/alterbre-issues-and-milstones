import { ReactNode } from "react"
import { tv, type VariantProps } from "tailwind-variants"

const headBase = tv({
  base: "flex w-full items-center justify-center gap-2  rounded-lg  py-2 px-8 text-white bg-mainGreen",
  variants: {
    color: {
      primary: "bg-mainOrange",
      secondary: "bg-mainGreen ",
    },
    count: {
      true: "flex-col",
    },
  },
  compoundVariants: [
    {
      color: "primary",
      className: "bg-mainOrange",
    },

    {
      color: "secondary",
      className: "bg-mainOrange",
    },
  ],
  defaultVariants: {
    color: "primary",
  },
})

type ButtonProps_TP = {
  title: string
  variant?: "primary" | "secondary"
  className?: string
  count?: boolean
}

export const HeadBase = ({
  title,
  variant,
  className,
  count = false,
  ...props
}: ButtonProps_TP) => {
  return (
    <div
      className={headBase({
        color: variant,
        className: className,
        count: count,
      })}
    >
      {count && (
        <div className="flex w-full items-center justify-around">
          {" "}
          <p>{count}</p>
        </div>
      )}
      <h3>{title}</h3>
    </div>
  )
}
