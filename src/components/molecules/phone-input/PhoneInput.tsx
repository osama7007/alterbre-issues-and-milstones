/////////// IMPORTS
import { useFormikContext } from "formik"
import { default as BasePhoneInput } from "react-phone-number-input"
import flags from "react-phone-number-input/flags"
import "react-phone-number-input/style.css"
import { tv } from "tailwind-variants"
import { FormikError } from "../../atoms"
import { Label } from "../../atoms/Label"
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
  base: "rounded-md border-2 border-transparent focus:border-2 focus:border-mainGreen form-input px-4 py-[.30rem] w-full shadows bg-white",
  variants: {
    error: {
      true: "border-mainRed !rounded-md !border-2",
    },
  },
})
///
export const PhoneInput = ({ label, name, placeholder }: PhoneInputs_TP) => {
  /////////// VARIABLES
  ///
  ///
  /////////// CUSTOM HOOKS
  ///
  const { setFieldValue, errors, touched, handleBlur } = useFormikContext<any>()
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
      <div className=" relative col-span-1 flex flex-col">
        <Label htmlFor={name}>{label}</Label>
        <BasePhoneInput
          onBlur={handleBlur(name)}
          className={phoneInput({
            error: touched[name] && !!errors.phone,
          })}
          flags={flags}
          placeholder={placeholder}
          name={name}
          onChange={(number: number | string | undefined) => {
            setFieldValue(name, number)
          }}
          style={{ direction: "ltr" }}
        />
        <FormikError name={name} />
      </div>
    </>
  )
}
