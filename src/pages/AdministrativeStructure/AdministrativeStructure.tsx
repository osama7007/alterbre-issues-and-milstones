/////////// IMPORTS
///
import { t } from "i18next"
import { Helmet } from "react-helmet-async"
import { useNavigate } from "react-router-dom"
import { Button } from "../../components/atoms"
import { OuterFormLayout } from "../../components/molecules/OuterFormLayout"
///
import { useEffect, useState } from "react"
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table"
import { Modal } from "../../components/molecules/Modal"
import { SvgDelete } from "../../components/atoms/icons/SvgDelete"
import { EditIcon, ViewIcon } from "../../components/atoms/icons"
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

const columnHelper = createColumnHelper<Admin>()

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
  // useEffect(() => {
  //   fetch("https://erb.alexon.live/admin/api/v1/categories")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data)
  //       const returnData = data.data.map((data: any) => data)
  //       setData(returnData)
  //     })
  //     .catch((err) => console.log(err))
  // }, [])
  const Data: Admin[] = [
    {
      id: crypto.randomUUID(),
      name: "tanner",
      action: <></>,
    },
    {
      id: crypto.randomUUID(),
      name: "tanner",
      action: <></>,
    },
  ]
  const [data, setData] = useState(() => [...Data])
  const columns = [
    columnHelper.accessor("name", {
      cell: (info) => info.getValue(),
      header: () => <span>الاسم </span>,
    }),

    columnHelper.accessor("action", {
      cell: (info) => {
        return (
          <div className="flex items-center justify-center gap-4">
            <EditIcon action={() => console.log("in", info.row.original)} />
            <SvgDelete
              action={() => console.log("in", info.row.original)}
              stroke="#ef4444"
            />
            <ViewIcon action={() => console.log("in", info.row.original)} />
          </div>
        )
      },
      header: () => <span>فعاليات</span>,
    }),
  ]
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
        <table className="w-full text-center">
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
              <tr key={row.id} className=" ">
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
