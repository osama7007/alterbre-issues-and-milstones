/////////// IMPORTS
import { useFormikContext } from "formik"
import PhoneInput from "react-phone-number-input"
import { Label } from "../../atoms"

///
/////////// Types
///
type PhoneInputs_TP = {
  flag: any
  label: string
  name: string
  placeholder: string
}
/////////// HELPER VARIABLES & FUNCTIONS
///

///
export const PhoneInputComp = ({
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
  const { setFieldValue, errors, touched } = useFormikContext<{
    [key: string]: any
  }>()
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
        {label && <Label htmlFor={name}>{label}</Label>}
        <div className=" relative col-span-1 flex flex-col bg-white">
          <PhoneInput
            className={
              touched[name] && !!errors[name]
                ? "!rounded-md !border-2 !border-mainRed"
                : ""
            }
            flags={flag}
            placeholder={placeholder}
            name={name}
            onChange={(number: number | string | undefined) => {
              setFieldValue(name, number)
            }}
            style={{ direction: "ltr" }}
          />
          {touched[name] && !!errors[name] && (
            <p className="text-xs text-mainRed">{errors[name]?.toString()}</p>
          )}
        </div>
      </div>
    </>
  )
}
