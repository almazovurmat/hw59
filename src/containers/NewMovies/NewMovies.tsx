import React from 'react';
import { nanoid } from "nanoid";
import { IMovies } from "../../types";
import MovieForm from "../../components/Movie/MovieForm";
import MovieItem from "../../components/Movie/MovieItem";

interface State {
    movies: IMovies[];
}

class NewMovies extends React.Component<{}, State> {
    state: State = {
        movies: [],
    };

    componentDidMount() {
        this.loadMoviesFromLocalStorage();
    }

    componentDidUpdate() {
        this.saveMoviesToLocalStorage();
    }

    saveMoviesToLocalStorage = () => {
        localStorage.setItem("movies", JSON.stringify(this.state.movies));
    };

    loadMoviesFromLocalStorage = () => {
        const storedMovies = localStorage.getItem("movies");
        if (storedMovies) {
            this.setState({ movies: JSON.parse(storedMovies) });
        }
    };

    addMovie = (title: string) => {
        const newMovie: IMovies = {
            id: nanoid(),
            titleMovie: title,
        };

        this.setState((prevState) => ({
            movies: [...prevState.movies, newMovie],
        }));
    };

    deleteMovie = (id: string) => {
        this.setState((prevState) => ({
            movies: prevState.movies.filter((movie) => movie.id !== id),
        }));
    };

    updateMovieTitle = (id: string, newTitle: string) => {
        this.setState((prevState) => ({
            movies: prevState.movies.map((movie) => {
                if (movie.id === id) {
                    return { ...movie, titleMovie: newTitle };
                }
                return movie;
            }),
        }));
    };

    render() {
        return (
            <>
                <MovieForm onAddMovie={this.addMovie} />
                <h3 className="mt-5 mx-3">To watch list</h3>
                {this.state.movies.map((item) => (
                    <MovieItem
                        key={item.id}
                        id={item.id}
                        title={item.titleMovie}
                        onDeleteMovie={this.deleteMovie}
                        onUpdateMovieTitle={this.updateMovieTitle}
                    />
                ))}
            </>
        );
    }
}

export default NewMovies;
