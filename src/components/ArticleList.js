
import Article from './Article'

function ArticleList(props) {
    /*
*  "postId": 3,
    "id": 15,
    "name": "debitis magnam hic odit aut ullam nostrum tenetur",
    "email": "Maynard.Hodkiewicz@roberta.com",
    "body": "nihil ut voluptates blanditiis autem odio dicta rerum\nquisquam saepe et est\nsunt quasi nemo laudantium deserunt\nmolestias tempora quo quia"
* */
    console.log('props = ', props);
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
