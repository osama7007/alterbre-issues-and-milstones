/////////// IMPORTS
///
import blankPerson from "../../../assets/blank-person-image.png"
import { Employee_TP } from "../../../pages/employees/employees-types"
///
/////////// Types
///
interface EmployeeCardProps_TP extends Employee_TP {}
/////////// HELPER VARIABLES & FUNCTIONS
///

///
export const EmployeeCard = ({ id, img, name }: EmployeeCardProps_TP) => {
  /////////// VARIABLES
  ///

  ///
  /////////// CUSTOM HOOKS
  ///

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
    </div>
  )
}
