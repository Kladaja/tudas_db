import React from 'react';
import ForbiddenImage from '../assets/403.jpg';

function Forbidden() {
    return (
        <div className="error-container">
            <img src={ForbiddenImage} alt="403 Forbidden" className="error-image" />
            <h1 className="error-title">403 - Forbidden</h1>
            <p className="error-message">You don’t have permission to access this page.<br />If you believe this is an error, please contact the site administrator.</p>
        </div>
    );
}

export default Forbidden;