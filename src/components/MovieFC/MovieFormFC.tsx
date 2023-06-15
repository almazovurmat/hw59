import React, { ChangeEvent, FormEvent, useState } from 'react';
import MovieButton from "./MovieButtonFC";

interface Props {
    onAddMovie: (title: string) => void;
}

const MovieFormFC: React.FC<Props> = ({ onAddMovie }) => {
    const [title, setTitle] = useState('');

    const inputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value);
    };

    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (title.trim() !== "") {
            onAddMovie(title);
        }
        setTitle("");
    };

    return (
        <>
            <form className="form-inline mt-5" onSubmit={onSubmit}>
                <div className="d-flex justify-content-between align-items-end">
                    <div className="form-group mx-sm-3 mb-2 col-10">
                        <label htmlFor="new-movie" className="sr-only mb-2 mx-3">
                            Movie title
                        </label>
                        <input
                            value={title}
                            onChange={inputChange}
                            type="text"
                            className="form-control"
                            id="new-movie"
                            placeholder="Enter movie title"
                        />
                    </div>
                    <MovieButton btnTitle="Add to watch list" btnClass="btn-primary" btnType="submit" />
                </div>
            </form>
        </>
    );
};

export default MovieFormFC;
