import { GrView } from "react-icons/gr"
type ViewProps_TP = {
  className?: string
  action?: () => void
}
export const View = ({ className, action, ...props }: ViewProps_TP) => {
  return (
    <GrView
      className={`cursor-pointer  ${className}`}
      onClick={action}
      {...props}
    />
  )
}
