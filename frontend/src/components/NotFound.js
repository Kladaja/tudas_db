import React from 'react';
import NotFoundImage from '../assets/404.jpg';

function NotFound() {
    return (
        <div className="error-container">
            <img src={NotFoundImage} alt="404 Not Found" className="error-image" />
            <h1 className="error-title">404 - Not found</h1>
            <p className="error-message">Sorry, the page you’re looking for doesn’t exist or has been moved.<br />Please check the URL or return to the homepage.</p>
        </div>
    );
}

export default NotFound;