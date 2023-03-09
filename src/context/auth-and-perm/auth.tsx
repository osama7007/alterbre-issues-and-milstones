import { createContext, ReactNode, useState, useEffect } from "react"
import Cookies from "js-cookie"
import { notify } from "../../utils/toast"
import { useMutation } from "@tanstack/react-query"
import { mutateData, MutateDataParameters_TP } from "../../utils/mutateData"
import { useNavigate, useNavigation } from "react-router-dom"
///
/////////TYPES
type LoginCredintials_TP = {
  username: string
  password: string
}
type authCtx_TP = {
  isLoggedIn: boolean
  logInHandler: (credintials: LoginCredintials_TP) => void
  logOutHandler: () => void
}
export const authCtx = createContext<authCtx_TP>({
  isLoggedIn: false,
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
  const { mutate: loginMutate } = useMutation({
    mutationFn: (data: MutateDataParameters_TP) =>
      mutateData<ResponseData_TP>(data),
    onSuccess: (data) => {
      if (data) {
        Cookies.set("auth", data.token)
        setIsLoggedIn(true)
        notify("success", "Welcome")
        console.log(`Login ~ data:`, data)
        navigate("/")
      }
    },
    onError: (err) => {
      notify("error")
    },
  })

  // LOGOUT
  const { mutate: logoutMutate } = useMutation({
    mutationFn: (data: MutateDataParameters_TP) => mutateData(data),
    onSuccess: (data) => {
      Cookies.remove("auth")
      setIsLoggedIn(false)
      notify("success", "Waiting for you!")
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

  const logInHandler = (credintials: LoginCredintials_TP) => {
    console.log(`logInHandler ~ credintials:`, credintials)
    loginMutate({
      endpointName: "api/login",
      values: { ...credintials, type: "ios", device_token: "aaa" },
    })
  }
  const logOutHandler = () => {
    logoutMutate({
      endpointName: "/api/logout",
    })
  }
  ///
  return (
    <authCtx.Provider
      value={{
        isLoggedIn,
        logInHandler,
        logOutHandler,
      }}
    >
      {children}
    </authCtx.Provider>
  )
}
