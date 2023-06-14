import React, {useCallback, useEffect, useState} from 'react';
import { IJokes } from '../../types';
import JokeCard from '../../components/JokeCard/JokeCard';
import JokeButton from '../../components/JokeCard/JokeButton';

const url = 'https://api.chucknorris.io/jokes/random';

const Jokes = () => {
    const [jokes, setJokes] = useState<IJokes[]>([]);

    const getNewJokes = useCallback( async () => {
        try {
            const promises = [];
            for (let i = 0; i < 4; i++) {
                promises.push(fetch(url));
            }
            const responses = await Promise.all(promises);
            const jokes = await Promise.all(
                responses.map(
                    (response) => response.json()
                )
            );
            setJokes(jokes);
        } catch (error) {
            console.log(error);
        }
    }, []);

    useEffect(() => {
        getNewJokes().catch((error) => {
            console.log(error);
        });
    }, [getNewJokes]);

    return (
        <>
            <div className="JokeCards">
                {jokes.map((joke) => {
                    return (
                        <JokeCard
                            key={joke.id}
                            value={joke.value}
                        />
                    );
                })}
            </div>
            <JokeButton getNewJoke={getNewJokes} />
        </>
    );
};

export default Jokes;
