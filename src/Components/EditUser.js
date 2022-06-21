import React, {useState , useEffect} from 'react';
import axios from 'axios';

const EditUser = (props) => {

    const [user, setUser] = useState(props.currentUser);

    useEffect(() => {
        setUser(props.currentUser)
    }, [props])

    const handleChange = e => {
        const {name, value} = e.target;
        setUser({...user, [name]: value});
    }

    const handleSubmit = e => {
        e.preventDefault();
        console.log('E Id -------- ',e.target.id)
        console.log('User ------------- ',user)
        axios
        .put("https://gorest.co.in/public/v2/users/"+e.target.id,user,{
            headers: {
                        'Accept':'application/json',
                        "Content-Type":"application/json",
                        'Authorization':"Bearer 8370af266abe22bc93660c2447a3c4fa76f07ff7a8e6f8b4f4d2afea79689936"
                    },
          })
        .then((response) => {
          console.log("response create .......", response);
          if(response.status == 201){
              alert(response.statusText)
          }
        })
        .catch((err) => {
          console.log("err.......", err);
        });
    }

    return (
        <form>
            <label>Name</label>
            <input className="u-full-width" type="text" value={user.name} name="name" onChange={handleChange} />
            <label>Email</label>
            <input className="u-full-width" type="text" value={user.email} name="email" onChange={handleChange} />
            <label>Gender</label>
            <select className="u-full-width" name="gender" value={user.gender} onChange={handleChange}>
                <option value="male"> Male </option>
                <option value="female"> Female </option>
            </select>
            <button className="button-primary" type="submit" id={user.id} onClick={handleSubmit} >Edit user</button>
        &nbsp;
            <button type="submit" onClick={() => props.setEditing(false)}>Cancel</button>
        </form>
    )
}

export default EditUser;
