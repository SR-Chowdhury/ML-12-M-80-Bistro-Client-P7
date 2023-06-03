import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import React, { useEffect, useState } from 'react';
import './Login.css';
import img from '../../assets/others/authentication1.png';
import ReactHelmet from '../../Components/ReactHelmet/ReactHelmet';
import Swal from 'sweetalert2';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import SocialLogin from '../../Components/SocialLogin/SocialLogin';
import useAuth from '../../Hooks/useAuth';

const Login = () => {

    const [error, setError] = useState('');
    const [disabled, setDisabled] = useState(true);
    const { singIn } = useAuth();
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/";

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, []);

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const formData = { email, password };
        console.log(formData);
        if (password.length < 6) {
            setError('Password length at least 6 characters');
        }

        singIn(email, password)
            .then(result => {
                Swal.fire({
                    title: 'Successfully Log in',
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    }
                })
                const loggedUser = result.user;
                setError('');
                navigate(from, { replace: true });
                // navigate('/');
            })
            .catch(err => setError(err.message))
    }

    const handleCaptcha = (event) => {
        const user_captcha_value = event.target.value;
        console.log(user_captcha_value);

        if (validateCaptcha(user_captcha_value)) {
            setDisabled(false);
            // alert('Captcha matched!');
        } else {
            setDisabled(true);
            alert('Captcha did not matched!');
        }
    }



    return (
        <div className='loginContainer'>
            <ReactHelmet title={'Login'} />
            <div className="hero min-h-screen">
                <div className="hero-content flex md:justify-around">
                    <div className='heroSection'>
                        <img src={img} className='w-full' alt="Login Image" />
                    </div>
                    <div className="heroSection card max-w-sm drop-shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit} className="card-body text-center">
                            <h1 className='loginTitle'>Login</h1>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Captcha</span>
                                </label>
                                <LoadCanvasTemplate />
                                <input onBlur={handleCaptcha} type="text" name='captcha' placeholder="Type the captcha above" className="input input-bordered" />
                                {
                                    error && <p className='label-text-alt text-center text-red-600'>{error}</p>
                                }
                            </div>
                            <div className="form-control mt-6">
                                <button className="submitBtn" disabled={disabled}>Login</button>
                            </div>
                            <p className='text-center'>New in this website? <Link to="/register" style={{color: 'var(--link-color)'}}>Register</Link></p>
                        </form>
                        <SocialLogin/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;