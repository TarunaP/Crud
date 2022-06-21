import React , {useState} from "react";
import axios from "axios";

const AddUser = () => {
    const initUser = {id: null, name: '', email: '', gender : 'male' , status : 'active'};

    const [user, setUser] = useState(initUser);

    const handleChange = e => {
        const {name, value} = e.target;
        setUser({...user, [name]: value});
    }
   
    const submitHandler = (e) => {
        e.preventDefault();
        axios
          .post("https://gorest.co.in/public/v2/users?access-token=8370af266abe22bc93660c2447a3c4fa76f07ff7a8e6f8b4f4d2afea79689936",user
            )
          .then((response) => {
            console.log("response create .......", response);
            if(response.status == 201){
                alert(response.statusText)
            }
          })
          .catch((err) => {
            console.log("err.......", err);
          });
      };

    return (
        <form>
            <label>Name</label>
            <input className="u-full-width" type="text" name="name" value={user.name} onChange={handleChange}/>
            <label>Email</label>
            <input className="u-full-width" type="text" name="email" value={user.email}  onChange={handleChange}/>
            <label>Gender</label>
            <div onChange={handleChange} value={user.gender}>
        <input type="radio" value="male" name="gender" /> Male
        <input type="radio" value="female" name="gender" /> Female
      </div>
            {/* <select className="u-full-width" name="gender" value={user.gender} onChange={handleChange}>
                <option value="male"> Male </option>
                <option value="female"> Female </option>
            </select> */}
            <button className="button-primary" type="submit" onClick={submitHandler}>Add user</button>
        </form>
    )
}

export default AddUser;