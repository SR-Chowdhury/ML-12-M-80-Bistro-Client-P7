import { createBrowserRouter, } from "react-router-dom";
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home/Home";
import MainLayout from "../Layouts/MainLayout";
import Menu from "../Pages/Menu/Menu";
import Order from "../Pages/Order/Order";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Layouts/Dashboard";
import MyCart from "../Pages/Dashboard/MyCart/MyCart";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
import AddItem from "../Pages/Dashboard/AddItem/AddItem";
import AdminRoute from "./AdminRoute";
import ManageItems from "../Pages/Dashboard/ManageItems/ManageItems";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: '/menu',
                element: <Menu/>
            },
            {
                path: '/order/:category',
                // element: <PrivateRoute><Order/></PrivateRoute>
                element: <Order/>
            },
            {
                path: '/login',
                element: <Login/>
            },
            {
                path: '/register',
                element: <Register/>
            }
        ],
    },
    {
        path: "dashboard",
        element: <PrivateRoute><Dashboard/></PrivateRoute>,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "mycart",
                element: <MyCart/>
            },
            {
                path: 'allusers',
                element: <AllUsers/>
            },
            {
                path: 'additem',
                element: <AdminRoute><AddItem/></AdminRoute>
            }, 
            {
                path: 'manageitems',
                element: <AdminRoute><ManageItems/></AdminRoute>
            }
        ]
    }
]);