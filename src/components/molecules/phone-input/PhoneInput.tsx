/////////// IMPORTS
import {
    ErrorMessage,
    FormikErrors,
    FormikSharedConfig,
    FormikTouched,
    useFormikContext
  } from "formik"
  import PhoneInput from "react-phone-number-input"
  import { Label } from "../../atoms/Label"
  
  ///
  /////////// Types
  ///
  type PhoneInputs_TP = {
    error: FormikErrors<any>
    touched: FormikTouched<any>
    flag: any
    label: string
    name: string
    placeholder: string
  }
  /////////// HELPER VARIABLES & FUNCTIONS
  ///
  
  ///
  export const PhoneInputComp = ({
    error,
    touched,
    flag,
    label,
    name,
    placeholder,
  }: PhoneInputs_TP) => {
    /////////// VARIABLES
    ///
    ///
    /////////// CUSTOM HOOKS
    ///
    const { setFieldValue } = useFormikContext<FormikSharedConfig>()
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
      <>
        <div className="col-span-1 flex w-full flex-col gap-2">
          {label && (
                <Label  htmlFor={name}>
                    {label}
                </Label>
          )}
          <div className=" relative col-span-1 flex flex-col bg-white">
            <PhoneInput
              className={
                touched && error
                  ? "globalInputs !rounded-md !border-2 !border-mainRed"
                  : "globalInputs"
              }
              flags={flag}
              placeholder={placeholder}
              name={name}
              onChange={(number: number | string |undefined) => {
                setFieldValue(name, number)
              }}
              style={{ direction: "ltr" }}
            />
           <ErrorMessage name={name} component="p" className="text-xs text-red-500"/>
          </div>
        </div>
      </>
    )
  }
  
