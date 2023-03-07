// src/routing/Root.tsx <<<⬅️⬅️⬅️

import { Outlet } from "react-router-dom"
import Footer from "../components/organisms/Footer"
import NavBar from "../components/organisms/NavBar"
import { SideBar } from "../components/organisms/SideBar"

export const Root = () => {
  return (
    <div className="grid h-screen grid-cols-view grid-rows-view bg-flatWhite">

      <nav className="col-start-1 col-end-3 row-start-1 row-end-2 bg-white">
        <NavBar />
      </nav>

      <aside className="col-start-1 col-end-2 row-start-2 row-end-3">
      <SideBar />
      </aside>
      
      <main className="col-start-2 col-end-3 row-start-2 row-end-3 overflow-y-auto p-10">
        <Outlet />
      </main>

      <Footer />
    </div>
  )
}
