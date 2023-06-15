import React from 'react';
import './JokeCard.css';

interface IProps {
    value: string;
}
const JokeCard: React.FC<IProps> = ({ value }) => {
    return (
        <article className="JokeCard">
            <div className="info">
                <h5>Jokes about <br />Chuck Noris</h5>
            </div>
            <p>{value}</p>
        </article>
    );
};

export default JokeCard;