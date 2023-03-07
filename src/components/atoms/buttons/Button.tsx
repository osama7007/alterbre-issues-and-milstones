/////////// IMPORTS
///
import { ReactNode } from "react"
///
/////////// Types
///

/////////// HELPER VARIABLES & FUNCTIONS
///
type ButtonProps_TP = {
  version?: "primary" | "secondary" | "system" | "bordered"
  type?: "button" | "submit"
  customStyles?: string
  children: ReactNode
  action?: () => void
  disabled?: boolean
}
/// version === 'primary' | 'blank'
/// version === 'primary' | 'blank'
export const Button = ({
  version = "primary",
  type = "button",
  customStyles,
  children,
  action,
  disabled,
  ...props
}: ButtonProps_TP) => {
  /////////// VARIABLES
  ///

  let styling = "relative active:top-[1px] py-2 px-8 font-bold rounded-md"
  let plusStyling
  if (version === "primary") {
    plusStyling = "bg-mainGreen text-white"
  }
  if (version === "system") {
    plusStyling =
      "w-full bg-white border border-lightBlack !text-lightBlack flex items-center justify-center gap-2"
  }
  if (version === "bordered") {
    plusStyling = "bg-white text-mainGreen border-2 border-mainGreen"
  }
  if (disabled) {
    plusStyling = "bg-lightGreen active:top-0 cursor-not-allowed"
  }

  styling =
    styling + ` ${plusStyling ? plusStyling : ''} ${customStyles ? customStyles : ''}`
  ///
  /////////// CUSTOM HOOKS
  ///

  ///
  /////////// STATES
  ///

  ///
  /////////// SIDE EFFECTS
  ///

  ///
  /////////// IF CASES
  ///

  ///
  /////////// FUNCTIONS & EVENTS
  ///

  ///
  return (
    <button
      disabled={disabled}
      type={type}
      className={styling}
      onClick={action}
      {...props}
    >
      {children}
    </button>
  )
}