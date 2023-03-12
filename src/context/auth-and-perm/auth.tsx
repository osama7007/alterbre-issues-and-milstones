import { createContext, ReactNode, useState } from "react"
import Cookies from "js-cookie"
import { notify } from "../../utils/toast"
import { useMutation } from "@tanstack/react-query"
import { mutateData } from "../../utils/mutateData"
import { useNavigate } from "react-router-dom"
import { MutateDataParameters_TP } from "../../types"
import { useMutate } from "../../hooks/useMutate"
///
/////////TYPES
type LoginCredentials_TP = {
  username: string
  password: string
}
type authCtx_TP = {
  isLoggedIn: boolean
  isLoggingIn: boolean
  isLoggingOut: boolean
  logInHandler: (credentials: LoginCredentials_TP) => void
  logOutHandler: () => void
}
export const authCtx = createContext<authCtx_TP>({
  isLoggedIn: false,
  isLoggingIn: false,
  isLoggingOut: false,
  logInHandler: () => {},
  logOutHandler: () => {},
})

export const AuthCtxProvider = ({ children }: { children: ReactNode }) => {
  /////////// VARIABLES
  ///
  const initialAuth = Cookies.get("auth")
  ///
  /////////// STATES
  ///
  const [isLoggedIn, setIsLoggedIn] = useState(!!initialAuth)
  //   TODO: i can navigate user here if he is not logged in
  ///
  /////////// CUSTOM HOOKS
  ///
  const navigate = useNavigate()

  type ResponseData_TP = { token: string }

  // LOGIN
  const { mutate: loginMutate, isLoading: isLoggingIn } =
    useMutate<ResponseData_TP>({
      mutationFn: mutateData,
      onSuccess: (data) => {
        if (data) {
          Cookies.set("auth", data.token)
          setIsLoggedIn(true)
          notify("success", "Welcome")
          navigate("/")
        }
      },
      onError: (err) => {
        notify("error")
      },
    })

  // LOGOUT
  const { mutate: logoutMutate, isLoading: isLoggingOut } =
    useMutate<ResponseData_TP>({
      mutationFn: mutateData,
      onSuccess: (data) => {
        Cookies.remove("auth")
        setIsLoggedIn(false)
        notify("success", "Good bye, Waiting for you!")
      },
      onError: (err) => {
        notify("error")
      },
    })
  ///
  /////////// SIDE EFFECTS
  ///

  ///
  /////////// FUNCTIONS | EVENTS | IF CASES
  ///

  const logInHandler = (credentials: LoginCredentials_TP) => {
    loginMutate({
      endpointName: "api/login",
      values: { ...credentials, type: "ios", device_token: "aaa" },
    })
  }
  const logOutHandler = () => {
    logoutMutate({
      endpointName: "api/logout",
    })
  }
  ///
  return (
    <authCtx.Provider
      value={{
        isLoggedIn,
        logInHandler,
        logOutHandler,
        isLoggingIn,
        isLoggingOut,
      }}
    >
      {children}
    </authCtx.Provider>
  )
}
