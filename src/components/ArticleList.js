import React from 'react';
import Comment from './Comment'
import Button from "./Button";
import Toggle from "./Toggle";


class ArticleList extends React.Component {
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

//const BlogPostWithSubscription = Toggle(
//     BlogPost,
//     (DataSource, props) => DataSource.getBlogPost(props.id)
//   );

    render() {
        let comment = null;
        const btnText = this.state.isToggleOn ? 'HIDE' : 'SHOW';
        if( this.state.isToggleOn ){
            comment = this.props.comments.map((comment) => {
                return (
                    <Comment
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
                <h2 className="title">Comments list</h2>
                { result }
                <Button text={ btnText } clickHandler = {this.handleClick}/>
            </div>
        );
    }
}

export default ArticleList;
