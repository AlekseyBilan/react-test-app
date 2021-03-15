import './User.css';
import PropTypes from 'prop-types';
import comments from '../../comments';
import ArticleList from '../ArticleList';

function User(props) {
    const userComments = comments.filter((user) => props.id === user.postId);
    return (
        <div data-id={props.id} key={props.id} className="user-wrapp">
            <h2><small>Name:</small> {props.fullName}, {props.userName}</h2>
            <h3><small>Email:</small> {props.email}</h3>
            <ArticleList comments = {userComments} currentUser={props.currentUser}/>
        </div>
    );
}

User.propTypes = {
    key: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
    fullName: PropTypes.string,
    userName: PropTypes.string.isRequired,
    email: PropTypes.string,
    currentUser: PropTypes.number
  };

export default User;
