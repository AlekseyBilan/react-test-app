import "./UserList.css";
import React from 'react';
import PropTypes from 'prop-types';
import User from "./User";
import Greeting from "../Greeting";
import { ThemeContext } from "../ThemeContext";

const user = {userId: 2, userName: 'User2'};

class UserList extends React.Component {
  constructor(props) {
    super(props);

    this.usersJsx = this.props.users.map((user) => {
      return (
        <User
          key={user.id}
          id={user.id}
          fullName={user.name}
          userName={user.username}
          email={user.email}
          currentUser={props.currentUser}
        />
      );
    });
  }

  static contextType = ThemeContext;

  render () {
      return (
      <div>
        <h2 className="title">Users list</h2>
        <ThemeContext.Provider value={user}>
          Context<Greeting currentUser = {this.context}/>
        </ThemeContext.Provider>
        
        {this.usersJsx.length > 0 ? this.usersJsx : "There is no users, yet"}
      </div>
    );
  }
}

UserList.propTypes = {
  users: PropTypes.any.isRequired
};

export default UserList;
