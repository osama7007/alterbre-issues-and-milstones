/////////// IMPORTS
///
import { useNavigate } from "react-router-dom"
import blankPerson from "../../../assets/blank-person-image.png"
import { Employee_TP } from "../../../pages/employees/employees-types"
import { Button } from "../../atoms"
import { DeleteIcon, EditIcon, ViewIcon } from "../../atoms/icons"
///
/////////// Types
///
interface EmployeeCardProps_TP
  extends Pick<Employee_TP, "id" | "name" | "img"> {}
/////////// HELPER VARIABLES & FUNCTIONS
///

///
export const EmployeeCard = ({ id, img, name }: EmployeeCardProps_TP) => {
  /////////// VARIABLES
  ///

  ///
  /////////// CUSTOM HOOKS
  ///
  const navigate = useNavigate()
  ///
  /////////// STATES
  ///

  ///
  /////////// SIDE EFFECTS
  ///

  /////////// FUNCTIONS | EVENTS | IF CASES
  ///

  ///
  return (
    <div>
      {/* Employee img */}
      <div>
        <img src={img || blankPerson} alt={`employee: ${name}`} />
      </div>
      {/* Employee name */}
      <h2>{name}</h2>
      {/* Employee actions */}
      <div className="flex items-center gap-x-2 justify-center">
        <Button
          action={() => navigate(`${id}`)}
          className="flex items-center gap-x-2"
        >
          <ViewIcon />
          عرض
        </Button>
        <Button bordered className="flex items-center gap-x-2">
          <EditIcon />
          تعديل
        </Button>
        <Button variant="danger" className="flex items-center gap-x-2">
          <DeleteIcon />
          حذف
        </Button>
      </div>
    </div>
  )
}
