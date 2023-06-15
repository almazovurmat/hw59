import React, {Component} from 'react';

interface IProps {
    btnTitle: string;
    btnClass: string;
    btnType: "button" | "submit";
    onClick?: () => void;
}
class MovieButton extends Component<IProps>{
    className = `btn ${this.props.btnClass} mb-2 mx-2`;
    render() {
        return (
            <button
                type={this.props.btnType}
                className={this.className}
                onClick={this.props.onClick}
            >
                {this.props.btnTitle}
            </button>
        );
    }
}

export default MovieButton;