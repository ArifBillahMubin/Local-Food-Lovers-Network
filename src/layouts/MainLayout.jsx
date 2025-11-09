import React from 'react';
import Home from '../pages/Home/Home';
import { Outlet } from 'react-router';
import Navbar from '../components/Navbar/Navbar';
import { Toaster } from "react-hot-toast";


const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Toaster />
        </div>

    );
};

export default MainLayout;