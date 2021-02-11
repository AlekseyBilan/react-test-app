import React from 'react';
import Article from './Article'
import Button from "./Button";

class ArticleList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isToggleOn: false};
        // Эта привязка обязательна для работы `this` в колбэке.
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(state => ({
            isToggleOn: !state.isToggleOn
        }));
    }

    render() {
        let comment = null;
        if( this.state.isToggleOn ){
            comment = this.props.comments.map((comment) => {
                return (
                    <Article
                        userid={comment.id}
                        id={comment.postId}
                        fullTitle={comment.name}
                        userBody={comment.body}
                        email={comment.email}
                    />
                );
            });
        }
        return (
            <div>
                <h2 className="title">Comments list</h2>
                { (comment && comment.length > 0) ? comment : "There is no comments, yet"}
                <Button text={this.state.isToggleOn ? 'HIDE' : 'SHOW'} clickHandler = {this.handleClick}/>
                {/*<button className='btn' onClick={this.handleClick}>*/}
                {/*    {this.state.isToggleOn ? 'HIDE' : 'SHOW'}*/}
                {/*</button>*/}
            </div>
        );
    }
}

export default ArticleList;
