import { GrView } from "react-icons/gr"
type ViewProps_TP = {
  className?: string
  action?: () => void
  loading?: boolean
}
export const View = ({ className, action, loading, ...props }: ViewProps_TP) => {
  return (
    <GrView
      className={`cursor-pointer  ${className}`}
      onClick={action}
      {...props}
    />
  )
}
