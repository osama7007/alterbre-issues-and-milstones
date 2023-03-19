/////////// IMPORTS
///
import { Form, Formik, FormikValues } from "formik"
import { t } from "i18next"
import { Helmet } from "react-helmet-async"
import { Button } from "../../components/atoms/buttons/Button"
import { HeadBase } from "../../components/molecules/card/CardHeader"
import { Spinner } from "../../components/atoms/UI/Spinner"
import { BaseInputField } from "../../components/molecules/formik-fields/BaseInputField"
import { Loading } from "../../components/organisms/Loading"
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
        <div className="flex flex-col gap-4">
          <div className="">
            <h3 className="text-2xl font-bold">
              {t("administrative-structure")}
            </h3>
          </div>

          <Formik
            onSubmit={addAdminStructureHandler}
            enableReinitialize={true}
            initialValues={asyncInitValues}
            validationSchema={schema()}
          >
            {({ values, touched }) => (
              <InnerForm errors={errors?.response.data.data}>
                <Form>
                  <div className="flex flex-col gap-6 rounded-xl bg-lightGreen p-6">
                    <div className="flex flex-col gap-6 mt-4 rounded-xl bg-flatWhite py-6 px-8">
                      <div className=" grid grid-cols-4 ">
                        <BaseInputField
                          placeholder={"حماده"}
                          labelProps={{ className: "mb-1" }}
                          value={values.name}
                          type="text"
                          id="name"
                          label="الإسم"
                          name="name"
                        />
                      </div>
                      <div className="flex flex-col gap-1">
                        <h4 className="flex items-center justify-center text-2xl underline  underline-offset-2 decoration-1 ">
                          الصلاحيات
                        </h4>

                        <div className=" flex flex-col gap-2 justify-center ">
                          {permissions.map(({ id, name, permissions }) => (
                            <PermissionGroup
                              key={id}
                              name={name}
                              permissions={permissions}
                            />
                          ))}{" "}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-end justify-end">
                      <Button type="submit" loading={isMutating}>
                        تأكيد
                      </Button>{" "}
                    </div>
                  </div>
                </Form>
              </InnerForm>
            )}
          </Formik>
        </div>
      )}
    </>
  )
}
