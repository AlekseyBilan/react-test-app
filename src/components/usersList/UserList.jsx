import "./UserList.css";
import User from "./User";

function UserList(props) {
  console.log("users  = ", props.users);
  const usersJsx = props.users.map((user) => {
    return (
      <User
        id={user.id}
        fullName={user.name}
        userName={user.username}
        email={user.email}
      />
    );
  });
  return (
    <div>
      <h2 className="title">Users list</h2>
      {usersJsx.length > 0 ? usersJsx : "There is no users, yet"}
    </div>
  );
}

export default UserList;
