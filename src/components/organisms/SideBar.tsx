/////////// IMPORTS
///
import { useLocation, useNavigate, Link } from "react-router-dom"
// components
import {
  Sidebar,
  Menu,
  MenuItem,
  SubMenu,
  useProSidebar,
} from "react-pro-sidebar"
// helpers
import { useTranslation } from "react-i18next"
import { MenuItem_TP, sideBarItems } from "../../data/sidebar"

export const SideBar = () => {
  /////////// CUSTOM HOOKS
  const { t } = useTranslation()
  const navigate = useNavigate()
  const location = useLocation()

  const path = location.pathname

  const goTo = (e: any, link: string) => {
    e.preventDefault()
    // left click
    if (e.button === 0) {
      // ctrl + left click
      if (e.ctrlKey) {
        window.open(link, "_blank")
      } else {
        navigate(link)
      }
    } else if (e.button === 1) {
      // middle click
      window.open(link, "_blank")
    }
  }

  var openMenus: MenuItem_TP[] = []

  const findPathParentMenu = (path: string) => {
    sideBarItems.forEach((item) => {
      // check if item has link
      if (item.link) {
        if (item.link === path) {
          openMenus.push(item)
        }
      }
      // check if item has items
      if (item.items) {
        item.items.forEach((innerItem) => {
          if (innerItem.link) {
            if (innerItem.link === path) {
              openMenus.push(item)
            }
          } else if (innerItem.items) {
            innerItem.items.forEach((innerInnerItem) => {
              if (innerInnerItem.link) {
                if (innerInnerItem.link === path) {
                  openMenus.push(item)
                  openMenus.push(innerItem)
                }
              }
            })
          }
        })
      }
    })
  }

  findPathParentMenu(path)

  // find path parent menu

  const generateItem = (Item: MenuItem_TP) => {
    return Item.items ? (
      <SubMenu
        // TODO: defaultOpen
        // defaultOpen={}
        defaultOpen={openMenus.includes(Item)}
        className={
          location.pathname === Item.link
            ? "bg-mainGreen font-bold text-white"
            : "font-bold text-mainBlack"
        }
        key={Item.id}
        label={Item.label}
        icon={<Item.icon size={20} />}
      >
        {Item.items.map((innerItem) => generateItem(innerItem))}
      </SubMenu>
    ) : (
      <MenuItem
        className={
          location.pathname === Item.link
            ? " font-bold text-white  hover:text-mainGreen  [&>a]:rounded-md [&>a]:bg-mainGreen"
            : "font-bold text-mainBlack  hover:[&>a]:bg-lightGray"
        }
        key={Item.id}
        onClick={(e) => {
          goTo(e, Item.link!)
        }}
        icon={<Item.icon size={20} />}
        active={location.pathname === Item.link}
      >
        {/* <Link to={Item.link!}>{t(Item.label)}</Link> */}
        {t(Item.label)}
      </MenuItem>
    )
  }

  ///
  return (
    <Sidebar rtl className="sidebar">
      <Menu className=" ">
        {sideBarItems.map((Item) =>
          Item.items ? (
            <SubMenu
              defaultOpen={openMenus.includes(Item)}
              className={
                location.pathname === Item.link
                  ? "bg-LightGreen font-bold text-mainOrange"
                  : "font-bold text-mainBlack"
              }
              key={Item.id}
              label={Item.label}
              icon={<Item.icon size={20} />}
              active={location.pathname === Item.link}
            >
              {Item.items.map((innerItem) => generateItem(innerItem))}
            </SubMenu>
          ) : (
            generateItem(Item)
          )
        )}
      </Menu>
    </Sidebar>
  )
}
