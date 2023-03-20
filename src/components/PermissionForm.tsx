/////////// IMPORTS
///
///
/////////// Types
///
import { useFormikContext } from "formik"
import { useFetch } from "../hooks"
import { PermissionGroup } from "../pages/AdministrativeStructure/PermissionGroup"
import { permissionGroup_TP } from "../pages/AdministrativeStructure/types-schemas"
import { SelectOption_TP } from "../types"
import { BaseInputField } from "./molecules"
import { InnerFormLayout } from "./molecules/InnerFormLayout"
/////////// HELPER VARIABLES & FUNCTIONS
///
type Permission_TP = {
  permissions: permissionGroup_TP[]
}
///
export const PermissionForm = ({ permissions }: Permission_TP) => {
  /////////// VARIABLES
  ///
  ///
  /////////// CUSTOM HOOKS
  ///
  const { setFieldValue } = useFormikContext()

  const {
    data: nameData,
    isError: nameError,
    isLoading: nameLoading,
    isSuccess: nameSuccess,
  } = useFetch<SelectOption_TP[]>({
    queryKey: ["names"],
    endpoint: "names",
    select: (names: any) =>
      names.map((name: { id: number; name: string }) => ({
        value: name.name,
        label: name.name,
      })),
  })
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
    <InnerFormLayout>
      <div className="col-span-1">
        <BaseInputField
          placeholder="مدير"
          labelProps={{ className: "mb-5" }}
          type="text"
          id="name"
          label="الإسم"
          name="name"
        />
      </div>
      <div className="flex flex-col gap-1 col-span-4">
        <h4 className="flex items-center justify-center text-2xl underline  underline-offset-2 decoration-1 mb-5">
          الصلاحيات
        </h4>

        <div className=" flex flex-col justify-center items-start gap-8">
          {permissions.map(({ id, name, permissions }: any) => (
            <PermissionGroup key={id} name={name} permissions={permissions} />
          ))}
        </div>
      </div>
    </InnerFormLayout>
  )
}
