/////////// IMPORTS
///
import { useContext, useEffect } from "react"
import { Helmet } from "react-helmet-async"
import { authCtx } from "../context/auth-and-perm/auth"
import { useNavigate } from "react-router-dom"
import { LoginForm } from "../components/templates/LoginForm"
///
/////////// Types
///
type LoginProps_TP = {
  title: string
}

/////////// HELPER VARIABLES & FUNCTIONS
///

///
export const Login = ({ title }: LoginProps_TP) => {
  /////////// VARIABLES
  ///

  ///
  /////////// CUSTOM HOOKS
  ///
  const navigate = useNavigate()
  const { isLoggedIn } = useContext(authCtx)
  ///
  /////////// STATES
  ///

  ///
  /////////// SIDE EFFECTS
  ///
  useEffect(() => {
    if (isLoggedIn) {
      navigate("/", { replace: true })
    }
  }, [])
  ///
  /////////// FUNCTIONS | EVENTS | IF CASES
  ///

  ///
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>

      <LoginForm />
    </>
  )
}
