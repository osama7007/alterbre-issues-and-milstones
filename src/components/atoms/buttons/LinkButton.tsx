// Tailwind link button atom using <a> tag

import { ReactNode } from "react"
import { Link } from "react-router-dom"
interface LinkButtonProps_TP
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  customStyles?: string
  action?: () => void
  disabled?: boolean
  children: ReactNode
  href: string
  color?: string
}

const ColorMap = new Map([
  ["mainGreen", "text-mainGreen border-b-mainGreen border-b-2"],
  ["mainRed", "text-mainRed border-b-mainRed border-b-2"],
])

export const LinkButton = ({
  customStyles,
  action,
  disabled,
  children,
  color = "mainGreen",
  ...props
}: LinkButtonProps_TP) => {
  /////////// VARIABLES
  ///
  var styling = disabled
    ? `${ColorMap.get(color)} cursor-not-allowed`
    : ColorMap.get(color)

  if (customStyles) styling += ` ${customStyles}`
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
    <Link
      to={props.href}
      className={styling}
      onClick={
        disabled
          ? (e) => {
              e.preventDefault()
            }
          : action
      }
      {...props}
    >
      {children}
    </Link>
  )
}
