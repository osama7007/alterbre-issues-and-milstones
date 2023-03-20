/////////// IMPORTS
///
//import classes from './Employees.module.css'
import { Helmet } from "react-helmet-async"
import { useFetch } from "../../hooks"
import { Employee_TP } from "./employees-types"
import { useNavigate } from "react-router-dom"
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
  const navigate = useNavigate()
  ///
  /////////// CUSTOM HOOKS
  ///
  const { data: employees, isSuccess } = useFetch<Employee_TP[]>({
    endpoint: "employees",
    queryKey: ["employees"],
  })
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
      {isSuccess &&
        employees.map(({ id, name }) => (
          <div key={id} onClick={() => navigate(`${id}`)}>{name}</div>
        ))}
    </>
  )
}
