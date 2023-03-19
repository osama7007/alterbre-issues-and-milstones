import { BsEye } from "react-icons/bs"
type ViewProps_TP = {
  className?: string
  action?: () => void
}
export const View = ({ className, action, ...props }: ViewProps_TP) => {
  return (
    <BsEye
      className={`cursor-pointer  ${className}`}
      onClick={action}
      {...props}
    />
  )
}
