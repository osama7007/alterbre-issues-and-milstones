import { useMutation } from "@tanstack/react-query"
import { createContext, ReactNode, useState, Context } from "react"
import { useFetch } from "../../hooks/useFetch"
import { mutateData } from "../../utils/mutateData"
import { notify } from "../../utils/toast"

type numberFormatter_TP = {
  digits_count: number
  changeDigitsCount: (digit: number) => void
  formatNumber: (digit: number | string) => string
  digits_countLoading: boolean
}
export const numberFormatterCtx = createContext<numberFormatter_TP>({
  digits_count: 2,
  changeDigitsCount: (digit: number) => {},
  formatNumber: (digit: number | string) => "",
  digits_countLoading: false,
})

export const NumberFormatterProvider = ({
  children,
}: {
  children: ReactNode
}) => {
  /////////// VARIABLES
  ///
  let initialDigitsCount: number = +localStorage.digits_count || 2
  ///
  /////////// STATES
  ///
  const [digits_count, setDigits_count] = useState(initialDigitsCount)
  ///
  /////////// CUSTOM HOOKS
  ///
  type Setting_TP = {
    value: number
  }

  const {
    data: digits_countData,
    isError,
    isLoading,
    isSuccess: digits_countFetchSuccess,
    failureReason,
    isFetching,
    refetch,
  } = useFetch<Setting_TP>({
    endpoint: "/company/api/v1/company_settings/1",
    queryKey: ["digits_count"],
    select: (digits_countObj) => ({ value: +digits_countObj.value }),
    onSuccess: (digits_count) => {
      setDigits_count(digits_count.value)
      localStorage.digits_count = digits_count.value
    },
  })

  const {
    mutate,
    isLoading: digits_countLoading,
    isSuccess: digits_countPostSuccess,
    error: errorQuery,
  } = useMutation({
    mutationFn: mutateData,
    onError: (err) => console.log(err),
    onSuccess: (data) => {
      refetch()
      notify()
    },
  })

  const changeDigitsCount = (digit: number) => {
    mutate({
      endpointName: "/company/api/v1/company_settings/1",
      values: {
        key: "digits_count",
        value: digit,
      },
      method: "put",
    })
    localStorage.digits_count = digits_count
    setDigits_count(digits_count)
  }

  // Number formatter
  const formatNumber = (num: number | string) => {
    const fixedNum = (+num).toFixed(digits_count)
    const formattedNum = new Intl.NumberFormat("en-EG", {
      style: "decimal",
      notation: "standard",
      minimumFractionDigits: digits_count,
    }).format(+fixedNum)
    return formattedNum
  }

  return (
    <numberFormatterCtx.Provider
      value={{
        digits_count,
        changeDigitsCount,
        digits_countLoading,
        formatNumber,
      }}
    >
      {children}
    </numberFormatterCtx.Provider>
  )
}
