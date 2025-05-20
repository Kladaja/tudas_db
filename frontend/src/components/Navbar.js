import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import FloatingButton from './FloatingButton';
import { ReactComponent as LogoIcon } from '../assets/logo.svg';
import { ReactComponent as HomeIcon } from '../assets/home.svg';
import { ReactComponent as LogoutIcon } from '../assets/logout.svg';
import { ReactComponent as PersonIcon } from '../assets/person.svg';
import { ReactComponent as PersonMultipleIcon } from '../assets/person-multiple.svg';

function Navbar() {
    const { user, logout } = useAuth();

    const handleLogout = () => {
        logout();
        window.location.href = '/';
    };

    return (
        <nav className="navbar">
            <div className="nav-left">
                <Link to="/" className="nav-logo">
                    <LogoIcon className="logo-icon" />
                    <span className="logo-label"><i>Article</i><span className="logo-label-highlight">Portal</span></span>
                </Link>
            </div>
            <div className="nav-right">
                {user ? (
                    <>
                        <Link to="/" className="navbar-button">
                            <HomeIcon className="navbar-icon" />
                            <span className="navbar-label">Home</span>
                        </Link>
                        {user.role === 'admin' && <Link to="/profile-management" className="navbar-button">
                            <PersonMultipleIcon className="navbar-icon" />
                            <span className="navbar-label">Users</span>
                        </Link>}
                        <Link to="/profile" className="navbar-button">
                            <PersonIcon className="navbar-icon" />
                            <span className="navbar-label">Profile</span>
                        </Link>
                        <Link to="#" onClick={handleLogout} className="navbar-button">
                            <LogoutIcon className="navbar-icon" />
                            <span className="navbar-label">Logout</span>
                        </Link>
                    </>
                ) : (
                    <>
                        <Link to="/" className="navbar-button">
                            <HomeIcon className="navbar-icon" />
                            <span className="navbar-label">Home</span>
                        </Link>
                        <Link to="/login">Login</Link>
                        <Link to="/register">Register</Link>
                    </>
                )}
            </div>
            <FloatingButton />
        </nav>
    );
}

export default Navbar;
