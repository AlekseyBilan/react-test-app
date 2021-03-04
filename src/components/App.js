import './App.css';
import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import users from '../users';
import About from './About';
import NotFound from './NotFound';

const Login = lazy(() => import('./Login'));
const UserList = lazy(() => import('./usersList/UserList'));
//const currentUser = {userId: 12345, userName: 'User', settings: {theme: 'dark', lang: 'Eng'}};

function App() {
    return (
    <Router>
        <Suspense fallback={<div>Загрузка...</div>}>
          <Switch>
            <Route exact path="/" component={Login}/>
            <Route path="/about" component={About}/>
            <Route path="/user-list" component={ () => <UserList users={users} />}/>
            <Route component={NotFound}/>
          </Switch>
        </Suspense>
    </Router>
  );
}

export default App;
