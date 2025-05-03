import React, { useState } from "react";
import axios from "axios";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

function LoginPage() {
    const [credentials, setCredentials] = useState({ email: "", password: "" });
    const [error, setError] = useState("");
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        try {
            const response = await axios.post("http://localhost:3001/users/login", credentials);
            login(response.data);
            navigate("/profile");
        } catch (err) {
            setError("Wrong email or password!");
        }
    };

    return (
        <div className="page-container centered">
            <h2>Login</h2>
            <form onSubmit={handleSubmit} className="form">
                <input name="email" type="email" placeholder="Email" onChange={handleChange} required />
                <input name="password" type="password" placeholder="Password" onChange={handleChange} required />
                <button type="submit">Submit</button>
                {error && <div className="error-msg">{error}</div>}
            </form>
        </div>
    );
}

export default LoginPage;
