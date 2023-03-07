/////////// IMPORTS
///
import { RouterProvider } from "react-router-dom"
import { useIsRTL } from "./hooks/useIsRTL"
import { router } from "./routing/allRoutes"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import { ToastContainer } from "react-toastify"
import { NumberFormatterProvider } from "./context/settings/number-formatter"
import {useLayoutEffect} from 'react'
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
    <NumberFormatterProvider>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} position={"bottom-right"} />
      <ToastContainer rtl={isRTL} />
    </NumberFormatterProvider>
  )
}
export default App
