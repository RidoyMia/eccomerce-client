import React from 'react';

const Layout = ({children} : {children:React.ReactNode}) => {
    return (
        <div>
            <h1>hoice</h1>
            {children}
        </div>
    );
};

export default Layout;