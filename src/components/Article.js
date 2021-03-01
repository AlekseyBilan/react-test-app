import React from "react";
import Button from "./Button";

class Article extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isArticleShown: true};
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        this.setState(state => ({
            isArticleShown: !state.isArticleShown
        }));
    }

    render() {
        const btnText = this.state.isArticleShown ? 'Hide comment' : 'Show comment';
        if (this.props.id === 10) {
            throw new Error('TEST ERROR!!!');
        }
    return (
        <article key={this.props.id} data-user-id={this.props.postId}>
            { this.state.isArticleShown ?
                <>
                    <h2>{this.props.fullTitle}</h2>
                    <p>{this.props.userBody}</p>
                    <p>{this.props.email}</p>
                </>
                : ''
            }
            <Button text={ btnText } clickHandler = {this.handleClick}/>
        </article>
    );
    }
}

export default Article;