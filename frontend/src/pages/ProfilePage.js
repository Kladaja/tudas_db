import React from "react";
import { useAuth } from "../contexts/AuthContext";

function ProfilePage() {
    const { user } = useAuth();

    if (!user) {
        return <div className="page-container">Kérlek, jelentkezz be a profil megtekintéséhez.</div>;
    }

    return (
        <div className="page-container">
            <h2>Profile</h2>
            <div className="main-content">
                <p><strong>Name:</strong> {user.name}</p>
                <p><strong>Email:</strong> {user.email}</p>
                <p><strong>Role:</strong> {user.role}</p>
            </div>
        </div >
    );
}

export default ProfilePage;
