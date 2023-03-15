/////////// IMPORTS
import { ErrorMessage, useFormikContext } from "formik"
import PhoneInput from "react-phone-number-input"
import { useState , useRef } from "react"
import flags from "react-phone-number-input/flags"
import { Label } from "../../atoms/Label"
import 'react-phone-number-input/style.css'
import { tv } from "tailwind-variants"
///
/////////// Types
///
type PhoneInputs_TP = {
  label: string
  name: "phone"
  placeholder: string
}
/////////// HELPER VARIABLES & FUNCTIONS
///
const phoneInput = tv({
    base: "rounded-md border-2 border-transparent focus:!border-2 focus:!border-mainGreen form-input px-4 py-[.30rem] w-full shadows bg-white",
    variants: {
        errors: {
        true: "border-mainRed",
      },
      isTouched:{
        true: "!rounded-md !border-2 !border-mainRed"
      }
    },
  })
///
export const PhoneInputs = ({ label, name, placeholder }: PhoneInputs_TP) => {
  /////////// VARIABLES
  ///
  ///
  /////////// CUSTOM HOOKS
  ///
  const { setFieldValue, errors } = useFormikContext<any>()
  ///
  /////////// STATES
  ///
  const [isTouched, setIsTouched] = useState(false)
  ///
  /////////// SIDE EFFECTS
  ///
  /////////// FUNCTIONS | EVENTS | IF CASES
  ///

  ///
  return (
    <>
      <div className=" relative col-span-1 flex flex-col">
      <Label htmlFor={name}>{label}</Label>
        <PhoneInput
          onBlur={() => setIsTouched(true)}
          className={phoneInput({
            errors:!!errors.phone,
            isTouched
          })}
          flags={flags}
          placeholder={placeholder}
          name={name}
          onChange={(number: number | string | undefined) => {
            setFieldValue(name, number)
          }}
          style={{ direction: "ltr" }}
        />
        <ErrorMessage component="p" className="text-red-500 absolute -bottom-6 w-full"
        name={name}
      />
      </div>
    </>
  )
}
