import React from 'react';
import UnauthorizedImage from '../assets/401.jpg';

function Unauthorized() {
    return (
        <div className="error-container">
            <img src={UnauthorizedImage} alt="401 Unauthorized" className="error-image" />
            <h1 className="error-title">401 - Unauthorized</h1>
            <p className="error-message">You need to log in to access this page.<br />Please sign in and try again.</p>
        </div>
    );
}

export default Unauthorized;