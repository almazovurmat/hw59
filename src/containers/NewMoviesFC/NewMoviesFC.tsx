import React, { useEffect, useState } from 'react';
import { nanoid } from "nanoid";
import { IMovies } from "../../types";
import MovieForm from "../../components/MovieFC/MovieFormFC";
import MovieItem from "../../components/MovieFC/MovieItemFC";

const NewMoviesFC = () => {
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
            <MovieForm onAddMovie={addMovie} />
            <h3>To watch list</h3>
            {movies.map(item => (
                <MovieItem
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

export default NewMoviesFC;
