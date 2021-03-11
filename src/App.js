import './App.css';
import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import users from './users';
import CounterWrap from './components/CounterWrap';
import NotFound from './components/NotFound';

const Login = lazy(() => import('./components/Login'));
const UserList = lazy(() => import('./components/usersList/UserList'));
//const currentUser = {userId: 12345, userName: 'User', settings: {theme: 'dark', lang: 'Eng'}};

function App() {
    return (
    <Router>
        <Suspense fallback={<div>Загрузка...</div>}>
          <Switch>
            <Route exact path="/" component={Login}/>
            <Route path="/counter" component={CounterWrap}/>
            <Route path="/user-list" component={ () => <UserList users={users} />}/>
            <Route component={NotFound}/>
          </Switch>
        </Suspense>
    </Router>
  );
}

export default App;
