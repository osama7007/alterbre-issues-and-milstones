/////////// IMPORTS
///

import { useFormikContext } from "formik"
import { ChangeEvent } from "react"
import { BaseInputField } from "../../components/molecules/formik-fields/BaseInputField"
import { CheckBoxField } from "../../components/molecules/formik-fields/CheckBoxField"
import { Permission_TP } from "./types-schemas"

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
    <div>
      <h2>{name}</h2>
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
  )
}
