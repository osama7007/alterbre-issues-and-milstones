import { tv } from "tailwind-variants"
import { Header } from "../Header"

const cardHeader = tv({
  base: "flex w-full items-center justify-center gap-2  rounded-lg  py-2 px-8 text-white bg-mainGreen",
  variants: {
    color: {
      primary: "bg-mainOrange",
      secondary: "bg-mainGreen ",
    },
  },
  compoundVariants: [
    {
      color: "primary",
      className: "bg-mainOrange",
    },

    {
      color: "secondary",
      className: "bg-mainGreen",
    },
  ],
  defaultVariants: {
    color: "primary",
  },
})

type cardHeader_TP = {
  header: string
  variant?: "primary" | "secondary"
  className?: string
  Counter?: string
}

export const CardHeader = ({
  header,
  variant,
  className,
  Counter,
}: cardHeader_TP) => {
  return (
    <div
      className={cardHeader({
        color: variant,
        className: className,
      })}
    >
      {Counter && (
        <div className="flex w-full items-center justify-center">
          <Header header={header} />
          {Counter ? <p>{Counter}</p> : null}
        </div>
      )}
      {!Counter && (
        <div className="flex w-full items-center justify-around">
          <Header header={header} />
        </div>
      )}
    </div>
  )
}
