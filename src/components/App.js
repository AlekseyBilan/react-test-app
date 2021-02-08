import './App.css';
import UserList from './usersList/UserList';
import users from '../users';
import Clock from './Clock';
import Button from './Button';

function App() {
  return (
    <div className="App">
      <h2>Hello from application!</h2>
      <Clock/>
      <UserList users = {users}/>
      <Button text="Click me!"/>
      <Button text="Click me!"/>
    </div>
  );
}

export default App;
