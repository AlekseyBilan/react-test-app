import Button from '../Button';
import './User.css';

function User(props) {
  return (
    <div data-id={props.id} key={props.id} className="user-wrapp">
        <h2><small>Name:</small> {props.fullName}, {props.userName}</h2>
        <h3><small>Email:</small> {props.email}</h3>
        <Button text="Click me!"/>
    </div>  
  );
}

export default User;
