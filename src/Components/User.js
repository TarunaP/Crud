import React ,{useEffect, useState} from 'react';
import axios from 'axios';
import UserList from './UserList';
import AddUser from './AddUser';
import EditUser from './EditUser';

function User() {
    const [users, setUsers] = useState([]);

    const [editing, setEditing] = useState(false);

    const initialUser = {id: null, name: '', username: ''};
    
    const [currentUser, setCurrentUser] = useState(initialUser);

    useEffect(() => {
        axios.get('https://gorest.co.in/public/v2/users').then((res) => {
            setUsers(res.data);
        console.log(res.data);
    })
    } ,[])

    const editUser = (id, user) => {
        setEditing(true);
        setCurrentUser(user);
      }

      const updateUser = (newUser) => {
        setUsers(users.map(user => (user.id === currentUser.id ? newUser : user)))
      }

    return (
        <div className="row">
        <div className="six columns">
           { editing ? (
            <div>
              <h2>Edit user</h2>
              <EditUser
                currentUser={currentUser}
                setEditing={setEditing}
              />
            </div>
          ) : (
            <div>
              <h2>Add user</h2>
              <AddUser/>
            </div>
          )}
        </div>
        <div className="six columns">
          <h2>View users</h2>
          <UserList users={users} editUser={editUser}/>
        </div>
      </div>
    )
}

export default User
