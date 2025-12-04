import React, { useContext } from 'react';
import { BiLogOut } from 'react-icons/bi';
import { TbLogin2 } from 'react-icons/tb';
import { Link, useLocation } from 'react-router';
import { AuthContext } from '../../provider/AuthProvider';
import { toast } from 'react-toastify';

const NavBar = () => {
    const { user, logout } = useContext(AuthContext);
    const location = useLocation(); // detect active link

    const handleLogout = () => {
        logout()
            .then(() => toast('Logged out successfully!'))
            .catch(error => {
                console.log(error);
                alert(error.message);
            });
    };

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Games', path: '/games' },
        { name: 'My Games', path: '/installed' },
        { name: 'Profile', path: '/profile', auth: true },
        { name: 'About Us', path: '/about-us' },
    ];

    const links = navLinks.map(link => {
        if (link.auth && !user) return null;
        const isActive = location.pathname === link.path;
        return (
            <Link key={link.name} to={link.path}>
                <li
                    className={`ml-4 md:text-3xl font-bold text-transparent bg-clip-text 
                    ${isActive ? 'bg-gradient-to-r from-[#ffcc00] to-[#ff00e4]' : 'bg-gradient-to-r from-[#b413e1] to-[#8a0cb0]'}
                    `}
                >
                    {link.name}
                </li>
            </Link>
        );
    });

    return (
        <div className='Navbar parent sticky top-0 z-50 bg-white shadow'>
            <div className="navbar bg-base-100">
                {/* Mobile dropdown */}
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> 
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> 
                            </svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <div className='flex justify-between items-center md:ml-10'>
                        <Link to='/'>
                            <img className='h-[50px] w-[50px] rounded-full mr-2' src="/logo.png" alt="Logo" />
                        </Link>
                        <p className="font-bold ml-2 md:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-[#b413e1] to-[#8a0cb0]">Gaming Infinity</p>
                    </div>
                </div>

                {/* Desktop links */}
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">{links}</ul>
                </div>

                {/* User avatar & login/logout */}
                <div className="navbar-end flex items-center gap-2">
                    <Link to='/profile'>
                        <img
                            className={`w-12 h-12 rounded-full border-2 ${user ? 'border-[#b413e1]' : 'border-black'}`}
                            src={user ? user.photoURL : '/user.png'}
                            alt="User"
                        />
                    </Link>
                    {user ? (
                        <button onClick={handleLogout} className="btn text-white bg-gradient-to-r from-[#b413e1] to-[#8a0cb0] flex items-center gap-2">
                            <BiLogOut /> Logout
                        </button>
                    ) : (
                        <Link to='/login' className="btn text-white bg-gradient-to-r from-[#b413e1] to-[#8a0cb0] flex items-center gap-2">
                            <TbLogin2 /> Login
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
};

export default NavBar;
