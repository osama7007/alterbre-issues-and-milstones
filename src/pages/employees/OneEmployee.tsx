/////////// IMPORTS
///
import { Form, Formik } from "formik"
import { t } from "i18next"
import { Helmet } from "react-helmet-async"
import { useParams } from "react-router-dom"
import blankPerson from "../../assets/blank-person-image.png"
import { InnerFormLayout, OuterFormLayout } from "../../components/molecules"
import { DropFile } from "../../components/molecules/DropFile"
import { TextLine } from "../../components/templates/employees/TextLine"
import { useFetch } from "../../hooks"
import { HandleBackErrors } from "../../utils/utils-components/HandleBackErrors"
import { Employee_TP } from "./employees-types"
import {Button} from "../../components/atoms/buttons/Button"
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
  const { data: employee, isSuccess } = useFetch<Employee_TP>({
    endpoint: `employees/${employeeID}`,
    queryKey: ["employees", employeeID!],
  })

  /* 
  {
    name: 'ahmed1',
    city: 'الرياض',
    street_number: '122',
    building_number: '96',
    sub_number: '96',
    postal_code: '96',
    district: 'الخالدية',
    address: ' - sssd -- fff الخالدية',
    id: 1,
    phone: '01126183678',
    branch: 'الطائف',
    img:"https://lh3.googleusercontent.com/ogw/AAEL6sgwKcrK2aTyirul8VRTnF6ZXEj4jZsKIAXHm-w0EP0=s32-c-mo",
    nationality: 'سعودي',
    active: true,
    date_of_hiring: '2-2-2023',
    date_of_birth: '2-2-2022',
    resident: 'دائمة',
    email: 'zoomgoo711@gmail.com'
  }
  */
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
        <title>{employee?.name || "معلومات موظف"}</title>
      </Helmet>
      {isSuccess && (
        <div className="flex gap-8">
          {/* Right column */}
          <div>
            <img
              src={employee.img || blankPerson}
              alt={`employee ${employee.name}`}
            />
            {employee.name && (
              <TextLine boldText={t("the-name")} lightString={employee.name} />
            )}

            {employee.branch && (
              <TextLine
                boldText={t("the-branch")}
                lightString={employee.branch}
              />
            )}
          </div>

          {/* The rest */}
          <div>
            {employee.phone && (
              <TextLine
                boldText={t("phone-number")}
                lightString={employee.phone}
              />
            )}
            {/* ⬇️⬇️⬇️ وهكذا */}
          </div>

          <Formik
            initialValues={{ files: [] }}
            onSubmit={(values) => {
              console.log("values", values)
            }}
          >
            {({ values, dirty }) => (
              <HandleBackErrors>
                <Form>
                  <OuterFormLayout submitComponent={
                    <Button>
                          fvkj
                    </Button>
                  }>
                  </OuterFormLayout>
                  <DropFile name="files" />
                </Form>
              </HandleBackErrors>
            )}
          </Formik>
        </div>
      )}
    </>
  )
}
