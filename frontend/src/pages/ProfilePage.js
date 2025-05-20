import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { Link } from "react-router-dom";
import axios from "axios";
import { ReactComponent as EditIcon } from '../assets/edit.svg';
import { ReactComponent as DeleteIcon } from '../assets/delete.svg';
import Unauthorized from "../components/Unauthorized";
import NotFound from "../components/NotFound";

function ProfilePage() {
    const { user } = useAuth();
    const { id } = useParams();
    const [profile, setProfile] = useState(null);
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isLector, setIsLector] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                if (!id) {
                    if (user.role === 'lector') {
                        const lectorRes = await axios.get(`http://localhost:3001/lectors/${user.userID}`);
                        const lectorData = lectorRes.data;
                        const normalizedLector = {
                            userID: lectorData.USERID,
                            name: lectorData.NAME,
                            email: lectorData.EMAIL,
                            role: 'lector',
                            FIELD: lectorData.FIELD,
                            SCIENTIFIC_RANK: lectorData.SCIENTIFIC_RANK,
                            CONFIRMED: lectorData.CONFIRMED
                        };
                        setProfile(normalizedLector);
                        setIsLector(true);
                    } else {
                        setProfile(user);
                        setIsLector(false);
                    }
                    return;
                }
                try {
                    const userRes = await axios.get(`http://localhost:3001/users/${id}`);
                    const userData = userRes.data;
                    const normalizedUser = {
                        userID: userData.USERID,
                        name: userData.NAME,
                        email: userData.EMAIL,
                        role: userData.ROLE,
                        confirmed: userData.CONFIRMED
                    };
                    setProfile(normalizedUser);
                    setIsLector(false);
                } catch {
                    const lectorRes = await axios.get(`http://localhost:3001/lectors/${id}`);
                    const lectorData = lectorRes.data;
                    const normalizedLector = {
                        userID: lectorData.USERID,
                        name: lectorData.NAME,
                        email: lectorData.EMAIL,
                        role: 'lector',
                        FIELD: lectorData.FIELD,
                        SCIENTIFIC_RANK: lectorData.SCIENTIFIC_RANK,
                        CONFIRMED: lectorData.CONFIRMED
                    };
                    setProfile(normalizedLector);
                    setIsLector(true);
                }
            } catch (err) {
                setProfile(null);
            } finally {
                setLoading(false);
            }
        };
        fetchProfile();
    }, [id, user]);

    useEffect(() => {
        const fetchArticles = async (authorID) => {
            try {
                const response = await axios.get(`http://localhost:3001/articles/by-author/${authorID}`);
                setArticles(response.data);
            } catch (err) {
                setArticles([]);
            }
        };
        if (profile && profile.userID) {
            fetchArticles(profile.userID);
        }
    }, [profile]);

    if (!user) return <Unauthorized />;
    if (loading) return <p>Loading profile...</p>;
    if (!profile) return <NotFound />;

    const handleToggleConfirm = async () => {
        if (!profile) {
            alert("Profile is null or undefined!");
            return;
        }
        if (!profile.userID) {
            return;
        }
        try {
            const newStatus = profile.CONFIRMED === 1 ? 0 : 1;
            await axios.patch(`http://localhost:3001/lectors/confirm/${profile.userID}`, {
                confirmed: newStatus
            });
            setProfile((prev) => ({
                ...prev,
                CONFIRMED: newStatus
            }));
        } catch (error) {
            alert("Could not update lector status.");
        }
    };

    const handleEditArticle = (id) => { navigate(`/article/edit/${id}`); };

    const handleDeleteArticle = async (id) => {
        const confirmed = window.confirm("Are you sure you want to delete this article?");
        if (!confirmed) return;
        try {
            await axios.delete(`http://localhost:3001/articles/delete/${id}?authorID=${user.userID}`);
            setArticles((prev) => prev.filter((a) => a.ARTICLEID !== id));
        } catch (error) {
            alert("Failed to delete the article. Please try again.");
        }
    };

    return (
        <div className="page-container">
            <h2 className="profile-title">Profile</h2>
            {profile && (
                <div className="main-content profile-details">
                    <p className="profile-field">
                        <strong className="profile-label">Name:</strong> {profile.name}
                    </p>
                    <p className="profile-field">
                        <strong className="profile-label">Email:</strong> {profile.email}
                    </p>
                    <p className="profile-field">
                        <strong className="profile-label">Role:</strong>
                        <span className={`role-pill ${profile.role.toLowerCase()}`}>
                            {profile.role}
                        </span>
                    </p>
                    {isLector ? (
                        <>
                            <p className="profile-field">
                                <strong className="profile-label">Field:</strong> {profile.FIELD}
                            </p>
                            <p className="profile-field">
                                <strong className="profile-label">Scientific Rank:</strong> {profile.SCIENTIFIC_RANK}
                            </p>
                            <p className="profile-field">
                                <strong className="profile-label">Status:</strong>{" "}
                                {profile.CONFIRMED === 1 ? (
                                    <span className="confirmed-pill">Confirmed</span>
                                ) : (
                                    <span className="requested-pill">Requested</span>
                                )}
                                {user.role === "admin" && (
                                    < button
                                        className="status-toggle-button"
                                        onClick={handleToggleConfirm}
                                        style={{ marginLeft: "10px" }}
                                    >
                                        {profile.CONFIRMED === 1 ? "Revoke Lector Status" : "Confirm Lector Status"}
                                    </button>
                                )}
                            </p>
                        </>
                    ) : null}
                </div>
            )
            }

            <h3>Articles</h3>

            {
                loading ? (
                    <p>Loading...</p>
                ) : (
                    <section className="articles-grid">
                        {articles.length > 0 ? (
                            articles.map((article) => (
                                <article key={article.ARTICLEID} className="article-card">
                                    <div className="article-header">
                                        <h1 className="article-card-title">{article.TITLE}</h1>
                                        <div className="article-buttons">
                                            <button
                                                className="article-edit-button"
                                                onClick={() => handleEditArticle(article.ARTICLEID)}
                                                aria-label="Edit article"
                                                title="Edit article"
                                            >
                                                <EditIcon className="article-edit-icon" />
                                                <span className="article-edit-label">Edit Article</span>
                                            </button>
                                            <button
                                                className="article-delete-button"
                                                onClick={() => handleDeleteArticle(article.ARTICLEID)}
                                                aria-label="Edit article"
                                                title="Edit article"
                                            >
                                                <DeleteIcon className="article-delete-icon" />
                                                <span className="article-delete-label">Delete Article</span>
                                            </button>
                                        </div>
                                    </div>
                                    <p className="article-meta">
                                        <span>
                                            <strong>Date:</strong>{" "}
                                            {new Date(article.CREATION_DATE).toLocaleDateString()}
                                        </span>
                                        <span>
                                            <strong>Categories:</strong>{" "}
                                            {article.CATEGORIES && article.CATEGORIES.length > 0 ? (
                                                article.CATEGORIES.map((category, index) => (
                                                    <span key={index} className="category-item">
                                                        {category}
                                                        {index < article.CATEGORIES.length - 1 && <span className="category-separator">, </span>}
                                                    </span>
                                                ))
                                            ) : (
                                                <span>None</span>
                                            )}
                                        </span>
                                    </p>

                                    {article.KEYWORDS && article.KEYWORDS.length > 0 && (
                                        <div className="keyword-tags">
                                            {article.KEYWORDS.map((keyword, index) => (
                                                <span key={index} className="keyword-tag">
                                                    {keyword}
                                                </span>
                                            ))}
                                        </div>
                                    )}

                                    <p className="article-content">
                                        {article.CURRICULUM.length > 300
                                            ? `${article.CURRICULUM.substring(0, 300)}...`
                                            : article.CURRICULUM}
                                    </p>
                                    <Link to={`/article/${article.ARTICLEID}`} className="read-more-link">
                                        Read more
                                    </Link>
                                </article>
                            ))
                        ) : (
                            <p>No articles yet.</p>
                        )}
                    </section>
                )
            }
        </div >
    );
}

export default ProfilePage;