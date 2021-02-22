import React from 'react';
import Article from './Article'
import Button from "./Button";
import LabelCount from "./LabelCount";

class ArticleList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isToggleOn: false};
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        console.log('E = ', e);
        this.setState(state => ({
            isToggleOn: !state.isToggleOn
        }));
    }

    render() {
        let comment = null;
        const number = this.props.comments.length;
        const btnText = this.state.isToggleOn ? 'HIDE' : 'SHOW';
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
        const result = (comment && comment.length > 0) ? comment : "There is no comments, yet";

        return (
            <div>
                <h2 className="title">
                    Comments list 
                    <LabelCount number = {number} title= {'Count of comments'} />
                </h2>
                { result }
                <Button text={ btnText } clickHandler = {this.handleClick}/>
            </div>
        );
    }
}

export default ArticleList;
