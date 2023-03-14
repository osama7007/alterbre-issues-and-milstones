import { AiFillDelete } from "react-icons/ai"
type DeleteProps_TP = {
  className?: string
  action?: () => void
  loading?: boolean
}
export const Delete = ({
  className,
  action,
  loading,
  ...props
}: DeleteProps_TP) => {

  return (
    <AiFillDelete
      className={` fill-red-500 cursor-pointer  ${className}`}
      onClick={action}
      {...props}
    />
  )
}
