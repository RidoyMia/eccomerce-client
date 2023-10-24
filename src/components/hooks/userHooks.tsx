import React, { createContext, useEffect, useState } from 'react';

export const authContext = createContext(null); // Change to authContext
//@ts-ignore
const UserHooks = ({ children }) => { // Change to UserHooks
  const [user, setUser] = useState(null);
  const userInfo = { user, setUser };
  useEffect(()=>{
    const userinfowithstringify=localStorage.getItem('userInfo')
    //@ts-ignore
    setUser(JSON.parse(userinfowithstringify))
  },[user])

  return (
    //@ts-ignore
    <authContext.Provider value={userInfo}>
      {children}
    </authContext.Provider>
  );
};

export default UserHooks;
