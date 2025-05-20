import React, { useEffect, useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import NotFound from '../components/NotFound';
import { ReactComponent as EditIcon } from '../assets/edit.svg';
import { ReactComponent as DeleteIcon } from '../assets/delete.svg';
import { ReactComponent as BugIcon } from '../assets/bug.svg';
import { ReactComponent as ViewIcon } from '../assets/view.svg';

function ArticlePage() {
    const { user } = useAuth();
    const { id } = useParams();
    const [article, setArticle] = useState(null);
    const [bugs, setBugs] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:3001/articles/${id}`)
            .then((res) => {
                setArticle(res.data);
                setLoading(false);
            })
            .catch((err) => {
                setLoading(false);
            });
        axios.get(`http://localhost:3001/bugs/article/${id}`)
            .then((res) => {
                setBugs(res.data);
            })
            .catch((err) => {
                console.error("Error fetching bugs:", err);
            });
    }, [id]);

    if (loading) return <p>Loading...</p>;
    if (!article) return <NotFound />;

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

    const handleReportIssue = (id) => { navigate(`/bug/add/${id}`); };

    const handleViewBug = (bugID) => { navigate(`/bug/edit/${id}/${bugID}`); };

    return (
        <main className="page-container">
            <div className="article-full-page">
                <div className="article-header">
                    <h1 className="article-title">{article.TITLE}</h1>
                    {user && (
                        <div className="article-buttons">
                            {user && article && article.AUTHOR_ID && user.userID === article.AUTHOR_ID && (
                                <button
                                    className="article-edit-button"
                                    onClick={() => handleEditArticle(id)}
                                    aria-label="Edit article"
                                    title="Edit article"
                                >
                                    <EditIcon className="article-edit-icon" />
                                    <span className="article-edit-label">Edit Article</span>
                                </button>
                            )}
                            <button
                                className="article-delete-button"
                                onClick={() => handleDeleteArticle(id)}
                                aria-label="Delete article"
                                title="Delete article"
                            >
                                <DeleteIcon className="article-delete-icon" />
                                <span className="article-delete-label">Delete Article</span>
                            </button>
                            <button
                                className="article-bug-button"
                                onClick={() => handleReportIssue(id)}
                                aria-label="Report issue"
                                title="Report issue"
                            >
                                <BugIcon className="article-bug-icon" />
                                <span className="article-bug-label">Report Issue</span>
                            </button>
                        </div>
                    )}
                </div>

                <div className="article-meta">
                    {article && article.AUTHOR_NAME && <span><strong>Author:</strong> {article.AUTHOR_NAME}</span>}
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

                {user && bugs.length > 0 && (
                    <section className="bug-section">
                        <h2>Reported Issues</h2>
                        <ul className="bug-list">
                            {bugs.map((bug) => (
                                <li key={bug.bugID} className="bug-item">
                                    <BugIcon className={`bug-icon bug-icon-${bug.state}`} />
                                    <span className="bug-description">{bug.description}</span>
                                    <div className="bug-item-rigth">
                                        <span className={`bug-badge bug-${bug.state}`}>
                                            {bug.state}
                                        </span>
                                        <button
                                            className="bug-view-button"
                                            onClick={() => handleViewBug(bug.bugID)}
                                            aria-label="View issue"
                                            title="View issue"
                                        >
                                            <ViewIcon className="bug-view-icon" />
                                            <span className="bug-view-label">View Issue</span>
                                        </button>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </section>
                )}
            </div>
        </main >
    );
}

export default ArticlePage;