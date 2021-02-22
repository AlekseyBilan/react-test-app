import './App.css';
import UserList from './usersList/UserList';
import users from '../users';
import Login from './Login';
import CustomInput from './CustomInput';

function App() {
    return (
    <div className="App">
      <h2>Hello from application!</h2>
      <UserList users = {users}/>
      <Login/>
      <CustomInput/>
    </div>
  );
}

export default App;
