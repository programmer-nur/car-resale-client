import React from 'react';
import { Outlet } from 'react-router-dom';
import Navber from '../Pages/Shared/Navber';

const Main = () => {
    return (
        <div>
            <Navber/>
            <Outlet/>
        </div>
    );
};

export default Main;