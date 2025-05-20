import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

function FloatingButton() {
    const { user } = useAuth();
    const navigate = useNavigate();

    if (!user) return null;

    const handleClick = () => { navigate('/article/add'); };

    return (
        <button
            className="floating-button"
            onClick={handleClick}
            title="Create Article"
        >
            <span className="plus-icon">+</span>
        </button>
    );
}

export default FloatingButton;