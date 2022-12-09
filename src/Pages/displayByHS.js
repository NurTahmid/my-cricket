import axios from "axios";
import { useState } from "react";


function DisplayByHS() {
  var [name, setName] = useState();

  const nameUpdate = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    axios.get("https://localhost:3000/displayByHS").then((res) => {
      console.log(res);
      // window.location = "/retrieve"
    });
  };
  return(
      <div>
      <label>Display players by HS greater than: </label>
      <input type="text"></input>
      <button type="submit">find</button>
    </div>
  )
}
export default DisplayByHS;
