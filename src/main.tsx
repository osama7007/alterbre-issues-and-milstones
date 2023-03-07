import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import React from "react"
import ReactDOM from "react-dom/client"
import { HelmetProvider } from "react-helmet-async"
import { ProSidebarProvider } from "react-pro-sidebar"
import App from "./App"
import "./index.css"

const queryClient = new QueryClient()
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <ProSidebarProvider>
        <App />
      </ProSidebarProvider>
    </HelmetProvider>
  </QueryClientProvider>
)
