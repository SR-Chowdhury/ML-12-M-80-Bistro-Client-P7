import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import useCart from '../Hooks/useCart';
import useAdmin from '../Hooks/useAdmin';

const Dashboard = () => {

    const [cart] = useCart();

    // TODO : load admin user from DB
    // const isAdmin = true;
    const [isAdmin] = useAdmin();

    return (
        <div>
            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    <Outlet />
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                </div>
                <div className="drawer-side bg-[#D1A054]">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 uppercase">
                        {
                            isAdmin ?
                                <>
                                    <li><NavLink to="/dashboard/admin-home">Admin Home</NavLink></li>
                                    <li><NavLink to="/dashboard/additem">Add an item</NavLink></li>
                                    <li><NavLink to="/dashboard/manageitems">manage items</NavLink></li>
                                    <li><NavLink to="/dashboard/manage-bookings">manage bookings</NavLink></li>
                                    <li><NavLink to="/dashboard/allusers">all users</NavLink></li>
                                </>
                                :
                                <>
                                    <li><NavLink to="/dashboard/home">User Home</NavLink></li>
                                    <li><NavLink to="/dashboard/reservation">Reservation</NavLink></li>
                                    <li><NavLink to="/dashboard/history">Payment History</NavLink></li>
                                    <li><NavLink to="/dashboard/mycart">My Cart [+{cart?.length || 0}]</NavLink></li>
                                </>
                        }

                        <div className="divider"></div>
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/menu">Menu</NavLink></li>
                        <li><NavLink to="/order">Order</NavLink></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;