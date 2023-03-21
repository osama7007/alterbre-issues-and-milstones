/////////// IMPORTS
///
import { Form, Formik, FormikValues } from "formik"
import { t } from "i18next"
import { Helmet } from "react-helmet-async"
import { Button } from "../../components/atoms"
import { OuterFormLayout } from "../../components/molecules"
import { Loading } from "../../components/organisms/Loading"
import { PermissionForm } from "../../components/templates/administrativeStructure/PermissionForm"
import { useFetch, useMutate } from "../../hooks"
import { mutateData } from "../../utils/mutateData"
import { InnerForm } from "../../utils/utils-components/InnerForm"
import {
  addAdministrativeSchema,
  permissionGroup_TP,
  Permission_TP
} from "./types-schemas"
///
/////////// Types
///
type AddAdministrativeStructureProps_TP = {
  title: string
}
/////////// HELPER VARIABLES & FUNCTIONS
///

///
export const AddAdministrativeStructure = ({
  title,
}: AddAdministrativeStructureProps_TP) => {
  /////////// VARIABLES
  ///

  ///
  /////////// CUSTOM HOOKS
  ///
  let asyncInitValues: { [key: string]: string } = {
    name: "",
  }

  const {
    data: permissions,
    isError: permissionsError,
    isLoading: permissionsLoading,
    isSuccess: permissionsSuccess,
    failureReason,
    error,
  } = useFetch<permissionGroup_TP[]>({
    queryKey: ["permissions"],
    endpoint: "permissions",
    // select: (permissions) =>
    //   permissions
    //     .filter((permission) => !!permission.routes)
    //     .map((permission) => ({
    //       id: permission.id,
    //       name: permission.name,
    //       front_key: permission.routes ? permission.routes : "",
    //     })),
  })
  permissions?.map((permissionsGroup) =>
    permissionsGroup.permissions?.map(
      (perm) => (asyncInitValues[perm.front_key as keyof Permission_TP] = "")
    )
  )

  const {
    mutate,
    isLoading: isMutating,
    error: rulePostError,
  } = useMutate({
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
  const addAdminStructureHandler = (values: FormikValues) => {
    console.log(`addAdminStructureHandler ~ values:`, values)
    mutate({
      endpointName: "",
      values: {},
    })
  }
  ///
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      {permissionsLoading && <Loading mainTitle="تحميل" subTitle="الصلاحيات" />}
      {permissionsError && <p>{error.message}</p>}

      {permissionsSuccess && (
        <Formik
          onSubmit={addAdminStructureHandler}
          enableReinitialize={true}
          initialValues={asyncInitValues}
          validationSchema={addAdministrativeSchema()}
        >
          {({ values, touched }) => (
            <InnerForm errors={rulePostError?.response.data.data}>
              <Form>
                <OuterFormLayout
                  submitComponent={
                    <Button
                      type="submit"
                      variant="primary"
                      className="mr-auto mt-8"
                    >
                      {t("confirm")}
                    </Button>
                  }
                  header={t("add-administrative-structure")}
                >
                  <PermissionForm permissions={permissions} />
                </OuterFormLayout>
              </Form>
            </InnerForm>
          )}
        </Formik>
      )}
    </>
  )
}
