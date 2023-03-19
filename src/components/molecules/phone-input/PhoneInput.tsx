/////////// IMPORTS
import { ErrorMessage, useFormikContext } from "formik"
import PhoneInput from "react-phone-number-input"
import { useState, useRef } from "react"
import flags from "react-phone-number-input/flags"
import { Label } from "../../atoms/Label"
import "react-phone-number-input/style.css"
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
    isTouched: {
      true: "!rounded-md !border-2 !border-mainRed",
    },
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
  console.log(errors)
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
          onBlur={() => setIsTouched(!!errors.phone)}
          className={phoneInput({
            errors:isTouched,
            isTouched,
          })}
          flags={flags}
          placeholder={placeholder}
          name={name}
          onChange={(number: number | string | undefined) => {
            setFieldValue(name, number)
            setIsTouched(!!errors.phone)
          }}
          style={{ direction: "ltr" }}
        />
        {(!!errors.phone ) ? (
            <>
              {(isTouched ) &&  <p className="text-mainRed">{errors.phone.toString()}</p>}
              {!isTouched && <ErrorMessage name={name} className="text-mainRed" component="p"/>}
            </>
        ) :
        isTouched && <p className="text-mainRed">{errors.phone ? errors.phone.toString() : ""}</p>
    }
      </div>
    </>
  )
}
