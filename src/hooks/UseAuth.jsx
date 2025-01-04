import React, { useContext } from 'react';
import { authContext } from '../Providers/AuthProvider';

const UseAuth = () => {
    const auth = useContext(authContext)
   return auth
};

export default UseAuth;