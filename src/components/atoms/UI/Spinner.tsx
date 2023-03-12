/////////// IMPORTS
///
import { tv } from "tailwind-variants"

///
/////////// Types
///
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
/////////// HELPER VARIABLES & FUNCTIONS
///

///
export const Spinner = ({
  variant = "primary",
}: {
  variant?: "primary" | "danger" | "bordered"
}) => {
  /////////// VARIABLES
  ///

  ///
  /////////// CUSTOM HOOKS
  ///

  ///
  /////////// STATES
  ///

  ///
  /////////// SIDE EFFECTS
  ///

  /////////// FUNCTIONS | EVENTS | IF CASES
  ///

  ///
  return (
    <div className="flex items-center justify-center">
      <div
        className={spinner({
          color: variant,
        })}
      ></div>
    </div>
  )
}
