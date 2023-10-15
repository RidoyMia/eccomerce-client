"use client"
import reduxStore from '@/redux/store';
import React from 'react';
import { Provider } from "react-redux";


const Providers = ({children}:any) => {
    return (
        <Provider store={reduxStore}>
            {children}
        </Provider>
    );
};

export default Providers;