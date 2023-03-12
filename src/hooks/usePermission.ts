import { useContext } from 'react';
import { permissionCtx } from '../context/auth-and-perm/permissions';
import { permessionsRule } from '../types';

const usePermission = (permissions: string[], rule: permessionsRule) => {
    const { isAllowedTo } = useContext(permissionCtx);
    return isAllowedTo(permissions, rule);
}

export default usePermission;