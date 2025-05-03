import React, { useState } from 'react';

function CreateArticlePage() {
    const [article, setArticle] = useState({
        title: '',
        content: '',
    });

    const handleChange = (e) => {
        setArticle({ ...article, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Article submitted:', article);
    };

    return (
        <main className="page-container">
            <div className="article-full-page">
                <h2>Create New Article</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="title">Title</label>
                        <input
                            type="text"
                            id="title"
                            name="title"
                            value={article.title}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="content">Content</label>
                        <textarea
                            id="content"
                            name="content"
                            value={article.content}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </main>
    );
}

export default CreateArticlePage;
