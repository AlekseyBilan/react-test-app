import "./UserList.css";
import User from "./User";

//    {
//     "id": 1,
//     "name": "Leanne Graham",
//     "username": "Bret",
//     "email": "Sincere@april.biz",
//     "address": {
//       "street": "Kulas Light",
//       "suite": "Apt. 556",
//       "city": "Gwenborough",
//       "zipcode": "92998-3874",
//       "geo": {
//         "lat": "-37.3159",
//         "lng": "81.1496"
//       }
//     }
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
