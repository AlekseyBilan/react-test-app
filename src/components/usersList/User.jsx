import './User.css';
import comments from '../../comments';
import ArticleList from '../ArticleList';

function User(props) {
    const userComments = comments.filter((user) => props.id === user.postId);
    return (
        <div data-id={props.id} key={props.id} className="user-wrapp">
            <h2><small>Name:</small> {props.fullName}, {props.userName}</h2>
            <h3><small>Email:</small> {props.email}</h3>
            <ArticleList comments = {userComments}/>
        </div>
    );
}

export default User;
