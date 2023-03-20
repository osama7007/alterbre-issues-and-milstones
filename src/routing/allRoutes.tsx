import { t } from "i18next"
import { Route, Routes } from "react-router-dom"
import { PermissionCtxProvider } from "../context/auth-and-perm/permissions"
import { Accessories } from "../pages/Accessories"
import { AddEmployee } from "../pages/AddEmployee"
import { AdministrativeStructure } from "../pages/AdministrativeStructure/AdministrativeStructure"
import { Home } from "../pages/Home"
import { Login } from "../pages/Login"
import { Settings } from "../pages/Settings"
import { System } from "../pages/System"
import { Tests } from "../pages/Tests"
import { ErrorPage } from "./ErrorPage"
import { Root } from "./Root"

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
            path="/add-employee"
            element={<AddEmployee title={t("add-employee")} />}
          />
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
