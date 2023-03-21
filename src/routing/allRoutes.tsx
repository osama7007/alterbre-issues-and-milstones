import { t } from "i18next"
import { Route, Routes } from "react-router-dom"
import { PermissionCtxProvider } from "../context/auth-and-perm/permissions"
import { Accessories } from "../pages/Accessories"
import { Home } from "../pages/Home"
import { Login } from "../pages/Login"
import { Settings } from "../pages/Settings"
import { System } from "../pages/System"
import { Tests } from "../pages/Tests"
import { AddEmployee } from "../pages/employees/AddEmployee"
import { ErrorPage } from "./ErrorPage"
import { Root } from "./Root"
import { Employees } from "../pages/employees/Employees"
import { OneEmployee } from "../pages/employees/OneEmployee"
import { AddAdministrativeStructure } from "../pages/AdministrativeStructure/AddAdministrativeStructure"
import { AdministrativeStructure } from "../pages/AdministrativeStructure/AdministrativeStructure"

export const AllRoutesProvider = () => {
  return (
    <PermissionCtxProvider userPermissions={["add.city", "view.cities"]}>
      <Routes>
        <Route path="/" element={<Root />} errorElement={<ErrorPage />}>
          <Route index element={<Home title={t("home")} />} />
          <Route
            path="/settings"
            element={<Settings title={t("settings")} />}
          />
          <Route path="/system" element={<System title={t("system")} />} />
          <Route
            path="/administrative-structure"
            element={
              <AdministrativeStructure title={t("administrative-structure")} />
            }
          />
          <Route
            path="/add-administrative-structure"
            element={
              <AddAdministrativeStructure
                title={t("add-administrative-structure")}
              />
            }
          />
          <Route
            path="/add-employee"
            element={<AddEmployee title={t("add-employee")} />}
          />
          <Route
            path="/employees"
            element={<Employees title={t("employees")} />}
          />
          <Route path="/employees/:employeeID" element={<OneEmployee />} />
          {/* test */}
          <Route
            path="/accessories"
            element={<Accessories title={t("Stones")} />}
          />
        </Route>
        <Route path="/login" element={<Login title={t("login")} />} />
        <Route path="/tests" element={<Tests />} />
      </Routes>
    </PermissionCtxProvider>
  )
}
