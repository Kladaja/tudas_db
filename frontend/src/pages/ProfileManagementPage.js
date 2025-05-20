import React, { useEffect, useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Unauthorized from "../components/Unauthorized";
import { ReactComponent as ViewIcon } from '../assets/view.svg';

function ProfileManagementPage() {
    const { user } = useAuth();
    const navigate = useNavigate();
    const [users, setUsers] = useState([]);
    const [lectors, setLectors] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [showLectors, setShowLectors] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [usersRes, lectorsRes] = await Promise.all([
                    axios.get("http://localhost:3001/users"),
                    axios.get("http://localhost:3001/lectors")
                ]);
                setUsers(usersRes.data);
                setLectors(lectorsRes.data);
                setLoading(false);
            } catch (err) {
                console.error("Failed to load profiles:", err);
                setError("Failed to load profile data.");
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (!user) return <Unauthorized />;

    const handleViewUser = (userID) => { navigate(`/profile/${userID}`); };

    const activeList = showLectors ? lectors : users;

    return (
        <main className="page-container">
            <section className="main-content">
                <h1>Profile Management</h1>

                <div className="toggle-buttons">
                    <button
                        className={!showLectors ? "toggle-btn active" : "toggle-btn"}
                        onClick={() => setShowLectors(false)}
                    >
                        Users
                    </button>
                    <button
                        className={showLectors ? "toggle-btn active" : "toggle-btn"}
                        onClick={() => setShowLectors(true)}
                    >
                        Lectors
                    </button>
                </div>

                {loading && <p className="info-text">Loading...</p>}
                {error && <p className="error-text">{error}</p>}

                {!loading && !error && (
                    <div className="table-wrapper">
                        <table className="custom-table">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Email</th>
                                    {showLectors ? (
                                        <>
                                            <th>Field</th>
                                            <th>Rank</th>
                                        </>
                                    ) : (
                                        <>
                                            <th>Role</th>
                                            <th>Registered</th>
                                        </>
                                    )}
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {activeList.map((item) => (
                                    <tr key={item.USERID}>
                                        <td>{item.NAME}</td>
                                        <td>{item.EMAIL}</td>
                                        {showLectors ? (
                                            <>
                                                <td>{item.FIELD}</td>
                                                <td>{item.SCIENTIFIC_RANK}</td>
                                            </>
                                        ) : (
                                            <>
                                                <td>{item.ROLE}</td>
                                                <td>{new Date(item.REGISTRATION_DATE).toLocaleDateString()}</td>
                                            </>
                                        )}
                                        <td>
                                            <button
                                                className="table-view-button"
                                                onClick={() => handleViewUser(item.USERID)}
                                                aria-label="View user"
                                                title="View user"
                                            >
                                                <ViewIcon className="table-view-icon" />
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </section>
        </main>
    );
}

export default ProfileManagementPage;