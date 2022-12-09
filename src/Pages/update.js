import axios from "axios";
import { useState } from "react";


function Update() {
  var [name, setName] = useState();

  const nameUpdate = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    axios.get("https://localhost:3000/delete").then((res) => {
      console.log(res);
      // window.location = "/retrieve"
    });
  };
  return(
      <div>
      <label>Update player: </label>
      <input type="text"></input>
      <button type="submit">find</button>
    </div>
  )
}
export default Update;
