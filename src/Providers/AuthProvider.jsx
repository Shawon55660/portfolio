import React, { createContext } from 'react';
export const authContext = createContext()

const AuthProvider = ({children}) => {
 const name ='shawon'
 const address = 'satbaria'
    const info = {
        name,
        address

    }
    return (
        <authContext.Provider value={info}>
          {  children}
        </authContext.Provider>
      
    );
};

export default AuthProvider;