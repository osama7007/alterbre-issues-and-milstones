/////////// IMPORTS
///

import { useFormikContext } from "formik"
import { ChangeEvent } from "react"
import { Permission_TP } from "../../../pages/administrativeStructure/types-schemas"
import { CheckBoxField } from "../../molecules/formik-fields/CheckBoxField"

///
/////////// Types
///
type PermissionGroupProps_TP = {
  permissions: Permission_TP[]
  name: string
}
/////////// HELPER VARIABLES & FUNCTIONS
///

///
export const PermissionGroup = ({
  name,
  permissions,
}: PermissionGroupProps_TP) => {
  /////////// VARIABLES
  ///

  ///
  /////////// CUSTOM HOOKS
  ///
  const { values, setFieldValue } = useFormikContext()
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
    <div className="flex flex-col gap-4">
      <h4 className="flex items-center  text-lg ">{name}</h4>
      <div className="grid grid-cols-2 gap-5">
        {permissions.map(({ id, name, front_key }) => (
          <div key={id}>
            <CheckBoxField
              label={name}
              type="checkbox"
              id={id}
              name={front_key}
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                e.target.checked
                  ? setFieldValue(front_key, id)
                  : setFieldValue(front_key, "")
              }}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
