import './User.css';
import React, { Suspense } from 'react';
import MyErrorBoundary from '../MyErrorBoundary';
import comments from '../../comments';
//import ArticleList from '../ArticleList';
const ArticleList = React.lazy(() => import('../ArticleList'));


function User(props) {
    const userComments = comments.filter((user) => props.id === user.postId);
    return (
        <div data-id={props.id} key={props.id} className="user-wrapp">
            <MyErrorBoundary>
                <Suspense fallback={<div>Загрузка...</div>}>
                    <h2><small>Name:</small> {props.fullName}, {props.userName}</h2>
                    <h3><small>Email:</small> {props.email}</h3>
                    <ArticleList comments = {userComments} key = {props.id}/>
                </Suspense>
            </MyErrorBoundary>
        </div>
    );
}

export default User;
