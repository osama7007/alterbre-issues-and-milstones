import { BsEye } from "react-icons/bs"
import { tv } from "tailwind-variants"

const showButton = tv({
  base: "w-full  border border-lightBlack  flex items-center justify-center gap-2 relative active:top-[1px] py-2 px-8 font-bold rounded-md  bg-opacity-20 ",
  variants: {
    color: {
      primary: "bg-mainOrange",
      secondary: "bg-green ",
    },
  },
  compoundVariants: [
    {
      color: "primary",
      className: "bg-mainOrange",
    },

    {
      color: "secondary",
      className: "bg-green text-mainGreen",
    },
  ],
  defaultVariants: {
    color: "primary",
  },
})

type ShowButton_TP = {
  viewLabel: string
  action: () => void
  variant?: "primary" | "secondary"
}

export const ShowButton = ({ viewLabel, variant, action }: ShowButton_TP) => {
  return (
    <div
      className={showButton({
        color: variant,
      })}
      onClick={action}
    >
      <BsEye />
      <p className=" text-sm">{viewLabel}</p>
    </div>
  )
}
