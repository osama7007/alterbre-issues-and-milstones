/////////// IMPORTS
///

///
/////////// Types
///
type TextLineProps_TP = {
  containerClasses?:string
  boldText: string
  lightString: string
}
/////////// HELPER VARIABLES & FUNCTIONS
///

///
export const TextLine = ({
  containerClasses,
  lightString,
  boldText,
}: TextLineProps_TP) => {
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
    <p className={`${containerClasses}`}>
      <span className="font-bold inline-block me-2">{`${boldText}:`}</span>
      <span className="inline-block">{lightString}</span>
    </p>
  )
}