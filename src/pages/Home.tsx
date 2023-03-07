/////////// IMPORTS
///
//import classes from './Home.module.css'
import { Helmet } from "react-helmet-async"
import { AddClassComp } from "../components/AddClassComp"
///
/////////// Types
///
type HomeProps_TP = {
  title: string
}
/////////// HELPER VARIABLES & FUNCTIONS
///

///
export const Home = ({ title }: HomeProps_TP) => {
  /////////// VARIABLES
  ///

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
  /////////// IF CASES
  ///

  ///
  /////////// EVENTS
  ///

  ///
  /////////// FUNCTIONS
  ///

  ///
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <h1>لوحة التحكم</h1>
      
    </>
  )
}
