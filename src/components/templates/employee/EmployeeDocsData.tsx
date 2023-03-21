/////////// IMPORTS
///
import { formatDate } from "../../../utils/date" 
///
/////////// Types
///
type EmployeeDocsDataProps_TP = {
  employeeDocsData: any
}
/////////// HELPER VARIABLES & FUNCTIONS
///

///
export const EmployeeDocsData = ({
  employeeDocsData,
}: EmployeeDocsDataProps_TP) => {
  console.log("🚀 ~ file: EmployeeDocsData.tsx:16 ~ employeeDocsData:", employeeDocsData)
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
    <>
       <ul>
        <li>{employeeDocsData.docName}</li>
        <li>{employeeDocsData.docNumber}</li>
        <li>{employeeDocsData.docType !== undefined && employeeDocsData.docType.value}</li>
        <li>{formatDate(employeeDocsData.endDate)}</li>
        <li>{employeeDocsData.reminder}</li>
      </ul> 
    </>
  )
}
