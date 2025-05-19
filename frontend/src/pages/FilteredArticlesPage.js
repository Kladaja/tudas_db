import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";

function FilteredArticlesPage({ filterType }) {
    const { category, keyword } = useParams();
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios
            .get("http://localhost:3001/articles")
            .then((response) => {
                const all = response.data;
                const filtered = all.filter(article => {
                    if (filterType === 'category') {
                        return article.CATEGORIES?.includes(category);
                    } else if (filterType === 'keyword') {
                        return article.KEYWORDS?.includes(keyword);
                    }
                    return false;
                });

                setArticles(filtered);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching articles:", error);
                setError("Failed to load articles.");
                setLoading(false);
            });
    }, [category, keyword, filterType]);

    return (
        <div className="page-container">
            <h1>Articles by {filterType === 'category' ? `Category: ${category}` : `Keyword: ${keyword}`}</h1>

            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            {!loading && articles.length === 0 && <p>No articles found.</p>}

            <section className="articles-grid">
                {articles.map((article) => (
                    <article key={article.ARTICLEID} className="article-card">
                        <h2>{article.TITLE}</h2>
                        <p className="article-meta">
                            <p><strong>Author:</strong> {article.AUTHOR || "Unknown"}</p>
                            <p><strong>Date:</strong> {new Date(article.CREATION_DATE).toLocaleDateString()}</p>
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
                                    {article.KEYWORDS.map((k, index) => (
                                        <span key={index} className="keyword-tag">{k}</span>
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
                ))
                }
            </section >
        </div >
    );
}

export default FilteredArticlesPage;
