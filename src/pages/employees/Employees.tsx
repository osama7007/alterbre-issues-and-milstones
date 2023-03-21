/////////// IMPORTS
///
//import classes from './Employees.module.css'
import { t } from "i18next"
import { Helmet } from "react-helmet-async"
import { useNavigate } from "react-router-dom"
import { Button } from "../../components/atoms"
import { AddIcon } from "../../components/atoms/icons"
import { EmployeeCard } from "../../components/templates/employees/EmployeeCard"
import { useFetch } from "../../hooks"
import { Employee_TP } from "./employees-types"
///
/////////// Types
///
type EmployeesProps_TP = {
  title: string
}
/////////// HELPER VARIABLES & FUNCTIONS
///

///
export const Employees = ({ title }: EmployeesProps_TP) => {
  /////////// VARIABLES
  ///

  ///
  /////////// CUSTOM HOOKS
  ///
  const { data: employees, isSuccess, failureReason } = useFetch<Employee_TP[]>({
    endpoint: "employees",
    queryKey: ["employees"],
  })

  const navigate = useNavigate()
  ///
  /////////// STATES
  ///

  ///
  /////////// SIDE EFFECTS
  ///

  ///
  /////////// FUNCTIONS | EVENTS | IF CASES
  ///

  ///
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      {/* SUCCESS & > 0 Employees */}
      {isSuccess &&
        employees.length > 0 &&
        employees.map(({ id, name, img }) => (
          <EmployeeCard id={id} name={name} img={img} key={id} />
        ))}

      {/* SUCCESS & 0 Employees */}
      {isSuccess && employees.length === 0 && (
        <div>
          <p>لا يوجد موظفين</p>
          <Button
            action={() => navigate(`/add-employee`)}
            className="flex items-center gap-2"
          >
            <AddIcon /> {t("add-employee")}
          </Button>
        </div>
      )}

      {/* ERROR */}
      {/* {failureReason && <p>{failureReason}</p>} */}
    </>
  )
}
