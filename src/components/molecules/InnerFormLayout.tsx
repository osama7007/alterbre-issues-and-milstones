/////////// IMPORTS
///
import { ReactNode } from "react"
import { TabsIcon } from "../atoms/icons/Tabs"
import { Button } from "../atoms"
///
/////////// Types
///
type InnerFormLayoutProps_TP = {
  title?: string | null
  subTitle?: string | null
  action?:()=>void
  children: ReactNode
}
/////////// HELPER VARIABLES & FUNCTIONS
///

///
export const InnerFormLayout = ({
  title,
  children,
  subTitle,
  action
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
        {title && (
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-x-2 mb-5">
              <TabsIcon />
              <h2>{title}</h2>
            </div>
            {subTitle && (
              <Button variant="primary" type="button" className="mb-3" action={action}>
                {subTitle}
              </Button>
            )}
          </div>
        )}
        <div className="bg-flatWhite rounded-lg p-4 grid grid-cols-4 gap-x-4 gap-y-8 relative">
          {children}
        </div>
      </div>
    </>
  )
}
