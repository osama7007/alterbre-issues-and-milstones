/////////// IMPORTS
///
///
/////////// Types
///
import { useFormikContext } from "formik"
import { PermissionGroup } from "../../pages/AdministrativeStructure/PermissionGroup"
import { InnerFormLayout } from "../molecules/InnerFormLayout"
import { SelectComp } from "../molecules/formik-fields/Select"
import { useFetch } from "../../hooks"
import { SelectOption_TP } from "../../types"
import { permissionGroup_TP } from "../../pages/AdministrativeStructure/types-schemas"
/////////// HELPER VARIABLES & FUNCTIONS
///
type Permission_TP = {
    permissions:permissionGroup_TP[]
}
///
export const PermissonForm = ({ permissions}: Permission_TP) => {
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
    isSuccess: nameSuccess
  } = useFetch<SelectOption_TP[]>({
    queryKey: ["names"],
    endpoint: "names",
    select:(names:any )=> names.map((name:{id:number , name:string} )=>({
        value:name.name , label:name.name
    }))
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
            <SelectComp 
            name="name"
            id="name" 
            label="الاسم"
            options={nameData} 
            onChange={(option)=>setFieldValue('name',option)}
            />
        </div>
          <div className="flex flex-col gap-1 col-span-4">
            <h4 className="flex items-center justify-center text-2xl underline  underline-offset-2 decoration-1 mb-5">
              الصلاحيات
            </h4>

            <div className=" flex justify-center items-center">
              {permissions.map(({ id, name, permissions }: any) => (
                <PermissionGroup
                  key={id}
                  name={name}
                  permissions={permissions}
                />
              ))}
            </div>
          </div>
    </InnerFormLayout>
  )
}
