/////////// IMPORTS
///
import { useFormikContext } from "formik"
import { t } from "i18next"
import {
  InnerFormLayout,
} from "../molecules"
import { Button } from "../atoms"
import { SelectOption_TP } from "../../types"
import { useFetch, useMutate } from "../../hooks"
import { Modal } from "../molecules"
import { useState } from "react"
import { DocumentForm } from "./DocumentForm"
import { CiFolderOn } from "react-icons/ci"
import { EmployeeDocsData } from "./employee/EmployeeDocsData"
import { Edit } from "../atoms/icons/Edit"
import { Delete } from "../atoms/icons/Delete"

///
/////////// Types
///

/////////// HELPER VARIABLES & FUNCTIONS
///

///
export const Documents = ({setDocsFormValues}:any) => {
  /////////// VARIABLES
  ///

  ///
  /////////// CUSTOM HOOKS
  ///


  ///
  /////////// STATES
  ///
  const [addDocPopup, setAddDocPopup] = useState(false)
  const [allDocs, setAllDocs] = useState([])
  const [showEmployee, setShowEmployee] = useState(false)
  const [employeeDocsData, setEmployeeDocsData] = useState()
  const [editableEmployeeData, setEditableEmployeeData] = useState({})
  
  ///
  /////////// SIDE EFFECTS
  ///
  /////////// FUNCTIONS | EVENTS | IF CASES
  ///
  function handleAddDoc() {
    setAddDocPopup(true)
    setEditableEmployeeData({
      docName:"",
      docNumber:"",
      files:[],
      docType:[],
      reminder:""
    })
  }
 
  function deleteDocHandler(id:string){
    setAllDocs((prev)=> prev.filter(doc=> doc.id !== id))
  }
 

  ///
  return (
    <>
      <InnerFormLayout
        title={t("documents")}
        leftComponent={

           allDocs.length > 0 ?
          <Button action={handleAddDoc} bordered >
          {t("Add another document")}
        </Button>
           :
            <Button action={handleAddDoc} bordered >
            {t("Add document")}
          </Button>
        }
        customStyle={ !(allDocs.length > 0) ? 'bg-transparent' : ""}

      >
        {allDocs.length > 0 && (
          <div className="col-span-4">
            <h2 className="mb-8 text-center">{t("available documents")}</h2>
            <div className="max-h-96 overflow-y-auto scrollbar flex flex-wrap justify-center items-center">
              {allDocs.map((item) => (
                <div  className="w-1/4  flex justify-center items-center flex-col my-5" key={item.id} >
                  <div className="flex gap-x-4 items-center" >
                    <Edit action={()=>{
                      setAddDocPopup(true)
                      setEditableEmployeeData(item)
                    }
                      } />
                    <Delete action={()=>deleteDocHandler(item.id)} />
                  </div>
                 <CiFolderOn className="text-[4rem] text-mainGreen cursor-pointer mx-5  " onClick={()=>{
                   // console.log(item)
                     setEmployeeDocsData(item) // one employee docs data 
                     setShowEmployee(true)
                 } } />
                <span>{item?.docName}</span> 
                </div>
              ))}
            </div>
          </div>
        )}
      </InnerFormLayout>

      <Modal isOpen={addDocPopup} onClose={setAddDocPopup.bind(null, false)}>
            <DocumentForm setDocsFormValues={setDocsFormValues} setAllDocs={setAllDocs} setAddDocPopup={setAddDocPopup} editableEmployeeData={editableEmployeeData} />
      </Modal>
      
      <Modal isOpen={showEmployee} onClose={setShowEmployee.bind(null, false)}>
            <EmployeeDocsData employeeDocsData={employeeDocsData}/>

      </Modal>
    </>
  )
}
