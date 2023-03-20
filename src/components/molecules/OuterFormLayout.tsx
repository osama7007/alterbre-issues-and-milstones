/////////// IMPORTS
///
import { DefaultTFuncReturn } from "i18next"
import { ReactNode } from "react"
import { Button } from "../atoms/buttons/Button"
///
/////////// Types

///
type OuterFormLayout_TP = {
  children: ReactNode
  header?: string | DefaultTFuncReturn
  submitText?: string
  leftComponent?: ReactNode
}
/////////// HELPER VARIABLES & FUNCTIONS
///

///
export const OuterFormLayout = ({
  children,
  header,
  submitText,
  leftComponent,
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
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold mb-8">{header}</h2>
          {leftComponent && leftComponent}
        </div>

        <div className="bg-lightGreen p-4 rounded-lg">{children}</div>
        {!!submitText && (
          <Button type="submit" variant="primary" className="mr-auto mt-8">
            {submitText}
          </Button>
        )}
      </div>
    </>
  )
}
