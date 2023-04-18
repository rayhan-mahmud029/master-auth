import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';

const Register = () => {
    const {createUser} = useContext(AuthContext)

    const handleUserRegistration = e => {
        e.preventDefault()
        const userName = e.target.name.value;
        const userEmail = e.target.email.value;
        const userPassword = e.target.password.value;
        console.log(userName, userEmail, userPassword);
        createUser(userEmail, userEmail)

    }
    return (
        <div>


            <form className="card-body w-9/12 mx-auto" onSubmit={handleUserRegistration}>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" name='name' placeholder="name" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">*Email</span>
                    </label>
                    <input type="email" name='email' placeholder="email" className="input input-bordered" required/>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">*Password</span>
                    </label>
                    <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                </div>

                <div className="form-control mt-6">
                    <button className="btn btn-primary">Login</button>
                </div>
                <label className="label">
                    <Link to="/login" className="label-text-alt link link-hover text-center w-full">Already have an account??</Link>

                </label>

            </form>
        </div>
    );
};

export default Register;