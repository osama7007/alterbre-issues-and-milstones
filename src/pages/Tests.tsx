import { Form, Formik } from "formik"
import { useState } from "react"
import { Helmet } from "react-helmet-async"
import * as Yup from "yup"
import { Button } from "../components/atoms"
import { Select } from "../components/molecules"

const NewSelectOptionComponent = ({
  value,
  onAdd,
  setSelectOptions,
}: {
  value: string
  onAdd: (value: string) => void
  setSelectOptions?: (options: any[]) => void
}) => {
  return (
    <div className="flex items-center justify-between gap-2">
      <span>{value}</span>
      <Button
        action={() => {
          onAdd(value)
        }}
      >
        Add
      </Button>
    </div>
  )
}

export const Tests = () => {
  const [options, setOptions] = useState([
    { id: 1, value: "1", label: "1" },
    { id: 2, value: "2", label: "2" },
    { id: 3, value: "3", label: "3" },
  ])
  return (
    <>
      <Helmet>
        <title>Tests</title>
      </Helmet>
      <Formik
        initialValues={{
          select: "1",
        }}
        validationSchema={Yup.object().shape({
          select: Yup.array().of(Yup.string()),
        })}
        onSubmit={(values) => {
          console.log(values)
        }}
      >
        <Form>
          <Select
            label="Select"
            name="select"
            id="select"
            isMulti={true}
            required={false}
            placeholder="Select"
            loadingPlaceholder="Loading..."
            options={options}
            loading={false}
            creatable={true}
            // onSimpleCreate={(value) => {
            //   setOptions([
            //     ...options,
            //     { id: options.length + 1, value, label: value },
            //   ])
            // }}
            CreateComponent={NewSelectOptionComponent}
            onComplexCreate={(value) => {
              setOptions([
                ...options,
                { id: options.length + 1, value, label: value },
              ])
            }}
            setOptions={setOptions}
          />
        </Form>
      </Formik>
    </>
  )
}
