/////////// IMPORTS
///
import { ReactNode } from "react"
import { Button } from "../atoms/buttons/Button"
///
/////////// Types

///
type OuterFormLayout_TP = {
  children: ReactNode
  header?: string
  hasSubmit?: boolean
}
/////////// HELPER VARIABLES & FUNCTIONS
///

///
export const OuterFormLayout = ({
  children,
  header,
  hasSubmit = true,
}: OuterFormLayout_TP) => {
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
      <div className="py-4 px-2 flex flex-col">
        <h2 className="text-2xl font-bold mb-2">{header}</h2>
        <div className="bg-lightGreen p-4 rounded-lg">{children}</div>
        {hasSubmit && (
          <Button type="submit" variant="primary" className="mr-auto mt-8">
            حفظ
          </Button>
        )}
      </div>
    </>
  )
}
