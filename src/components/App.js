import './App.css';
import UserList from './usersList/UserList';
import users from '../users';
import Button from './Button';

function App() {
  return (
    <div className="App">
      <h2>Hello from application!</h2>
      <UserList users = {users}/>
    </div>
  );
}

export default App;
