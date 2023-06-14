import React from 'react';
import './JokeCard.css';

interface IProps {
    value: string;
}
const JokeCard: React.FC<IProps> = ({ value }) => {

    return (
        <article className="JokeCard">
            <div className="info">
                <h6>Jokes about Chuck Noris</h6>
            </div>
            <p>{value}</p>
        </article>
    );
};

export default JokeCard;