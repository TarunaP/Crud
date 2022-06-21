import { useState } from 'react';
import './App.css';
import User from './Components/User';

function App() {
  // const [file, setFile] = useState();
  // function handleChange(e) {
  //     console.log(e.target.files);
  //     setFile(URL.createObjectURL(e.target.files[0]));
  // }
   
  return (
    <div className="container">
      <h1>React CRUD App </h1>
      <User/>
      {/* <div>
      <h2>Add Image:</h2>
            <input type="file" onChange={handleChange} />
            <img src={file} />
            </div>  */}
    </div>
  );
}

export default App;