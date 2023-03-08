/////////// IMPORTS
///
//import styles from './Settings.module.css'
import { ChangeEvent, useContext, useEffect, useState } from "react"
import { Helmet } from "react-helmet-async"
import { useTranslation } from "react-i18next"
import { Button } from "../components/atoms/buttons/Button"
import { Spinner } from "../components/atoms/UI/Spinner"
import { numberFormatterCtx } from "../context/settings/number-formatter"
import { useFetch } from "../hooks/useFetch"
import { useIsRTL } from "../hooks/useIsRTL"
import { notify } from "../utils/toast"
///
/////////// Types
///
type SettingsProps_TP = {
  title: string
}
/////////// HELPER VARIABLES & FUNCTIONS
///

///
export const Settings = ({ title }: SettingsProps_TP) => {
  /////////// VARIABLES
  ///

  ///
  /////////// CUSTOM HOOKS
  ///
  const isRTL = useIsRTL()

  const { digits_count, changeDigitsCount, digits_countLoading } =
  useContext(numberFormatterCtx)
  ///
  /////////// STATES
  ///
  const [digitsCount, setDigitsCount] = useState(digits_count)
  ///
  /////////// SIDE EFFECTS
  ///
  const { i18n } = useTranslation()
  useEffect(() => {
    document.documentElement.dir = isRTL ? "rtl" : "ltr"
    document.documentElement.lang = isRTL ? "ar" : "en"
  }, [isRTL])

  useEffect(() => {
    if(!!digits_count){
      setDigitsCount(digits_count)
    }
  }, [digits_count])

  ///
  /////////// IF CASES
  ///

  ///
  /////////// EVENTS
  ///

  ///
  /////////// FUNCTIONS
  ///
  const toggleLang = () => {
    i18n.changeLanguage(isRTL ? "en" : "ar")
  }

  const confirmDigitsCount = () => {
    console.log("digitsCount", digitsCount)
    
    if (digitsCount === digits_count) {
      notify("error", "ادخل قيمة مختلفة")
      return
    }
    changeDigitsCount(digitsCount)
    // TODO: POST
  }
  const changeDigitsCountHandler = (e: ChangeEvent<HTMLInputElement>) =>
    setDigitsCount(+e.target.value)
  ///
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <button type="button" onClick={toggleLang}>
        change Language
      </button>
      <div>
        <label htmlFor="digitsCount">عدد الأرقام العشرية</label>
        <input
          id="digitsCount"
          type="number"
          value={digitsCount}
          onChange={changeDigitsCountHandler}
        />
        <Button disabled={digits_countLoading} action={confirmDigitsCount}>
          {digits_countLoading ? <Spinner /> :" تغيير الأرقام"}
        </Button>
      </div>
    </>
  )
}