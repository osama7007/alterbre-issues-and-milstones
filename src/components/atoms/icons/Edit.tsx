import {  AiFillEdit } from "react-icons/ai"
type EditProps_TP = {
  className?: string
  action?: () => void
}
export const Edit = ({
  className,
  action,
  ...props
}: EditProps_TP) => {

  return (
    <AiFillEdit
      className={`cursor-pointer  ${className}`}
      onClick={action}
      {...props}
    />
  )
}
