/////////// IMPORTS
///
import { t } from "i18next"
import { BaseInputField, CheckBoxField, InnerFormLayout } from "../molecules"
import { Button } from "../atoms"
import { SelectOption_TP } from "../../types"
import { useFetch } from "../../hooks"
import { Modal } from "../molecules"
import { useState } from "react"
import { useFormikContext } from "formik"
import { Select } from "../molecules"
///
/////////// Types
///

/////////// HELPER VARIABLES & FUNCTIONS
///

///
export const Documents = () => {
  /////////// VARIABLES
  ///

  ///
  /////////// CUSTOM HOOKS
  ///
  const { setFieldValue } = useFormikContext<any>()
  // get documents
  const {
    data: documents,
    isError: documentsError,
    isLoading: documentsLoading,
    refetch,
  } = useFetch<SelectOption_TP[]>({
    endpoint: "http://localhost:3600/docs",
    queryKey: ["documents"],
    enabled: false,
  })

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
        value: identity.name,
        label: identity.name,
      })),
  })
  ///
  /////////// STATES
  ///
  const [addDoc, setAddDoc] = useState(false)
  ///
  /////////// SIDE EFFECTS
  ///

  /////////// FUNCTIONS | EVENTS | IF CASES
  ///
  function handleFetch() {
    refetch()
  }
  function handleAddDoc() {
    console.log("gfg")
    setAddDoc(true)
  }
  ///
  return (
    <>
      <InnerFormLayout
        title={t("documents")}
        subTitle={t("show documents")}
        action={handleFetch}
      >
        {documents && documents.length > 0 ? (
          <div>
            <h2 className="mb-2">•{t("available documents")}</h2>
            <h4 className="mr-5">{t("choose document")}</h4>
            <div>
              {documents.map((item) => (
                <CheckBoxField
                  label={item.name}
                  id={item.id}
                  name={item.name}
                />
              ))}
              <Button action={handleAddDoc} bordered>
                {t("Add document")}
              </Button>
            </div>
          </div>
        ) : (
          documents && <h2>{t("There is no available documents yet")}</h2>
        )}
      </InnerFormLayout>

      <Modal isOpen={addDoc} onClose={setAddDoc.bind(null, false)}>
        <div className="grid grid-cols-4">
          <div className="col-span-1">
            {/* id type start */}
            <Select
              id="management"
              label="نوع الهوية"
              name="management"
              placeholder="جدة"
              loadingPlaceholder="جاري التحميل"
              options={identity}
              //@ts-ignore
              onChange={(option: SingleValue<SelectOption_TP>) =>
                setFieldValue("management", option?.id)
              }
              loading={identityLoading}
            />
            {/* id type end */}
          </div>
          <div className="col-span-4" >
            <div className="col-span-1">
            {/* name start */}
            <BaseInputField
              id="name"
              label="الاسم"
              name="name"
              type="text"
              placeholder="الاسم"
            />
            {/* name end */}
            </div>

            {/* number start */}
            <BaseInputField
              id="number"
              label="الرقم"
              name="number"
              type="number"
              placeholder="الرقم"
            />
            {/* number end */}
          </div>
        </div>
      </Modal>
    </>
  )
}
