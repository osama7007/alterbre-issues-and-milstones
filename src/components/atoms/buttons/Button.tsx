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

type Styles_TP = {
  [key: string]: string
}

const BASE_STYLE: string =
  "relative active:top-[1px] py-2 px-8 font-bold rounded-md"

const STYLES: Styles_TP = {
  primary: BASE_STYLE + " bg-mainGreen text-white",
  system:
    BASE_STYLE +
    " w-full bg-white border border-lightBlack !text-lightBlack flex items-center justify-center gap-2",
  bordered: BASE_STYLE + " bg-white text-mainGreen border-2 border-mainGreen",
  disabled: BASE_STYLE + " bg-lightGreen active:top-0 cursor-not-allowed",
}

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

  var styling = STYLES[version]
  if (disabled) styling += ` ${STYLES.disabled}`
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
