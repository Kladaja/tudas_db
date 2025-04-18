import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

function Navbar() {
    const { user, logout } = useAuth();

    return (
        <nav className="navbar">
            <div className="nav-left">
                <Link to="/" className="nav-logo">ArticlePortal</Link>
            </div>
            <div className="nav-right">
                {user ? (
                    <>
                        <Link to="/profile">Profile</Link>
                        <Link>Logout</Link>
                    </>
                ) : (
                    <>
                        <Link to="/login">Login</Link>
                        <Link to="/register">Register</Link>
                    </>

                )}
            </div>
        </nav>
    );
}

export default Navbar;
