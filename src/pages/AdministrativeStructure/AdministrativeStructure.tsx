/////////// IMPORTS
///
import { t } from "i18next"
import { Helmet } from "react-helmet-async"
import { useNavigate } from "react-router-dom"
import { Button } from "../../components/atoms"
import { OuterFormLayout } from "../../components/molecules/OuterFormLayout"
///
import { useState } from "react"
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table"
/////////// Types
///
type AdministrativeStructureProps_TP = {
  title: string
}
/////////// HELPER VARIABLES & FUNCTIONS
///
type Admin = {
  id: string
  name: string
  action: any
}

const Data: Admin[] = [
  {
    id: crypto.randomUUID(),
    name: "tanner",
    action: <div>span</div>,
  },
  {
    id: crypto.randomUUID(),
    name: "tanne   r",
    action: <div>sp an</div>,
  },
]
const columnHelper = createColumnHelper<Admin>()
const columns = [
  columnHelper.accessor("name", {
    cell: (info) => info.getValue(),
    header: () => <span>الاسم </span>,
  }),

  columnHelper.accessor((row) => row.action, {
    id: "action",
    cell: (info) => <i>{info.getValue()}</i>,
    header: () => <span>فعاليات</span>,
  }),
]
///
export const AdministrativeStructure = ({
  title,
}: AdministrativeStructureProps_TP) => {
  /////////// VARIABLES
  ///
  const navigate = useNavigate()
  const AddAdministrative = (
    <Button action={() => navigate("/add-administrative-structure")}>
      {t("add")}
    </Button>
  )
  ///
  /////////// CUSTOM HOOKS
  ///
  const [data, setData] = useState(() => [...Data])
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  })
  ////

  ///
  /////////// STATES
  ///
  ///
  /////////// SIDE EFFECTS
  ///

  ///
  /////////// FUNCTIONS | EVENTS | IF CASES
  ///

  ///
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>

      <OuterFormLayout
        leftComponent={AddAdministrative}
        header="الهيكل الإداري"
      >
        {/* TABLE */}
        <table>
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
          <tfoot>
            {table.getFooterGroups().map((footerGroup) => (
              <tr key={footerGroup.id}>
                {footerGroup.headers.map((header) => (
                  <th key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.footer,
                          header.getContext()
                        )}
                  </th>
                ))}
              </tr>
            ))}
          </tfoot>
        </table>
        {/* TABLE */}
      </OuterFormLayout>
    </>
  )
}
