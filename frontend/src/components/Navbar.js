import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import FloatingButton from './FloatingButton';

function Navbar() {
    const { user, logout } = useAuth();

    const handleLogout = () => {
        logout();
        window.location.href = '/';
    };

    return (
        <nav className="navbar">
            <div className="nav-left">
                <Link to="/" className="nav-logo">ArticlePortal</Link>
            </div>
            <div className="nav-right">
                {user ? (
                    <>
                        <Link to="/profile">Profile</Link>
                        <Link to="#" onClick={handleLogout}>Logout</Link>
                    </>
                ) : (
                    <>
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
