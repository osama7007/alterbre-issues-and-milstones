import { useFormikContext } from "formik"
import Select, {
  ActionMeta,
  MultiValue,
  SingleValue,
  Theme,
} from "react-select"
import CreatableSelect from "react-select/creatable"

import makeAnimated from "react-select/animated"
import { SelectOption_TP } from "../../../types"
import { FormikError, Label, Spinner } from "../../atoms"

type Select_TP = {
  value: SelectOption_TP | undefined
  label?: string
  name?: string
  id: string
  isMulti?: boolean
  required?: boolean
  placeholder?: string
  loadingPlaceholder?: string
  options: SelectOption_TP[] | undefined
  loading?: boolean
  onChange?: (
    option: SingleValue<SelectOption_TP> | MultiValue<SelectOption_TP>
  ) => void | undefined
  creatable?: boolean
  formatCreateLabel?: (inputValue: string) => string
  fieldKey?: keyof SelectOption_TP
  isDisabled?: boolean
}

export const SelectComp = ({
  label,
  name,
  id,
  isMulti,
  required,
  placeholder,
  loadingPlaceholder,
  options,
  loading,
  onChange,
  isDisabled,
  creatable = false,
  formatCreateLabel,
  fieldKey = "value",
  ...props
}: Select_TP) => {
  const animatedComponents = makeAnimated()
  const { setFieldValue, setFieldTouched, errors, touched } = useFormikContext<{
    [key: string]: any
  }>()
  var selectProps = {
    ...props,
    components: {
      ...animatedComponents,
      LoadingIndicator: () => <Spinner className="ml-2" size="medium" />,
    },
    id: id,
    name: name,
    isMulti: isMulti,
    required: required,
    placeholder: loading ? loadingPlaceholder : placeholder,
    options: options,
    isLoading: loading && !isDisabled,
    isDisabled: loading || isDisabled,
    classNames: {
      control: ({ menuIsOpen }: { menuIsOpen: boolean }) =>
        `!rounded-md !shadow-none !shadow-md !border-2 ${
          touched[name as string] && errors[name as string]
            ? " !border-mainRed"
            : ""
        } 
                  ${menuIsOpen && "!border-mainGreen"}

                  `,
      dropdownIndicator: () => `!text-mainGreen`,
      valueContainer: () => `!overflow-x-auto !overflow-y-hidden scrollbar`,
    },
    theme: (theme: Theme) => ({
      ...theme,
      borderRadius: 5,
      colors: {
        ...theme.colors,
        neutral80: "#295E56",
        primary25: "#e9eeed",
        primary: "#295E56",
      },
    }),
    onBlur: () => {
      if (setFieldTouched) {
        setFieldTouched(name as string, true)
      }
    },
    onChange: (
      option: SingleValue<SelectOption_TP> | MultiValue<SelectOption_TP>,
      actionMeta: ActionMeta<SelectOption_TP>
    ) => {
      if (setFieldValue) {
        setFieldValue(
          name as string,
          isMulti
            ? (option as MultiValue<SelectOption_TP>).map(
                (option) => option[fieldKey]
              )
            : (option as SelectOption_TP)[fieldKey],

          true
        )
      }
      if (onChange) {
        onChange(option)
      }
    },
  }

  return (
    <>
      <div className="col-span-1 flex w-full flex-col gap-2">
        {label && <Label htmlFor={id}>{label}</Label>}
        <div className=" relative col-span-1 flex flex-col bg-white">
          {creatable ? (
            <CreatableSelect
              {...selectProps}
              formatCreateLabel={formatCreateLabel}
            />
          ) : (
            <Select {...selectProps} />
          )}
          <FormikError name={name as string} />
        </div>
      </div>
    </>
  )
}
