import Button from "./Button";

function Comment(props) {
    return (
        <div>
            { props.isToggleOn ? (
                <article key={props.id} data-user-id={props.postId}>
                    <h2>{props.fullTitle}</h2>
                    <p>{props.userBody}</p>
                    <p>{props.email}</p>
                </article>
                ) : ( 'click to show the comment' )
            }
            <Button text={ props.btnText } clickHandler = {props.handleClick}/>
        </div>
    );
}



/*
import React from 'react';
import Button from "./Button";


class Comment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isToggleOn: false};
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(state => ({
            isToggleOn: !state.isToggleOn
        }));
    }

    render() {
        const btnText = this.state.isToggleOn ? 'Hide comment' : 'Show comment';

        return (
            <div>
                { this.state.isToggleOn ? (
                    <article key={this.props.id} data-user-id={this.props.postId}>
                        <h2>{this.props.fullTitle}</h2>
                        <p>{this.props.userBody}</p>
                        <p>{this.props.email}</p>
                    </article>
                    ) : ( 'click to show the comment' )
                }
                <Button text={ btnText } clickHandler = {this.handleClick}/>
            </div>
        );
    }
}
*/

export default Comment;