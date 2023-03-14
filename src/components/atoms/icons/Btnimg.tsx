import { GrView } from "react-icons/gr"
import { MdInsertPhoto } from "react-icons/md"
type BtnImgProps_TP = {
  className?: string
  action?: () => void
  loading?: boolean
}
export const BtnImg = ({
  className,
  action,
  loading,
  ...props
}: BtnImgProps_TP) => {
  return (
    <MdInsertPhoto
      className={` cursor-pointer  ${className}`}
      onClick={action}
      {...props}
    />
  )
}
