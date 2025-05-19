import React from 'react';
import forbiddenImg from '../assets/403.jpg';

function Forbidden() {
    return (
        <div className="forbidden-container">
            <img src={forbiddenImg} alt="403 Forbidden" className="forbidden-image" />
            <h1 className="forbidden-title">403 - Forbidden</h1>
            <p className="forbidden-message">You do not have access to this page.<br />Please log in to continue.</p>
        </div>
    );
}

export default Forbidden;
