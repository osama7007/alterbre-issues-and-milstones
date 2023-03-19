/////////// IMPORTS
///
import { ReactNode } from "react"
import { TabsIcon } from "../../svgIcons"
///
/////////// Types
///
type InnerFormLayoutProps_TP = {
  title?: string
  children: ReactNode
}
/////////// HELPER VARIABLES & FUNCTIONS
///

///
export const InnerFormLayout = ({
  title,
  children,
}: InnerFormLayoutProps_TP) => {
  /////////// VARIABLES
  ///

  ///
  /////////// CUSTOM HOOKS
  ///

  ///
  /////////// STATES
  ///

  ///
  /////////// SIDE EFFECTS
  ///

  /////////// FUNCTIONS | EVENTS | IF CASES
  ///

  ///
  return (
    <>
      <div className="p-2 w-full">
        <div className="flex items-center gap-x-2 mb-5">
          <TabsIcon />
          <h2>{title}</h2>
        </div>
        <div className="bg-flatWhite rounded-lg p-4 grid grid-cols-4 gap-x-4 gap-y-8">
          {children}
        </div>
      </div>
    </>
  )
}
