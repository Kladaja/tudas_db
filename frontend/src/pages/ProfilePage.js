import React, { useEffect, useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import Forbidden from "../components/Forbidden";
import { Link } from "react-router-dom";
import axios from "axios";

function ProfilePage() {
    const { user } = useAuth();
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (user) {
            axios
                .get(`http://localhost:3001/articles/by-author/${user.userID}`)
                .then((response) => {
                    setArticles(response.data);
                    setLoading(false);
                })
                .catch((err) => {
                    console.error("Error loading user's articles:", err);
                    setLoading(false);
                });
        }
    }, [user]);

    if (!user) {
        return <Forbidden />;
    }

    return (
        <div className="page-container">
            <h2>Profile</h2>
            <div className="main-content">
                <p><strong>Name:</strong> {user.name}</p>
                <p><strong>Email:</strong> {user.email}</p>
                <p><strong>Role:</strong> {user.role}</p>
            </div>

            <h3>My Articles</h3>

            {loading ? (
                <p>Loading...</p>
            ) : (
                <section className="articles-grid">
                    {articles.length > 0 ? (
                        articles.map((article) => (
                            <article key={article.ARTICLEID} className="article-card">
                                <h2>{article.TITLE}</h2>
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
                                <Link to={`/edit-article/${article.ARTICLEID}`} className="edit-button">
                                    <span role="img" aria-label="Edit" style={{ marginRight: '4px' }}>✏️</span> Edit
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
