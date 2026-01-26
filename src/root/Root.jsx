import React from 'react';
import Navber from '../componet/Navber';
import { Outlet } from 'react-router';
import Footer from '../componet/Footer';

const Root = () => {
    return (
        <div className=" bg-gray-300">
            <Navber></Navber>
            <div className=' w-11/12 mx-auto   '>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;