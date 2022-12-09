import React from "react";
import { useState } from "react";
import axios from "axios";
function Show() {
  var [name, setName] = useState();

  const nameUpdate = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    axios.get("https://localhost:3000/show").then((res) => {
      console.log(res);
      // window.location = "/retrieve"
    });
  };
  return (
    <div>
      <label>Search player: </label>
      <input type="text"></input>
      <button type="submit">find</button>
    </div>
  );
}
export default Show;
