import { useQuery } from '@tanstack/react-query';
import React from 'react';
import ReactHelmet from '../../../Components/ReactHelmet/ReactHelmet';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import { FaUserSecret } from "react-icons/fa";
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';

const AllUsers = () => {

    const [axiosSecure] = useAxiosSecure();

    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await axiosSecure.get('/users');
        return res.data;
    });

    const handleMakeAdmin = (user) => {
        fetch(`http://localhost:5000/users/admin/${user._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    console.log(data);
                    refetch();
                    Swal.fire({
                        title: `${user.name} is now Admin`,
                        showClass: {
                            popup: 'animate__animated animate__fadeInDown'
                        },
                        hideClass: {
                            popup: 'animate__animated animate__fadeOutUp'
                        },
                        timer: 1500
                    })
                }
            })
            .catch(err => console.log(err.message))
    }
    const handleDelete = (id) => { }

    return (
        <div className='w-full px-10'>
            <ReactHelmet title={'All Users'} />
            <SectionTitle subHeading={'users'} Heading={'Manage Users'} />
            <div>
                <h1 className='font-bold text-3xl mb-5'>Total Users: {users.length}</h1>
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        <thead>
                            <tr className='uppercase'>
                                <th>#</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Role</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map((user, index) =>
                                    <tr key={index}>
                                        <th>{index + 1}</th>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                        <td>
                                            {
                                                user.role === 'admin' ? 'admin' : <button className='text-orange-500' onClick={() => handleMakeAdmin(user)}><FaUserSecret /></button>
                                            }
                                            
                                        </td>
                                        <td><button onClick={() => handleDelete(user._id)} className='text-red-700'> Delete </button> </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AllUsers;