import { t } from "i18next"
import { tv } from "tailwind-variants"

type boxesDataBase_TP = {
  variant?: "primary" | "secondary"
  data: any
}

const boxesData = tv({
  base: "flex flex-col justify-center gap-3 rounded-xl  p-3 text-center  font-bold text-white",
  variants: {
    color: {
      primary: "bg-mainGreen",
      secondary: "bg-mainOrange  ",
    },
  },
  compoundVariants: [
    {
      color: "primary",
      className: "bg-mainGreen",
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
export const BoxesDataBase = ({ variant, data }: boxesDataBase_TP) => {
  return (
    <>
      {data && (
        <li
          key={data.id}
          className={boxesData({
            color: variant,
          })}
        >
          <p> {data.account}</p>
          <p>
            {data.value} {t(data.unit)}
          </p>
        </li>
      )}
    </>
  )
}
