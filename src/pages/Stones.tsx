/////////// IMPORTS
///
//import classes from './Stones.module.css'
import { Helmet } from "react-helmet-async"
///
import { Form, Formik } from "formik"
import { BaseInputField } from "../components/molecules/formik-fields/BaseInputField"
import * as Yup from "yup"
import { Button } from "../components/atoms/buttons/Button"
import { TextAreaField } from "../components/molecules/formik-fields/TextAreaField"
import { RadioField } from "../components/molecules/formik-fields/RadioField"
import { CheckBoxField } from "../components/molecules/formik-fields/CheckBoxField"

/////////// Types
///
type Stone_TP = {
  title: string
}
/////////// HELPER VARIABLES & FUNCTIONS
///
const SubmitHandler = (values: {
  Date: Date
  number: string
  number1: string
  number2: string
  number3: string
  radio: string
  testArea: string
  checkBox: boolean
}) => {
  console.log(values)
}
const initialValues = {
  Date: new Date(),
  number: "",
  number1: "",
  number2: "",
  number3: "",
  radio: "buy",
  testArea: "",
  checkBox: false,
}
const validatingSchema = Yup.object({
  Date: Yup.date()
    .max(new Date())
    .required("برجاء ملئ هذا الحقل")
    .typeError("أدخل التاريخ من فضلك"),
  number: Yup.number()
    .min(1, " الصفر غير مسموح ")
    .required("برجاء ملئ هذا الحقل")
    .typeError("الأرقام فقط مسموحة"),
  number1: Yup.number()
    .min(1, " الصفر غير مسموح ")
    .required("برجاء ملئ هذا الحقل")
    .typeError("الأرقام فقط مسموحة"),
  number2: Yup.number()
    .min(1, " الصفر غير مسموح ")
    .required("برجاء ملئ هذا الحقل")
    .typeError("الأرقام فقط مسموحة"),
  number3: Yup.number()
    .min(1, " الصفر غير مسموح ")
    .required("برجاء ملئ هذا الحقل")
    .typeError("الأرقام فقط مسموحة"),
})
///
export const Stones = ({ title }: Stone_TP) => {
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
  /////////// IF CASES
  ///

  ///
  /////////// EVENTS
  ///

  ///
  /////////// FUNCTIONS
  ///

  ///
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>{" "}
      <>
        <div className="p-4 flex flex-col gap-4">
          <div className="pr-5">
            <h3 className="text-2xl font-bold">توريد متفرقات </h3>
          </div>
          <Formik
            onSubmit={(values) => SubmitHandler(values)}
            initialValues={initialValues}
            validationSchema={validatingSchema}
          >
            <Form>
              <div className="flex flex-col gap-4 p-6">
                {" "}
                <div className="flex w-full gap-3 items-center">
                  <h4 className="text-xl font-bold">نوع التوريد :</h4>
                  <RadioField
                    label={"buy"}
                    id={"radio"}
                    name={"radio"}
                    value="buy"
                    defaultChecked
                  />
                  <RadioField
                    label={"sell"}
                    id={"radio"}
                    name={"radio"}
                    value="sell"
                  />
                  <CheckBoxField
                    label={"checkBox"}
                    name={"checkBox"}
                    id={"checkBox"}
                  />
                </div>
                <div className="flex flex-col gap-12 rounded-xl bg-lightGreen p-6">
                  <div>
                    <h4 className="flex items-center text-2xl font-bold">
                      {/* <TabsIcon cStyle="ml-1.5" /> */}
                      البيانات الاساسيه
                    </h4>

                    <div className="mt-4 grid grid-cols-4 gap-8 rounded-md bg-flatWhite py-6 px-8">
                      <BaseInputField
                        type="text"
                        id="number1"
                        label="رقم السند"
                        name="number1"
                        placeholder="رقم"
                      />
                      <BaseInputField
                        type="text"
                        id="number"
                        label="اسم المشتري"
                        name="number"
                        placeholder="اسم المشتري"
                      />
                      <BaseInputField
                        type="text"
                        id="number2"
                        label="اسم المورد"
                        name="number2"
                        placeholder="اسم المورد "
                      />
                      <BaseInputField
                        type="text"
                        id="number3"
                        label="سعر الذهب"
                        name="number3"
                        placeholder="سعر  الذهب"
                      />

                      <div className="col-span-4">
                        <TextAreaField
                          label={"testArea"}
                          id={"testArea"}
                          name={"testArea"}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex items-end justify-end">
                    <Button type="submit">Submit</Button>
                  </div>
                </div>
              </div>
            </Form>
          </Formik>
        </div>
      </>
    </>
  )
}
