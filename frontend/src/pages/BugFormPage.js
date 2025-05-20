import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../contexts/AuthContext";
import Unauthorized from "../components/Unauthorized";

function BugFormPage() {
    const { articleID, bugID } = useParams();
    const [articleTitle, setArticleTitle] = useState("");
    const { user } = useAuth();
    const navigate = useNavigate();

    const [description, setDescription] = useState("");
    const [state, setState] = useState("");

    useEffect(() => {
        axios
            .get(`http://localhost:3001/articles/${articleID}`)
            .then((res) => {
                setArticleTitle(res.data.TITLE);
                setState("open");
            })
            .catch((err) => {
                setArticleTitle(" - ");
            });
        if (bugID) {
            axios
                .get(`http://localhost:3001/bugs/${bugID}`)
                .then((res) => {
                    const bug = res.data;
                    console.log(res.data)
                    setDescription(res.data.description);
                    setState(bug.STATE);
                })
                .catch((err) => {
                    console.error("Failed to load bug", err);
                });
        }
        console.log("BugFormPage loaded, articleID:", articleID, "bugID:", bugID);
    }, [articleID, bugID]);


    if (!user) return <Unauthorized />;

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (bugID) {
                await axios.put(`http://localhost:3001/bugs/update/${bugID}`, {
                    description,
                    state,
                });
            } else {
                await axios.post(`http://localhost:3001/bugs/add`, {
                    articleID,
                    description,
                    state: "open",
                    reporterID: user.userID,
                });
            }
            navigate(`/article/${articleID}`);
        } catch (err) {
            console.error("Failed to save bug", err);
            alert("Failed to save bug. Please try again.");
        }
    };

    return (
        <main className="page-container centered">
            <div>
                <h2>{bugID ? "Edit Bug" : "Report a Bug"}</h2>
                {articleTitle ? <p><strong>Article:</strong> {articleTitle}</p> : <></>}

                <p className="form-instructions">
                    You are about to report a bug related to this article. Please describe the issue clearly and concisely so that it can be reviewed and resolved by the authors or moderators.
                </p>

                <form onSubmit={handleSubmit} className="form">
                    <div className="form-group">
                        <label htmlFor="description">Bug Description</label>
                        <textarea
                            id="description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            required
                            rows={6}
                            placeholder="Describe the bug in detail..."
                        />
                    </div>

                    {bugID && state && state.length > 0 && (
                        <div className="form-group">
                            <label htmlFor="state">Status:</label>
                            <select
                                id="state"
                                name="state"
                                value={state}
                                onChange={(e) => setState(e.target.value)}
                            >
                                <option value="open">Open</option>
                                <option value="pending">Pending</option>
                                <option value="resolved">Resolved</option>
                                <option value="archived">Archived</option>
                            </select>
                        </div>
                    )}

                    <button type="submit">
                        {bugID ? "Update Bug" : "Submit Bug"}
                    </button>
                </form>
            </div>
        </main>
    );
}

export default BugFormPage;