import React, { Component, ChangeEvent } from 'react';
import MovieButton from "./MovieButton";

interface Props {
    id: string;
    title: string;
    onDeleteMovie: (id: string) => void;
    onUpdateMovieTitle: (id: string, newTitle: string) => void;
}

interface State {
    updatedTitle: string;
}

class MovieItem extends Component<Props, State> {
    state: State = {
        updatedTitle: this.props.title,
    };

    onDelete = () => {
        this.props.onDeleteMovie(this.props.id);
    };

    inputChange = (event: ChangeEvent<HTMLInputElement>) => {
        this.setState({ updatedTitle: event.target.value });
    };

    onSave = () => {
        this.props.onUpdateMovieTitle(this.props.id, this.state.updatedTitle);
    };

    shouldComponentUpdate(nextProps: Props, nextState: State) {
        return nextProps.title !== this.props.title || nextState.updatedTitle !== this.state.updatedTitle;
    }

    render() {
        return (
            <>
                <div className="d-flex justify-content-between">
                    <div className="form-group mx-sm-3 mb-2 col-10">
                        <input
                            value={this.state.updatedTitle}
                            type="text"
                            className="form-control"
                            placeholder="Enter movie title"
                            onChange={this.inputChange}
                        />
                    </div>
                    <div className="col-2">
                        <MovieButton btnTitle="Save" btnClass="btn-success" btnType="button" onClick={this.onSave} />
                        <MovieButton btnTitle="Delete" btnClass="btn-danger" btnType="button" onClick={this.onDelete} />
                    </div>
                </div>
            </>
        );
    }
}

export default MovieItem;
