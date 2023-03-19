/////////// IMPORTS
///
import { createColumnHelper } from "@tanstack/react-table"
import { useFormikContext } from "formik"
import { useMemo, useState } from "react"
import { BaseInputField } from "../components/molecules/formik-fields/BaseInputField"
import { SelectComp } from "../components/molecules/formik-fields/Select"
import { useFetch } from "../hooks/useFetch"
import { initialValues } from "../pages/System"
import { SelectOption_TP } from "../types"
import { TableWithForm } from "./TableWithForm"
///
/////////// Types
///
type ExampleProps_TP = {}
type Person = {
  // ADD THIS IF I NEED ROW INDEX
  index: string
  type: string
  weight: string
  karat: string
  stock: string
  wage: string
  wageTaxes: string
  goldTaxes: string
}
/////////// HELPER VARIABLES & FUNCTIONS
///

const defaultData: Person[] = [
  // EACH OBJECT IS A ROW
  {
    // ADD THIS IF I NEED ROW INDEX
    index: "",
    type: "",
    weight: "",
    karat: "",
    stock: "",
    wage: "",
    wageTaxes: "",
    goldTaxes: "",
  },
]
const columnHelper = createColumnHelper<Person>()

///
export const Example = () => {
  /////////// VARIABLES
  ///
const [data, setData] = useState(() => [...defaultData])
const [selectedKaratOption, setSelectedKaratOption] = useState<SelectOption_TP>()
  const { data: typeSelectOptions, isLoading: isLoadingTypeSelectOptions } =
    useFetch<SelectOption_TP[]>({
      endpoint: "options",
      queryKey: ["options"],
    })

  const { data: karatSelectOptions, isLoading: isLoadingKaratSelectOptions } =
    useFetch<SelectOption_TP[]>({
      endpoint: "karats",
      queryKey: ["karats"],
    })
  const { data: stocks, isLoading: isLoadingStocks } = useFetch<
    { karat: string; value: string }[]
  >({
    endpoint: "stocks",
    queryKey: ["stocks"],
  })

  const { values, errors, touched, setFieldValue } =
    useFormikContext<typeof initialValues>()
  console.log(`Example ~ values:`, values)

  const columns = useMemo(
    () => [
      // ADD THIS IF I NEED ROW INDEX
      columnHelper.accessor((row) => row.index, {
        id: "rowNumber",
        cell: (info) => <i>{info.row.index + 1}</i>,
        header: (XX) => <span>Index</span>,
      }),

      // THE REST
      columnHelper.accessor((row) => row.type, {
        cell: (info) => (
          <SelectComp
            name="type"
            id="type"
            options={typeSelectOptions}
            loading={isLoadingTypeSelectOptions}
            placeholder="select"
            fieldKey="id"
          />
        ),
        id: "type",
        // If we need footer we will add this to every column object
        // footer: (info) => info.column.id,
      }),
      columnHelper.accessor((row) => row.weight, {
        cell: (info) => (
          <BaseInputField id="weight" name="weight" type="text" />
        ),
        id: "weight",
      }),
      columnHelper.accessor((row) => row.karat, {
        cell: (info) => (
          <SelectComp
            value={selectedKaratOption}
            name="karat"
            id="karat"
            options={karatSelectOptions}
            loading={isLoadingKaratSelectOptions || isLoadingStocks}
            placeholder="select"
            fieldKey="id"
            onChange={(option) => {
              setFieldValue("stock", values.karat)
              setSelectedKaratOption(option)
            }}
          />
        ),
        id: "karat",
      }),
      columnHelper.accessor((row) => row.stock, {
        cell: (info) =>
          isLoadingStocks ? (
            "تحميل الأسهم"
          ) : (
            <BaseInputField
              value={values.karat}
              id="stock"
              name="stock"
              type="text"
            />
          ),
        id: "stock",
      }),
    ],
    [
      isLoadingTypeSelectOptions,
      isLoadingKaratSelectOptions,
      isLoadingStocks,
      values.karat,
    ]
  )
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
      <TableWithForm<Person> data={data} setData={setData} columns={columns} />
    </>
  )
}
