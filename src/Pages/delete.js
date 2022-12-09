import axios from "axios";
import { useState } from "react";

function Delete(){
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
        <label>Delete player: </label>
        <input type="text"></input>
        <button type="submit">find</button>
      </div>
    )
} 
export default Delete;