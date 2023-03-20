/////////// IMPORTS
///
import { Form, Formik, FormikValues } from "formik"
import { Helmet } from "react-helmet-async"
import { PermissionForm } from "../../components/PermissionForm"
import { OuterFormLayout } from "../../components/molecules/OuterFormLayout"
import { Loading } from "../../components/organisms/Loading"
import { useFetch, useMutate } from "../../hooks"
import { mutateData } from "../../utils/mutateData"
import { InnerForm } from "../../utils/utils-components/InnerForm"
import { Permission_TP, permissionGroup_TP, schema } from "./types-schemas"
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

  //// 
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
    permissionsGroup.permissions?.map(
      (perm) => (asyncInitValues[perm.front_key as keyof Permission_TP] = "")
    )
  )


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
            validationSchema={schema()}
          >
            {({ values, touched }) => (
              <InnerForm errors={rulePostError?.response.data.data}>
                <Form>
                 <OuterFormLayout header="الهيكل الإداري">
                 <PermissionForm permissions={permissions}/>
                 </OuterFormLayout>
                </Form>
              </InnerForm>
            )}
          </Formik>
      )}
    </>
  )
}