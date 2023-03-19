import { GrView } from "react-icons/gr"
import { MdInsertPhoto } from "react-icons/md"
type ImageProps_TP = {
  className?: string
  action?: () => void
}
export const Image = ({
  className,
  action,
  ...props
}: ImageProps_TP) => {
  return (
    <MdInsertPhoto
      className={` cursor-pointer  ${className}`}
      onClick={action}
      {...props}
    />
  )
}
