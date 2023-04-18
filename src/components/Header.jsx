import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <div className="navbar bg-base-300">

                <div className="navbar-start">
                    <a className="btn btn-ghost normal-case text-xl">Master Auth</a>
                </div>

                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link to='/'>Home</Link></li>
                        <li tabIndex={0}>
                            <a>
                                Blogs
                                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                            </a>
                            <ul className="p-2">
                                <li><Link>Programming</Link></li>
                                <li><Link>Travel</Link></li>
                            </ul>
                        </li>
                        <li><Link to='/about'>About</Link></li>
                    </ul>
                </div>

                <div className="navbar-end flex gap-2">
                    <Link to='/register' className="btn">Get started</Link>
                    <Link to='/login' className="btn">Log In</Link>
                </div>
            </div>
        </div>
    );
};

export default Header;