/////////// IMPORTS
///
 ///
/////////// Types
type Card_TP = {
  header: string
  addLabel: string
  viewLabel: string
  variant?: "primary" | "secondary"
  addHandler: () => void
  viewHandler: () => void
  addButton?: boolean
  showButton?: boolean
}
///

import { CardHeader } from "../atoms/Card/CardHeader"
import { AddButton } from "../molecules/AddButton"
import { ShowButton } from "../molecules/ShowButton"

/////////// HELPER VARIABLES & FUNCTIONS
///

///
export const Card = ({
  header,
  addLabel,
  viewLabel,
  variant,
  viewHandler,
  addHandler,
  addButton = true,
  showButton = true,
}: Card_TP) => {
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
      <div className="col-span-1  w-full  rounded-md p-3 shadow  ">
        <div className=" grid grid-flow-col grid-rows-3 gap-4">
          <CardHeader header={header} />
          {addButton && <AddButton addLabel={addLabel} action={addHandler} />}
          {showButton && (
            <ShowButton
              viewLabel={viewLabel}
              action={viewHandler}
              variant={variant}
            />
          )}
        </div>
      </div>
    </>
  )
}
