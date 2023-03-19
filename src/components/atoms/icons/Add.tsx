import { IoAddOutline } from "react-icons/io5"
type AddProps_TP = {
  className?: string
  action?: () => void
}
export const Add = ({
  className,
  action,
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
