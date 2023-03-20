import { useFormikContext } from "formik"
import { ChangeEvent, useState } from "react"
import Select, {
  ActionMeta,
  MultiValue,
  SingleValue,
  Theme,
} from "react-select"
import makeAnimated from "react-select/animated"
import CreatableSelect from "react-select/creatable"
import { SelectOption_TP } from "../../../types"
import { FormikError, Label, Spinner } from "../../atoms"
import { Modal } from "../Modal"

type Select_TP = {
  value?: SelectOption_TP | undefined
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
  onSimpleCreate?: (inputValue: string) => void
  onComplexCreate?: (inputValue: string) => void
  CreateComponent?: ({
    value,
    onAdd,
    setSelectOptions,
  }: {
    value: string
    onAdd: (value: string) => void
    setSelectOptions?: (options: any[]) => void
  }) => JSX.Element
  setOptions?: (options: any[]) => void
}

const selectTheme = (theme: Theme) => ({
  ...theme,
  borderRadius: 5,
  colors: {
    ...theme.colors,
    neutral80: "#295E56",
    primary25: "#e9eeed",
    primary: "#295E56",
  },
})

const selectClassNames = (touched: boolean, error: boolean) => ({
  control: ({ menuIsOpen }: { menuIsOpen: boolean }) =>
    `!rounded-md !shadow-none !shadow-md !border-2 ${
      touched && error ? " !border-mainRed" : ""
    } 
                  ${menuIsOpen && "!border-mainGreen"}

                  `,
  dropdownIndicator: () => `!text-mainGreen`,
  valueContainer: () => `!overflow-x-auto !overflow-y-hidden scrollbar`,
})

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
  onSimpleCreate,
  CreateComponent,
  onComplexCreate,
  setOptions,
  ...props
}: Select_TP) => {
  const animatedComponents = makeAnimated()
  const { setFieldValue, errors, touched, handleBlur } = useFormikContext<{
    [key: string]: any
  }>()
  const [createModalOpen, setCreateModalOpen] = useState(false)
  const [createValue, setCreateValue] = useState("")
  const handleCreate = (inputValue: string) => {
    if (onSimpleCreate) {
      onSimpleCreate(inputValue)
    } else if (CreateComponent) {
      setCreateModalOpen(true)
      setCreateValue(inputValue)
    }
  }

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
    classNames: selectClassNames(
      !!touched[name as string],
      !!errors[name as string]
    ),
    theme: selectTheme,
    onBlur: handleBlur(name) as (e: ChangeEvent) => void,
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
        <div className="relative col-span-1 flex flex-col">
          {creatable ? (
            <>
              <CreatableSelect
                {...selectProps}
                formatCreateLabel={formatCreateLabel}
                onCreateOption={handleCreate}
              />
              {CreateComponent && (
                <Modal
                  title="Create new option"
                  isOpen={creatable && createModalOpen}
                  onClose={() => {
                    setCreateModalOpen(false)
                  }}
                >
                  {
                    <CreateComponent
                      onAdd={(value) => {
                        onComplexCreate && onComplexCreate(value)
                        setCreateModalOpen(false)
                      }}
                      value={createValue}
                      setSelectOptions={setOptions}
                    />
                  }
                </Modal>
              )}
            </>
          ) : (
            <Select {...selectProps} />
          )}
          <FormikError name={name as string} />
        </div>
      </div>
    </>
  )
}
