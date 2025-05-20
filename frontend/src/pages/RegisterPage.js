import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function RegisterPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        role: "user",
        field: "",
        scientific_rank: ""
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:3001/users/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });
            const data = await response.json();
            if (response.ok) {
                navigate("/login")
            } else {
                alert(`Hiba: ${data.error}`);
            }
        } catch (err) {
            console.error("Connection error:", err);
        }
    };

    return (
        <div className="page-container centered">
            <h2>Register</h2>
            <form onSubmit={handleSubmit} className="form form-narrow">
                <input name="name" placeholder="Full name" onChange={handleChange} required />
                <input name="email" type="email" placeholder="Email" onChange={handleChange} required />
                <input name="password" type="password" placeholder="Password" onChange={handleChange} required />

                <label>
                    Role:
                    <select name="role" onChange={handleChange} value={formData.role}>
                        <option value="user">User</option>
                        <option value="lector">Lector</option>
                    </select>
                </label>

                {formData.role === "lector" && (
                    <>
                        <input name="field" placeholder="Field" onChange={handleChange} required />
                        <input name="scientific_rank" placeholder="Scientific rank" onChange={handleChange} required />
                    </>
                )}

                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default RegisterPage;