import React from "react";
import { useState } from "react";
import axios from "axios";
function Show() {
  var [state, setState] = useState("");
  var [playerData, setPlayerData] = useState({
    Matches: "",
    Runs: "",
    HS: ""
  });

  const handleUpdateSearch = (event) => {
    setState(event.target.value);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    const data = {
      Player_Name: state
    }

    axios.get("http://localhost:5000/getData/" + state, data).then(res => {
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

      {playerData.Matches !== "" ? <p>Matches: {playerData.Matches} </p> : ""}
      {playerData.Runs !== "" ? <p>Runs: {playerData.Runs} </p> : ""}
      {playerData.HS !== "" ? <p>HS: {playerData.HS} </p> : ""}

    </div>
  );
}
export default Show;
