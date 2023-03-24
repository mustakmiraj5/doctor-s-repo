import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const Navbar = () => {
    const {user, logOut} = useContext(AuthContext);
    const menuItems = <>
        <li className='hover:bg-gray-700 rounded-lg hover:text-white'><Link to={'/'}>Home</Link></li>
        <li className='hover:bg-gray-700 rounded-lg hover:text-white'><Link to={'/about'}>About</Link></li>
        <li className='hover:bg-gray-700 rounded-lg hover:text-white'><Link to={'/appointment'}>Appointment</Link></li>
        {user?.uid ? <>
            <li className='hover:bg-gray-700 rounded-lg hover:text-white'><Link to={'/dashboard'}>Dashboard</Link></li>
            <button onClick={logOut} className='hover:bg-gray-700 rounded-lg hover:text-white'><Link to={'/login'}>Sign Out</Link></button>
        </> :
            <>
                <li className='hover:bg-gray-700 rounded-lg hover:text-white'><Link to={'/signup'}>SignUp</Link></li>
                <li className='hover:bg-gray-700 rounded-lg hover:text-white'><Link to={'/login'}>LogIn</Link></li>
            </>}
    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <a href='/' className="btn btn-ghost normal-case text-xl">Doctors Portal</a>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {menuItems}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;