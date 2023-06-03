import React, { useContext, useState } from 'react';
import img from '../../assets/others/authentication1.png';
import ReactHelmet from '../../Components/ReactHelmet/ReactHelmet';
import { AuthContext } from '../../Providers/AuthProvider';
import Swal from 'sweetalert2';
import { updateProfile } from 'firebase/auth';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const [error, setError] = useState('');
    const { createUser, updateUserProfile, logOut } = useContext(AuthContext);
    const navigate = useNavigate();

    const onSubmit = data => {
        createUser(data.email, data.password)
            .then(result => {

                const loggedUser = result.user;
                // updateUserProfile(loggedUser, data.name, data.photo );
                updateUserProfile(data.name, data.photo)
                    .then(() => {
                        const saveUser = {name: data.name, email: data.email}
                        fetch('http://localhost:5000/users', {
                            method: 'POST',
                            headers: {
                                'content-type' : 'application/json'
                            },
                            body: JSON.stringify(saveUser)
                        })
                            .then(res => res.json())
                            .then(data => {
                                if (data.insertedId) {
                                    Swal.fire({
                                        title: 'Successfully User Created!',
                                        showClass: {
                                            popup: 'animate__animated animate__fadeInDown'
                                        },
                                        hideClass: {
                                            popup: 'animate__animated animate__fadeOutUp'
                                        }
                                    })
                                    setError('');
                                    reset();
                                    logOut()
                                        .then(() => navigate('/login'))
                                }
                            })
                            .catch(err => console.log(err.message))
                    })
                    .catch(err => console.log(err.message))
            })
            .catch(err => setError(err.message))
    }

    // const updateUserProfile = (user, name, photo) => {
    //     updateProfile(user, {
    //         displayName: name,
    //         photoURL: photo
    //     })
    //         .then( () => console.log('name successfully updated'))
    //         .catch(err => setError(err.message))
    // }

    return (
        <div className='loginContainer'>
            <ReactHelmet title={'Register'} />
            <div className="hero min-h-screen">
                <div className="hero-content flex md:justify-around flex-row-reverse">
                    <div className='heroSection'>
                        <img src={img} className='w-full' alt="Login Image" />
                    </div>
                    <div className="heroSection card max-w-sm drop-shadow-2xl bg-base-100">
                        {/* <form onSubmit={handleSubmit} className="card-body text-center"> */}
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <h1 className='loginTitle'>Register</h1>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" {...register("name", { required: true })} name="name" placeholder="name" className="input input-bordered" />
                                {errors.name && <span className='label-text-alt ms-1 mt-2 text-red-600'>Name field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" {...register("photo", { required: true })} name="photo" placeholder="Photo URL" className="input input-bordered" />
                                {errors.photo && <span className='label-text-alt ms-1 mt-2 text-red-600'>Photo URL is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" {...register("email", { required: true })} name='email' placeholder="email" className="input input-bordered" />
                                {errors.email && <span className='label-text-alt ms-1 mt-2 text-red-600'>Email field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" {...register("password", {
                                    required: true,
                                    minLength: 6,
                                    maxLength: 20,
                                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                                })} name='password' placeholder="password" className="input input-bordered" />
                                {errors.password?.type === 'required' && <span className='label-text-alt ms-1 mt-2 text-red-600'>Password is required</span>}
                                {errors.password?.type === 'minLength' && <span className='label-text-alt ms-1 mt-2 text-red-600'>Password length must be more than six characters</span>}
                                {errors.password?.type === 'maxLength' && <span className='label-text-alt ms-1 mt-2 text-red-600'>Password length can not be more than twenty characters</span>}
                                {errors.password?.type === 'pattern' && <span className='label-text-alt ms-1 mt-2 text-red-600'>Password must have one uppercase one lowercase one number an one special chracter</span>}

                                {
                                    error && <p className='label-text-alt text-center text-red-600'>{error}</p>
                                }
                            </div>
                            <div className="form-control mt-6">
                                <button className="submitBtn">Register</button>
                            </div>
                            <p className='text-center'>Already Have an Account? <Link to="/login" style={{ color: 'var(--link-color)' }}>Login</Link></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;