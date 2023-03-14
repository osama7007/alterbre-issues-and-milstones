/////////// IMPORTS
///
import { AxiosError } from "axios"
import { Form, Formik, FormikValues } from "formik"
import { t } from "i18next"
import { Helmet } from "react-helmet-async"
import { Button } from "../../components/atoms/buttons/Button"
import { Spinner } from "../../components/atoms/UI/Spinner"
import { BaseInputField } from "../../components/molecules/formik-fields/BaseInputField"
import { useFetch } from "../../hooks/useFetch"
import { useMutate } from "../../hooks/useMutate"
import { CError_TP } from "../../types"
import { mutateData } from "../../utils/mutateData"
import { InnerForm } from "../../utils/utils-components/InnerForm"
import { PermissionGroup } from "./PermissionGroup"
import { permissionGroup_TP, Permission_TP, schema } from "./types-schemas"
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

  const {
    mutate,
    isLoading: isMutating,
    error: rulePostError,
  } = useMutate({
    mutationFn: mutateData,
  })

  let asyncInitValues: { [key: string]: string } = {
    name: "",
  }
  permissions?.map((permissionsGroup) =>
    permissionsGroup.permissions.map(
      (perm) => (asyncInitValues[perm.front_key as keyof Permission_TP] = "")
    )
  )
  const errors = rulePostError as CError_TP | null
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

      {permissionsSuccess && (
        <>
          <h1>{t("administrative-structure")}</h1>

          <Formik
            onSubmit={addAdminStructureHandler}
            enableReinitialize={true}
            initialValues={asyncInitValues}
            validationSchema={schema()}
          >
            {({ values, touched }) => (
              <InnerForm errors={errors?.response.data.data}>
                <Form>
                  <BaseInputField
                    value={values.name}
                    type="text"
                    labelProps={{ className: "mb-3" }}
                    id="name"
                    label="الإسم"
                    name="name"
                  />

                  {permissions.map(({ id, name, permissions }) => (
                    <PermissionGroup
                      key={id}
                      name={name}
                      permissions={permissions}
                    />
                  ))}

                  <Button type="submit" loading={isMutating}>
                    تأكيد
                  </Button>
                </Form>
              </InnerForm>
            )}
          </Formik>
        </>
      )}
    </>
  )
}
