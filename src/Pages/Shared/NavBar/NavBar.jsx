import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProvider';
import Swal from 'sweetalert2';
import userImg from '../../../assets/user.png';
import { FaCartPlus } from "react-icons/fa";
import useCart from '../../../Hooks/useCart';

const NavBar = () => {

    const { user, logOut } = useContext(AuthContext);
    const navigate = useNavigate();
    const [cart] = useCart();


    const handleLogout = () => {
        logOut()
            .then(() => {
                Swal.fire({
                    title: 'Successfully Log out',
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    }
                })
                navigate('/');
            })
            .catch(err => console.log(err.message))
    }

    const navOptions = <>
        <li><Link to={'/'}>Home</Link> </li>
        <li><Link to={'/menu'}>Menu</Link> </li>
        <li><Link to={'/order/salad'}>Order</Link> </li>
        <li>
            <Link to={'/dashboard/mycart'}>
                <button className="btn gap-2 bg-slate-900">
                    <FaCartPlus/>
                    <div className="badge badge-secondary">+{cart?.length || 0}</div>
                </button>
            </Link>
        </li>
    </>
    return (
        <div className="navbar max-w-screen-xl text-white fixed z-10 bg-[rgba(0,0,0,0.5)]">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navOptions}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl">Bistro Boss</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navOptions}
                </ul>
            </div>
            <div className="navbar-end">

                <div className="dropdown dropdown-end">
                    <label tabIndex={1} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            {
                                user?.photoURL ?
                                    <img src={user?.photoURL} /> :
                                    <img src={userImg} />
                            }
                        </div>
                    </label>
                    <ul tabIndex={1} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                        <li>
                            <a className="justify-between">
                                {
                                    user && <span className='font-bold'>{user?.displayName}</span>
                                }
                            </a>
                        </li>
                        {
                            user ?
                                <>
                                    <li><Link onClick={handleLogout}>Logout</Link></li>
                                </>
                                :
                                <>
                                    <li><Link to={'/login'}>Login</Link></li>
                                    <li><Link to={'/register'}>Register</Link></li>
                                </>
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default NavBar;