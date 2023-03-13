import { Route, Routes } from "react-router-dom"
import { ErrorPage } from "./ErrorPage"
import { Root } from "./Root"
import { t } from "i18next"
import { Settings } from "../pages/Settings"
import { Home } from "../pages/Home"
import { Login } from "../pages/Login"
import { PermissionCtxProvider } from "../context/auth-and-perm/permissions"
import { Stones } from "../pages/Stones"
import { AdministrativeStructure } from "../pages/AdministrativeStructure/AdministrativeStructure"
import { System } from "../pages/System"

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
          {/* test */}
          <Route path="/stones" element={<Stones title={t("Stones")} />} />
        </Route>
        <Route path="/login" element={<Login title={t("login")} />} />
      </Routes>
    </PermissionCtxProvider>
  )
}
