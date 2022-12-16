import React from "react";
import { useState } from "react";
import axios from "axios";
import style from "./card.module.css"

function Show() {
  var [state, setState] = useState("");
  var [playerData, setPlayerData] = useState([]);

  const handleUpdateSearch = (event) => {
    setState(event.target.value);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    const data = {
      Player_Name: state
    }

    axios.get("http://localhost:5000/show/" + state, data).then(res => {
      console.log(res.data)
      setPlayerData(res.data)
    })
  };
  return (
    <div>
      <form onSubmit={handleSearch} method="Get">
        <label>Update player: </label>
        <input type="text" name="Player_Name" value={state} required onChange={handleUpdateSearch}></input>
        <button type="submit">find</button>
      </form>
      <br />

      <div>
        {playerData.map((item, index) => (
          <div className={style.card} key={index}>

            <p>ID: {item._id}</p>
            <p>Matches: {item.Matches} </p>
            <p>Runs: {item.Runs} </p>
            <p>HS: {item.HS} </p>

          </div>
        ))}
      </div>
    </div>
  );
}
export default Show;
