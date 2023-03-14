import { IoAddOutline } from "react-icons/io5"
type AddProps_TP = {
  className?: string
  action?: () => void
  loading?: boolean
}
export const Add = ({
  className,
  action,
  loading,
  ...props
}: AddProps_TP) => {
  return (
    <IoAddOutline
      className={` cursor-pointer  ${className}`}
      onClick={action}
      {...props}
    />
  )
}
