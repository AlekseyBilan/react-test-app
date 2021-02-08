import './App.css';
import UserList from './usersList/UserList';
import users from '../users';
import Clock from './Clock';

function App() {
  return (
    <div className="App">
      <h2>Hello from application!</h2>
      <Clock/>
      <UserList users = {users}/>
    </div>
  );
}

export default App;
