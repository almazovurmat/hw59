import React, { useEffect, useState } from 'react';
import { nanoid } from "nanoid";
import { IMovies } from "../../types";
import MovieFormFC from "../../components/MovieFC/MovieFormFC";
import MovieItemFC from "../../components/MovieFC/MovieItemFC";

const NewMovies = () => {
    const [movies, setMovies] = useState<IMovies[]>([]);

    useEffect(() => {
        loadMoviesFromLocalStorage();
    }, []);

    useEffect(() => {
        saveMoviesToLocalStorage();
    }, [movies]);

    const saveMoviesToLocalStorage = () => {
        localStorage.setItem("movies", JSON.stringify(movies));
    };

    const loadMoviesFromLocalStorage = () => {
        const storedMovies = localStorage.getItem("movies");
        if (storedMovies) {
            setMovies(JSON.parse(storedMovies));
        }
    };

    const addMovie = (title: string) => {
        const newMovie: IMovies = {
            id: nanoid(),
            titleMovie: title,
        };

        setMovies(prevMovies => [...prevMovies, newMovie]);
    };

    const deleteMovie = (id: string) => {
        setMovies(prevMovies => prevMovies.filter(movie => movie.id !== id));
    };

    const updateMovieTitle = (id: string, newTitle: string) => {
        setMovies(prevMovies =>
            prevMovies.map(movie => {
                if (movie.id === id) {
                    return { ...movie, titleMovie: newTitle };
                }
                return movie;
            })
        );
    };

    return (
        <>
            <MovieFormFC onAddMovie={addMovie} />
            <h3 className="mx-3 mt-5">To watch list</h3>
            {movies.map(item => (
                <MovieItemFC
                    key={item.id}
                    id={item.id}
                    title={item.titleMovie}
                    onDeleteMovie={deleteMovie}
                    onUpdateMovieTitle={updateMovieTitle}
                />
            ))}
        </>
    );
};

export default NewMovies;
