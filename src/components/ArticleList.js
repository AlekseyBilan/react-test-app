
import Article from './Article'

function ArticleList(props) {
    const comment = props.comments.map((comment) => {
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
    return (
        <div>
            <h2 className="title">Comments list</h2>
            {comment.length > 0 ? comment : "There is no comments, yet"}
        </div>
    );
}

export default ArticleList;
