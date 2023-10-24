import React, { createContext, useEffect, useState } from 'react';

export const authContext = createContext(null);

const UserHooks = ({ children }:any) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const userInfo = { user, setUser };
   
      useEffect(() => {
       
            if (user == null) { 
                setLoading(true);
               const userinfowithstringify = localStorage.getItem('userInfo');
               if (userinfowithstringify) {
        setUser(JSON.parse(userinfowithstringify));
        setLoading(false);
      }
    }
  }, []);

 

  return (
    //@ts-ignore
    <authContext.Provider value={userInfo}>
      {children}
    </authContext.Provider>
  );
};

export default UserHooks;
