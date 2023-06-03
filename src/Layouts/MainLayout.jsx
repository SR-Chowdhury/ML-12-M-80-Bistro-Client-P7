import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';
import NavBar from '../Pages/Shared/NavBar/NavBar';

const MainLayout = () => {

    const location = useLocation();
    const noHeaderFooterLogin = location.pathname.includes('/login');
    const noHeaderFooterRegister = location.pathname.includes('/register');

    /**
     * Or noHeaderFooter = location.pathname.includes('/login') || location.pathname.includes('/register')
     */

    return (
        <div>
            {
                noHeaderFooterLogin || noHeaderFooterRegister ? <Outlet></Outlet> :
                    <>
                        <NavBar />
                        <Outlet></Outlet>
                        <Footer />
                    </>

            }
        </div>
    );
};

export default MainLayout;