import { createContext, ReactNode } from "react"
import { permessionsRule } from "../../types"
///
///////// TYPES
type PermissionContextType = {
  isAllowedTo: (permissions: string[], rule: permessionsRule) => boolean
}

type PermissionCtxProviderProps_TP = {
  children: ReactNode
  userPermissions: string[]
}

///
///////// HELPER VARIABLES
///
const defaultBehaviour: PermissionContextType = {
  isAllowedTo: () => false,
}
///
//// CTX
export const permissionCtx =
  createContext<PermissionContextType>(defaultBehaviour)
// PROVIDER
export const PermissionCtxProvider = ({
  userPermissions,
  children,
}: PermissionCtxProviderProps_TP) => {
  /////////// VARIABLES
  ///
  const isAllowedTo = (permissions: string[], rule: permessionsRule) => {
    switch (rule) {
      case "AND":
        return permissions.every((perm) => userPermissions.includes(perm))
      case "OR":
        return userPermissions.some((perm) => permissions.includes(perm))

      default:
        return false
    }
  }

  ///
  /////////// STATES`
  ///

  //   TODO: i can navigate user here if he is not logged in
  ///
  /////////// CUSTOM HOOKS
  ///

  ///
  /////////// FUNCTIONS | EVENTS | IF CASES
  ///

  ///
  return (
    <permissionCtx.Provider
      value={{
        isAllowedTo,
      }}
    >
      {children}
    </permissionCtx.Provider>
  )
}
