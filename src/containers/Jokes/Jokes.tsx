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
            for (let i = 0; i < 3; i++) {
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
            <div className="JokeCards mt-5">
                {jokes.map((joke) => {
                    return (
                        <JokeCard
                            key={joke.id}
                            value={joke.value}
                        />
                    );
                })}
            </div>
            <div className="text-center mt-4">
                <JokeButton getNewJoke={getNewJokes} />
            </div>
        </>
    );
};

export default Jokes;
