import React, { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate, useParams } from 'react-router-dom';
import Unauthorized from '../components/Unauthorized';

function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}

function ArticleFormPage() {
    const { user } = useAuth();
    const [article, setArticle] = useState({
        title: '',
        content: '',
        keywords: [],
        categories: []
    });
    const [newKeyword, setNewKeyword] = useState('');
    const [newCategory, setNewCategory] = useState('');
    const [existingKeywords, setExistingKeywords] = useState([]);
    const [existingCategories, setExistingCategories] = useState([]);
    const { id } = useParams();
    const navigate = useNavigate();

    function normalizeArray(arr) {
        const seen = new Set();
        return arr.filter(item => {
            const norm = item.toLowerCase();
            if (seen.has(norm)) return false;
            seen.add(norm);
            return true;
        }).map(capitalize);
    }

    useEffect(() => {
        if (id) {
            fetch(`http://localhost:3001/articles/${id}`)
                .then(res => res.json())
                .then(data => {
                    setArticle({
                        title: data.TITLE,
                        content: data.CURRICULUM,
                        keywords: normalizeArray(data.KEYWORDS),
                        categories: normalizeArray(data.CATEGORIES)
                    });
                })
                .catch(err => console.error("Error loading article for editing:", err));
        }
    }, [id]);

    useEffect(() => {
        fetch('http://localhost:3001/keywords')
            .then(res => res.json())
            .then(data => setExistingKeywords(normalizeArray(data)))

        fetch('http://localhost:3001/categories')
            .then(res => res.json())
            .then(data => setExistingCategories(normalizeArray(data)))
    }, []);

    if (!user) return <Unauthorized />;

    const addKeyword = () => {
        const cap = capitalize(newKeyword);
        if (cap && !article.keywords.includes(cap)) {
            setArticle({ ...article, keywords: [...article.keywords, cap] });

            if (!existingKeywords.includes(cap)) {
                setExistingKeywords(prev => [...prev, cap]);
            }

            setNewKeyword('');
        }
    };

    const addCategory = () => {
        const cap = capitalize(newCategory);
        if (cap && !article.categories.includes(cap)) {
            setArticle({ ...article, categories: [...article.categories, cap] });

            if (!existingCategories.includes(cap)) {
                setExistingCategories(prev => [...prev, cap]);
            }

            setNewCategory('');
        }
    };

    const toggleKeyword = (kw) => {
        const selected = article.keywords.includes(kw)
            ? article.keywords.filter(k => k !== kw)
            : [...article.keywords, kw];
        setArticle({ ...article, keywords: selected });
    };

    const toggleCategory = (ct) => {
        const selected = article.categories.includes(ct)
            ? article.categories.filter(c => c !== ct)
            : [...article.categories, ct];
        setArticle({ ...article, categories: selected });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const payload = {
            title: article.title,
            content: article.content,
            keywords: article.keywords,
            categories: article.categories,
            authorID: user.userID
        };
        try {
            const url = id
                ? `http://localhost:3001/articles/update/${id}`
                : 'http://localhost:3001/articles/add'

            const method = id ? 'PUT' : 'POST';
            const response = await fetch(url, {
                method,
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });
            if (response.ok) {
                navigate(`/profile`);
            } else {
                const error = await response.json();
                alert("Error: " + error.error);
            }
        } catch (err) {
            console.error("Submit error:", err);
        }
    };


    return (
        <main className="page-container centered">
            <div>
                <h2>{id ? "Edit Article" : "Create Article"}</h2>

                <form onSubmit={handleSubmit} className="form">
                    <div className="form-group">
                        <label htmlFor="title"><strong>Title:</strong></label>
                        <input
                            type="text"
                            id="title"
                            value={article.title}
                            onChange={(e) => setArticle({ ...article, title: e.target.value })}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="content"><strong>Content:</strong></label>
                        <textarea
                            id="content"
                            rows={10}
                            value={article.content}
                            onChange={(e) => setArticle({ ...article, content: e.target.value })}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label><strong>Keywords:</strong></label>
                        <div className="keyword-tags">
                            {existingKeywords.map((kw) => (
                                <span
                                    key={kw}
                                    className={`keyword-tag ${article.keywords.includes(kw) ? 'selected' : ''}`}
                                    onClick={() => toggleKeyword(kw)}
                                    style={{ cursor: 'pointer' }}
                                >
                                    {kw}
                                </span>
                            ))}
                        </div>
                        <input
                            type="text"
                            placeholder="Add new keyword"
                            value={newKeyword}
                            onChange={(e) => setNewKeyword(e.target.value)}
                        />
                        <button type="button" onClick={addKeyword}>Add Keyword</button>
                    </div>

                    <div className="form-group">
                        <label><strong>Categories:</strong></label>
                        <ul className="category-list">
                            {existingCategories.map((cat) => (
                                <li
                                    key={cat}
                                    className={`category-tag ${article.categories.includes(cat) ? 'selected' : ''}`}
                                    onClick={() => toggleCategory(cat)}
                                    style={{ cursor: 'pointer' }}
                                >
                                    <span className="category-tag-link">{cat}</span>
                                </li>
                            ))}
                        </ul>
                        <input
                            type="text"
                            placeholder="Add new category"
                            value={newCategory}
                            onChange={(e) => setNewCategory(e.target.value)}
                        />
                        <button type="button" onClick={addCategory}>Add Category</button>
                    </div>

                    <button type="submit">Submit</button>
                </form>
            </div>
        </main>
    );
}

export default ArticleFormPage;