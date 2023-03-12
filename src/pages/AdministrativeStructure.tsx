/////////// IMPORTS
///
import { Form, Formik } from "formik"
import { t } from "i18next"
import { Helmet } from "react-helmet-async"
import { Button } from "../components/atoms/buttons/Button"
import { Spinner } from "../components/atoms/UI/Spinner"
import { BaseInputField } from "../components/molecules/formik-fields/BaseInputField"
import { useFetch } from "../hooks/useFetch"
import { useMutate } from "../hooks/useMutate"
import { mutateData } from "../utils/mutateData"
///
/////////// Types
///
type AdministrativeStructureProps_TP = {
  title: string
}

type Permission_TP = {
  id: number
  name: string
  front_key: string
  routes?: string
}
/////////// HELPER VARIABLES & FUNCTIONS
///

///
export const AdministrativeStructure = ({
  title,
}: AdministrativeStructureProps_TP) => {
  /////////// VARIABLES
  ///

  ///
  /////////// CUSTOM HOOKS
  ///

  const {
    data: permissions,
    isError,
    isLoading,
    isSuccess: permissionsSuccess,
    failureReason,
    isFetching,
  } = useFetch<Permission_TP[]>({
    queryKey: ["permissions"],
    endpoint: "hamada2-hassan",
    select: (permissions) =>
      permissions
        .filter((permission) => !!permission.routes)
        .map((permission) => ({
          id: permission.id,
          name: permission.name,
          front_key: permission.routes ? permission.routes : "",
        })),
  })

  console.log(`permissions:`, permissions)

  const { mutate, isLoading: isMutating } = useMutate({
    mutationFn: mutateData,
  })
  ///
  /////////// STATES
  ///

  ///
  /////////// SIDE EFFECTS
  ///

  ///
  /////////// FUNCTIONS | EVENTS | IF CASES
  ///
  const addAdminStructureHandler = () =>
    mutate({
      endpointName: "",
      values: {},
    })
  ///
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <h1>{t("administrative-structure")}</h1>

      <Formik
        onSubmit={addAdminStructureHandler}
        enableReinitialize={true}
        initialValues={{
          name: "",
        }}
      >
        <Form>
          <BaseInputField id="name" label="الإسم" name="name" />

          <Button type="submit" disabled={isMutating}>
            {isMutating ? <Spinner /> : "تأكيد"}
          </Button>
        </Form>
      </Formik>
    </>
  )
}
