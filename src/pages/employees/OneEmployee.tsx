/////////// IMPORTS
///
//import classes from './OneEmployee.module.css'
import { Helmet } from "react-helmet-async"
import { useParams } from "react-router-dom"
///
/////////// Types
///
type OneEmployeeProps_TP = {
  title?: string
}
/////////// HELPER VARIABLES & FUNCTIONS
///

///
export const OneEmployee = ({ title }: OneEmployeeProps_TP) => {
  /////////// VARIABLES
  ///
  const { employeeID } = useParams()
  console.log(
    "🚀 ~ file: OneEmployee.tsx:20 ~ OneEmployee ~ employeeID:",
    employeeID
  )
  ///
  /////////// CUSTOM HOOKS
  ///

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
        {/* Employee name */}
        <title>{title}</title>
      </Helmet>
      <h1>ss</h1>
    </>
  )
}
