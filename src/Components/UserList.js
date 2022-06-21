import React from 'react'
import axios from "axios";

const UserList = (props) => {
    const deleteHandler = (e) => {
        e.preventDefault();
        axios
          .delete("https://gorest.co.in/public/v2/users/"+e.target.id,{
            headers: {
                        'Accept':'application/json',
                        "Content-Type":"application/json",
                        'Authorization': "Bearer 8370af266abe22bc93660c2447a3c4fa76f07ff7a8e6f8b4f4d2afea79689936"
                    },
          }
            )
          .then((response) => {
            console.log("response delete.......", response);
            if(response.status == 201){
                alert(response.statusText)
            }
          })
          .catch((err) => {
            console.log("err.......", err);
          });
      };
    return (
        <div>
             <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                { props.users.length > 0 ? (
                    props.users.map(user => {
                        const {id, name, email , status} = user;
                        return (
                            <tr key={id}>
                                <td>{id}</td>
                                <td>{name}</td>
                                <td>{email}</td>
                                <td>{status}</td>
                                <td>
                                    <button id={id} onClick={deleteHandler}>Delete</button>
                                    <button onClick={() => props.editUser(id, user)}>Edit</button>
                                </td>
                            </tr>
                        )
                    })
                ) : (
                    <tr>
                        <td colSpan={5}>No users found</td>
                    </tr>
                )   
                }
            </tbody>
        </table>
        </div>
    )
}

export default UserList
