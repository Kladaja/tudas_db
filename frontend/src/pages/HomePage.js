import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function HomePage() {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        axios
            .get("http://localhost:3001/articles")
            .then((response) => {
                setArticles(response.data);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching articles:", error);
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
                                <h2>{article.TITLE}</h2>
                                <p className="article-meta">
                                    <span>
                                        <strong>Author:</strong> {article.AUTHOR || "Unknown"}
                                    </span>
                                    <span>
                                        <strong>Date:</strong>{" "}
                                        {new Date(article.CREATION_DATE).toLocaleDateString()}
                                    </span>
                                    <span>
                                        <strong>Category:</strong>{" "}
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
                        ))}
                    </section>
                </section>

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
            </main>
        </>
    );
}

export default HomePage;
