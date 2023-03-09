import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import ReactDOM from "react-dom/client"
import { HelmetProvider } from "react-helmet-async"
import { ProSidebarProvider } from "react-pro-sidebar"
import { BrowserRouter } from "react-router-dom"
import App from "./App"
import { AuthCtxProvider } from "./context/auth-and-perm/auth"
import { NumberFormatterProvider } from "./context/settings/number-formatter"
import "./index.css"

const queryClient = new QueryClient()
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <AuthCtxProvider>
        <NumberFormatterProvider>
          <HelmetProvider>
            <ProSidebarProvider>
              <App />
            </ProSidebarProvider>
          </HelmetProvider>
        </NumberFormatterProvider>
      </AuthCtxProvider>
    </BrowserRouter>
  </QueryClientProvider>
)
