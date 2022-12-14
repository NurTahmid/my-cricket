import axios from "axios";
import { useState } from "react";

function Delete() {
  var [state, setState] = useState("");

  const handleUpdate = (event) => {
    setState(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      Player_Name: state
    }

    axios.post("http://localhost:5000/delete", data)
  };
  return (
    <div>
      <form onSubmit={handleSubmit} method="Post">
        <label>Delete player: </label>
        <input type="text" name="Player_Name" value={state} required onChange={handleUpdate}></input>
        <button type="submit">delete</button>
      </form>
    </div>
  )
}
export default Delete;