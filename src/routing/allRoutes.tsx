import { createBrowserRouter } from "react-router-dom"
import { ErrorPage } from "./ErrorPage"
import { Root } from "./Root"
import { t } from "i18next"
import { Settings } from "../pages/Settings"
import { Home } from "../pages/Home"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,

    children: [
      {
        index: true,
        element: <Home title={t("home")} />,
      },
      {
        path: "/settings",
        element: <Settings title={t("settings")} />,
      },

    ],
  },
])
