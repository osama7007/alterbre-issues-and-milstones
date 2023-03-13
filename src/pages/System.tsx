/////////// IMPORTS
///
import { Form, Formik } from "formik"
import { Helmet } from "react-helmet-async"
import { DropFile } from "../components/molecules/DropFile"
import { CFile } from "../types"
import * as Yup from "yup"
import { Button } from "../components/atoms/buttons/Button"
///
/////////// Types
///
type SystemProps_TP = {
  title: string
}
/////////// HELPER VARIABLES & FUNCTIONS
///
const initialValues: { files: CFile[]; media: CFile[] } = {
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
        onSubmit={(values) => console.log('>>>>>>>',values)}
        initialValues={initialValues}
        validationSchema={validation}
      >
        {({ values, errors }) => (
          <Form>
            <DropFile name="files" />
            <DropFile name="media" />
            <Button type="submit">
                Click
            </Button>
          </Form>
        )}
      </Formik>
    </>
  )
}
