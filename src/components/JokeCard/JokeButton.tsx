import React, {memo} from 'react';

interface IProps {
    getNewJoke: () => void;
}

const JokeButton: React.FC<IProps> = ({ getNewJoke }) => {
    console.log('JokeButton');
    return (
        <button className="btn btn-primary" onClick={getNewJoke}>
            Get new jokes
        </button>
    );
};

export default memo(JokeButton);
