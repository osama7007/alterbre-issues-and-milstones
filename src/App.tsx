/////////// IMPORTS
///
import { AllRoutesProvider } from "./routing/allRoutes"
import { useIsRTL } from "./hooks/useIsRTL"
// import { router } from "./routing/allRoutes"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import { ToastContainer } from "react-toastify"
import { NumberFormatterProvider } from "./context/settings/number-formatter"
import { useLayoutEffect } from "react"
import "react-toastify/dist/ReactToastify.css"
import { AuthCtxProvider } from "./context/auth-and-perm/auth"
///
/////////// Types
///

/////////// HELPER VARIABLES & FUNCTIONS
///

///
const App = () => {
  /////////// VARIABLES
  ///

  ///
  /////////// CUSTOM HOOKS
  ///
  const isRTL = useIsRTL()
  ///
  /////////// STATES
  ///

  ///
  /////////// SIDE EFFECTS
  ///
  useLayoutEffect(() => {
    document.documentElement.dir = isRTL ? "rtl" : "ltr"
    document.documentElement.lang = isRTL ? "ar" : "en"
  }, [])
  /////////// FUNCTIONS | EVENTS | IF CASES
  ///

  ///
  return (
    <>
      <AllRoutesProvider />
      <ToastContainer rtl={isRTL} />
    </>
  )
}
export default App
