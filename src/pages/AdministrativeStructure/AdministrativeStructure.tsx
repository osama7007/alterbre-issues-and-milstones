/////////// IMPORTS
///
import { t } from "i18next"
import { Helmet } from "react-helmet-async"
import { useNavigate } from "react-router-dom"
import { Button } from "../../components/atoms"
import { OuterFormLayout } from "../../components/molecules/OuterFormLayout"
///
/////////// Types
///
type AdministrativeStructureProps_TP = {
  title: string
}
/////////// HELPER VARIABLES & FUNCTIONS
///

///
export const AdministrativeStructure = ({
  title,
}: AdministrativeStructureProps_TP) => {
  /////////// VARIABLES
  ///
  const navigate = useNavigate()
  const AddAdministrative = (
    <Button action={() => navigate("/add-administrative-structure")}>
      {t("add")}
    </Button>
  )
  ///
  /////////// CUSTOM HOOKS
  ///

  ////

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
      <Helmet>
        <title>{title}</title>
      </Helmet>

      <OuterFormLayout
        leftComponent={AddAdministrative}
        header="الهيكل الإداري"
      >
        {/* TABLE */}
      </OuterFormLayout>
    </>
  )
}
