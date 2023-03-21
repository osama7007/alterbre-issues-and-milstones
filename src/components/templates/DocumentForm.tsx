/////////// IMPORTS
///
import { Form, Formik } from "formik"
import { t } from "i18next"
import { useFetch, useMutate } from "../../hooks"
import { SelectOption_TP } from "../../types"
import { mutateData } from "../../utils/mutateData"
import { notify } from "../../utils/toast"
import { Button } from "../atoms"
import {
  BaseInputField,
  DateInputField,
  Select,
} from "../molecules"
import { DropFile } from "../molecules/DropFile"
import { useState } from "react"
///
/////////// Types
///

/////////// HELPER VARIABLES & FUNCTIONS
///

///
export const DocumentForm = ({setDocsFormValues , setAllDocs , setAddDocPopup , editableEmployeeData}:any)=>{
/////////// VARIABLES
///
console.log("fsdvsdv", editableEmployeeData)

const initialValues = {
  docName: editableEmployeeData.docName || '',
  docNumber:editableEmployeeData.docNumber || '',
  files: editableEmployeeData?.files && editableEmployeeData?.files.length > 0 || [],
  docType: editableEmployeeData?.docType && [{value:editableEmployeeData?.docType.value ,label:editableEmployeeData?.docType.label}] || [],
  endDate:editableEmployeeData.endDate || new Date(),
  reminder:editableEmployeeData.reminder || '',
}
///
/////////// CUSTOM HOOKS
///

  // get identity
  const {
    data: identity,
    isError: identityError,
    isLoading: identityLoading,
  } = useFetch<SelectOption_TP[]>({
    endpoint: "http://localhost:3600/identity",
    queryKey: ["identity"],
    select: (identities) =>
      identities.map((identity: any) => ({
        id: identity.id,
        value: identity.name,
        label: identity.name,
      })),
  })

  // post document
  const { mutate: docMutate, isLoading: docLoading } = useMutate<any>({
    mutationFn: mutateData,
    onSuccess: (data) => {
      console.log(data)
    },
    onError: (err) => {
      notify("error")
    },
  })
///
/////////// STATES
///
  const [docType,setDocType]=useState()
///
/////////// SIDE EFFECTS
///

/////////// FUNCTIONS | EVENTS | IF CASES
///
function handleAddDocData(values:any) {
  setAllDocs((prev:any)=>[...prev , {...values,docType,id:crypto.randomUUID()}])
    setDocsFormValues({...values,docType})
    setAddDocPopup(false)
  }
///
return <>
<Formik
 initialValues={initialValues}
 // validationSchema={loginSchema}
  onSubmit={(values) => {
   // console.log(values)
  }}
>
{({values}) => (
  <Form>
   <h2 className="text-center mb-8">{t("Adding document")}</h2>
              {/* id type start */}
              <div className="grid grid-cols-4 gap-3 text-start items-center">
                <Select
                  id="docType"
                  label="نوع الوثيقة"
                  name="docType"
                  placeholder="سجل تجاري"
                  loadingPlaceholder="جاري التحميل"
                  options={identity}
                  loading={identityLoading}
                  fieldKey="id"
                  onChange={(option)=>setDocType(option)}/>
                {/* id type end */}

                {/* name start */}
                <BaseInputField
                  id="docName"
                  label="اسم الوثيقة"
                  name="docName"
                  type="text"
                  placeholder="اسم الوثيقة"
                />
                {/* name end */}

                {/* number start */}
                <BaseInputField
                  id="docNumber"
                  label="رقم الوثيقة"
                  name="docNumber"
                  type="number"
                  placeholder="رقم الوثيقة"
                />
                {/* number end */}

                {/* hiring date start */}
                <DateInputField
                  label="تاريخ الانتهاء"
                  name="endDate"
                  maxDate={new Date()}
                  labelProps={{ className: "mb-2" }}
                />
                {/* hiring date end */}

                {/* number start */}
                <BaseInputField
                  id="reminder"
                  label="عدد أيام التذكير قبل الانتهاء"
                  name="reminder"
                  type="number"
                  placeholder="60"
                />
              </div>
              {/* number end */}
              <div className="mt-8">
                <DropFile name="files" />
              </div>
              <Button type="submit" action={() => handleAddDocData(values)}>
                {t("submit")}
              </Button>
              </Form>
)}
</Formik>
</>
}