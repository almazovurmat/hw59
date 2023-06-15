import React, { useState, ChangeEvent } from 'react';
import MovieButton from "./MovieButtonFC";

interface Props {
    id: string;
    title: string;
    onDeleteMovie: (id: string) => void;
    onUpdateMovieTitle: (id: string, newTitle: string) => void;
}

const MovieItemFC: React.FC<Props> = ({ id, title, onDeleteMovie, onUpdateMovieTitle }) => {
    const [updatedTitle, setUpdatedTitle] = useState(title);

    const onDelete = () => {
        onDeleteMovie(id);
    };

    const inputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setUpdatedTitle(event.target.value);
    };

    const onSave = () => {
        onUpdateMovieTitle(id, updatedTitle);
    };

    return (
        <>
            <div className="d-flex justify-content-between">
                <div className="form-group mx-sm-3 mb-2 col-10">
                    <input
                        value={updatedTitle}
                        type="text"
                        className="form-control"
                        placeholder="Enter movie title"
                        onChange={inputChange}
                    />
                </div>
                <div className="col-2">
                    <MovieButton btnTitle="Save" btnClass="btn-success" btnType="button" onClick={onSave} />
                    <MovieButton btnTitle="Delete" btnClass="btn-danger" btnType="button" onClick={onDelete} />
                </div>
            </div>
        </>
    );
};

export default MovieItemFC;
