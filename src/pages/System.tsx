/////////// IMPORTS
///
import { Form, Formik } from "formik"
import { Helmet } from "react-helmet-async"
import { DropFile } from "../components/molecules/DropFile"
import { CFile_TP } from "../types"
import * as Yup from "yup"
import { Button } from "../components/atoms/buttons/Button"
import { Header } from "../components/atoms/Header"
import { BsFiles } from "react-icons/bs"
/////////// Types
///
type SystemProps_TP = {
  title: string
}
/////////// HELPER VARIABLES & FUNCTIONS
///
const initialValues: { files: CFile_TP[]; media: CFile_TP[] } = {
  files: [],
  media: [],
}

const validation = Yup.object().shape({
  files: Yup.array().required().min(1),
})
///
export const System = ({ title }: SystemProps_TP) => {
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

  ///
  /////////// FUNCTIONS | EVENTS | IF CASES
  ///

  ///
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <Formik
        onSubmit={(values) => console.log(">>>>>>>", values)}
        initialValues={initialValues}
        validationSchema={validation}
      >
        {({ values, errors }) => (
          <div className="flex justify-center  flex-col w-full p-4 ">
            <Form>
              <div className="flex flex-col rounded-xl bg-lightGreen p-6">
                {" "}
                <div className=" flex items-center gap-2 ">
                  <BsFiles className=" fill-mainGreen w-5 h-5" />
                  <Header
                    header="رفع الملفات والصور"
                    className="text-xl font-bold"
                  />
                </div>
                <div className="mt-4 rounded-md bg-flatWhite py-6 px-8 w-full">
                  <DropFile name="files" />
                  <DropFile name="media" />
                </div>
              </div>
            </Form>
          </div>
        )}
      </Formik>
    </>
  )
}
