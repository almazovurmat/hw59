import React from 'react';

interface IProps {
    btnTitle: string;
    btnClass: string;
    btnType: "button" | "submit";
    onClick?: () => void;
}

const MovieButton: React.FC<IProps> = ({ btnTitle, btnClass, btnType, onClick }) => {
    const className = `btn ${btnClass} mb-2 mx-2`;

    return (
        <button
            type={btnType}
            className={className}
            onClick={onClick}
        >
            {btnTitle}
        </button>
    );
};

export default MovieButton;
