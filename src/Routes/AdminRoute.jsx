import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';
import useAdmin from '../Hooks/useAdmin';

const AdminRoute = ({children}) => {
    const location = useLocation();
    const { user, loading } = useAuth();
    const [isAdmin, isAdminLoading] = useAdmin();

    if (loading || isAdminLoading) {
        return <div className='w-screen mx-auto h-[700px] text-center'>
            <progress className="progress w-56 mt-60"></progress>
        </div>
    }

    if (user && isAdmin) {
        return children;
    }

    return <Navigate state={{ from: location }} to="/" replace />
};

export default AdminRoute;