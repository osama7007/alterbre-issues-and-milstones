import { GrView } from "react-icons/gr"
type ViewProps_TP = {
  className?: string
  action?: () => void
  loading?: boolean
}
export const View = ({ className, action, loading, ...props }: ViewProps_TP) => {
  return (
    <GrView
      className={` fill-[#464646] cursor-pointer  ${className}`}
      onClick={action}
      {...props}
    />
  )
}
