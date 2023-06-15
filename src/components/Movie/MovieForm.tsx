import React, {Component, FormEvent, ChangeEvent} from 'react';
import MovieButton from "./MovieButton";

interface Props {
    onAddMovie: (title: string) => void;
}

interface State {
    title: string;
}

class MovieForm extends Component<Props, State> {
    state: State = {
        title: '',
    };

    inputChange = (event: ChangeEvent<HTMLInputElement>) => {
        this.setState({title: event.target.value});
    };

    onSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const { title } = this.state;
        if (title.trim() !== "") {
            this.props.onAddMovie(title);
        }
        this.setState({ title: "" });
    };

    render() {
        return (
            <>
                <form className="form-inline mt-5" onSubmit={this.onSubmit}>
                    <div className="d-flex justify-content-between align-items-end">
                        <div className="form-group mx-sm-3 mb-2 col-10">
                            <label htmlFor="new-movie" className="mx-3 sr-only mb-2">
                                Movie title
                            </label>
                            <input
                                value={this.state.title}
                                onChange={this.inputChange}
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
    }
}

export default MovieForm;
