"use client"
import reduxStore from '@/redux/store';

import React, { useEffect, useState } from 'react';
import { Provider } from "react-redux";
import { Iuser } from '../header/Header';
import UserHooks from '../hooks/userHooks';



const Providers = ({children}:any) => {
   
    return (
      
        <Provider store={reduxStore}>
            <UserHooks>
               {children}
            </UserHooks>
        </Provider>
       
        
    );
};

export default Providers;