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
            if (!id) {
                setProfile(user);
                setLoading(false);
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
                };

                setProfile(normalizedUser);
                setIsLector(false);
            } catch {
                try {
                    const lectorRes = await axios.get(`http://localhost:3001/lectors/${id}`);
                    const lectorData = lectorRes.data;
                    const normalizedLector = {
                        userID: lectorData.LECTORID,
                        name: lectorData.NAME,
                        email: lectorData.EMAIL,
                        role: 'lector',
                        FIELD: lectorData.FIELD,
                        SCIENTIFIC_RANK: lectorData.SCIENTIFIC_RANK,
                    };

                    setProfile(normalizedLector);
                    setIsLector(true);
                } catch (err) {
                    console.error("Profile not found.");
                    setProfile(null);
                }
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
                console.error("Failed to load articles");
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

    const handleEditArticle = (id) => { navigate(`/article/edit/${id}`); };

    const handleDeleteArticle = async (id) => {
        const confirmed = window.confirm("Are you sure you want to delete this article?");
        if (!confirmed) return;
        try {
            await axios.delete(`http://localhost:3001/articles/delete/${id}?authorID=${user.userID}`);
            setArticles((prev) => prev.filter((a) => a.ARTICLEID !== id));
        } catch (error) {
            console.error("Failed to delete article:", error);
            alert("Failed to delete the article. Please try again.");
        }
    };

    return (
        <div className="page-container">
            <h2>Profile</h2>
            {profile && <div className="main-content">
                <p><strong>Name: </strong>{profile.name}</p>
                <p><strong>Email: </strong>{profile.email}</p>
                <p><strong>Role: </strong>{profile.role}</p>
                {isLector ? (
                    <>
                        <p><strong>Field:</strong> {profile.FIELD}</p>
                        <p><strong>Scientific Rank:</strong> {profile.SCIENTIFIC_RANK}</p>
                    </>
                ) : <></>}
            </div>}

            <h3>Articles</h3>

            {loading ? (
                <p>Loading...</p>
            ) : (
                <section className="articles-grid">
                    {articles.length > 0 ? (
                        articles.map((article) => (
                            <article key={article.ARTICLEID} className="article-card">
                                <div className="article-header">
                                    <h1>{article.TITLE}</h1>
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
            )}
        </div>
    );
}

export default ProfilePage;