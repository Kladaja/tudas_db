import React, { useState } from "react";

function RegisterPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        role: "user",
        field: "",
        scientific_rank: ""
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Regisztrációs adatok:", formData);
        // TODO: Backend hívás ide
    };

    return (
        <div className="page-container centered">
            <h2>Regisztráció</h2>
            <form onSubmit={handleSubmit} className="form">
                <input name="name" placeholder="Full name" onChange={handleChange} required />
                <input name="email" type="email" placeholder="Email" onChange={handleChange} required />
                <input name="password" type="password" placeholder="Password" onChange={handleChange} required />

                <label>
                    Role:
                    <select name="role" onChange={handleChange} value={formData.role}>
                        <option value="user">User</option>
                        <option value="lector">Lector</option>
                        <option value="admin">Admin</option>
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
