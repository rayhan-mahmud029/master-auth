import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {

    const handleUserLogin = e => {
        e.preventDefault()
        const userEmail = e.target.email.value;
        const userPassword = e.target.password.value;
        console.log(userEmail, userPassword);
    }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200 ">

                <div className="hero-content flex-col lg:flex-row-reverse w-9/12 gap-8">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">Login to be part of the Auth Master family and experience seamless and secure access to our exclusive services and resources</p>
                    </div>

                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">

                        <form className="card-body" onSubmit={handleUserLogin}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required/>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required/>
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>

                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                            <label className="label">
                                <Link to="/register" className="label-text-alt link link-hover text-center w-full">New to Master Auth??</Link>
                            </label>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;