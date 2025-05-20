import React, { useEffect, useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { ReactComponent as EditIcon } from '../assets/edit.svg';
import { ReactComponent as DeleteIcon } from '../assets/delete.svg';

function HomePage() {
    const { user } = useAuth();
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        axios
            .get("http://localhost:3001/articles")
            .then((response) => {
                setArticles(response.data);
                setLoading(false);
            })
            .catch((error) => {
                setError("Failed to load articles.");
                setLoading(false);
            });
    }, []);

    const filteredArticles = articles.filter((article) =>
        article.TITLE.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const allCategories = articles.flatMap(article => article.CATEGORIES || []);
    const uniqueCategories = [...new Set(allCategories)].sort();

    const allKeywords = articles.flatMap(article => article.KEYWORDS || []);
    const uniqueKeywords = [...new Set(allKeywords)].sort();

    const handleEditArticle = (id) => { navigate(`/article/edit/${id}`); };

    const handleDeleteArticle = async (id) => {
        const confirmed = window.confirm("Are you sure you want to delete this article?");
        if (!confirmed) return;
        try {
            await axios.delete(`http://localhost:3001/articles/delete/${id}?authorID=${user.userID}`);
        } catch (error) {
            console.error("Failed to delete article:", error);
            alert("Failed to delete the article. Please try again.");
        }
    };

    return (
        <>
            <main className="page-container with-sidebars">
                <aside className="sidebar sidebar-left">
                    <h2>Categories</h2>
                    <ul className="category-list">
                        {uniqueCategories.length > 0 ? (
                            uniqueCategories.map((category, index) => (
                                <li key={index}>
                                    <Link to={`/category/${encodeURIComponent(category)}`} className="category-link">
                                        {category}
                                    </Link>
                                </li>
                            ))
                        ) : (
                            <p>No categories available.</p>
                        )}
                    </ul>
                </aside>

                <section className="main-content">
                    <h1 className="page-title">Latest Articles</h1>

                    <input
                        type="search"
                        placeholder="Search articles..."
                        className="search-input"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        aria-label="Search articles"
                    />

                    {loading && <p className="info-text">Loading...</p>}
                    {error && <p className="error-text">{error}</p>}

                    {!loading && !error && filteredArticles.length === 0 && (
                        <p className="info-text">No articles found for your search.</p>
                    )}

                    <section className="articles-grid">
                        {filteredArticles.map((article) => (
                            <article key={article.ARTICLEID} className="article-card">
                                <div className="article-card-header">
                                    <h2>{article.TITLE}</h2>
                                    {user && (
                                        <div className="article-buttons">
                                            {user && article && article.AUTHOR_ID && user.userID === article.AUTHOR_ID && (
                                                <button
                                                    className="article-edit-button"
                                                    onClick={() => handleEditArticle(article.ARTICLEID)}
                                                    aria-label="Edit article"
                                                    title="Edit article"
                                                >
                                                    <EditIcon className="article-edit-icon" />
                                                    <span className="article-edit-label">Edit Article</span>
                                                </button>
                                            )}
                                            <button
                                                className="article-delete-button"
                                                onClick={() => handleDeleteArticle(article.ARTICLEID)}
                                                aria-label="Delete article"
                                                title="Delete article"
                                            >
                                                <DeleteIcon className="article-delete-icon" />
                                                <span className="article-delete-label">Delete Article</span>
                                            </button>
                                        </div>
                                    )}
                                </div>
                                <p className="article-meta">
                                    <span>
                                        <strong>Author:</strong> {article.AUTHOR || "Unknown"}
                                    </span>
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

                                {
                                    article.KEYWORDS && article.KEYWORDS.length > 0 && (
                                        <div className="keyword-tags">
                                            {article.KEYWORDS.map((keyword, index) => (
                                                <span key={index} className="keyword-tag">
                                                    {keyword}
                                                </span>
                                            ))}
                                        </div>
                                    )
                                }

                                < p className="article-content" >
                                    {
                                        article.CURRICULUM.length > 300
                                            ? `${article.CURRICULUM.substring(0, 300)}...`
                                            : article.CURRICULUM
                                    }
                                </p>
                                <Link to={`/article/${article.ARTICLEID}`} className="read-more-link">
                                    Read more
                                </Link>
                            </article>
                        ))}
                    </section>
                </section >

                <aside className="sidebar sidebar-right">
                    <h2>Keywords</h2>
                    {uniqueKeywords.length > 0 ? (
                        <div className="keyword-tags sidebar-keywords">
                            {uniqueKeywords.map((keyword, index) => (
                                <span key={index} className="keyword-tag">
                                    <Link to={`/keyword/${encodeURIComponent(keyword)}`}>
                                        {keyword}
                                    </Link>
                                </span>
                            ))}
                        </div>
                    ) : (
                        <p>No keywords available.</p>
                    )}
                </aside>
            </main >
        </>
    );
}

export default HomePage;
