import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function ArticlePage() {
    const { id } = useParams();
    const [article, setArticle] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get(`http://localhost:3001/articles/${id}`)
            .then((res) => {
                setArticle(res.data);
                setLoading(false);
            })
            .catch((err) => {
                console.error("Error fetching article:", err);
                setLoading(false);
            });
    }, [id]);

    if (loading) return <p>Loading...</p>;
    if (!article) return <p>Article not found.</p>;

    return (
        <main className="page-container">
            <div className="article-full-page">
                <h1>{article.TITLE}</h1>
                <div className="article-meta">
                    <span><strong>Author:</strong> {article.AUTHOR}</span>
                    <span><strong>Date:</strong> {new Date(article.CREATION_DATE).toLocaleDateString()}</span>
                </div>

                <div className="keyword-tags">
                    {article.KEYWORDS && article.KEYWORDS.map((kw, index) => (
                        <span className="keyword-tag" key={index}>{kw}</span>
                    ))}
                </div>

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


                <div className="article-content">
                    {article.CURRICULUM.split('\n').map((paragraph, idx) => (
                        <p key={idx}>{paragraph.trim()}</p>
                    ))}
                </div>
            </div>
        </main>
    );
}

export default ArticlePage;
