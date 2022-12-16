import axios from "axios";
import { useState } from "react";
import style from "./card.module.css"

function DisplayByMatches() {
  var [state, setState] = useState("");
  var [playerData, setPlayerData] = useState([]);

  const handleUpdateSearch = (event) => {
    setState(event.target.value);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    const data = {
      Matches: state
    }

    axios.get("http://localhost:5000/displaybyMatches/" + state, data).then(res => {
      setPlayerData(res.data)
      console.log(playerData)
    })
  };
  return (
    <div>
      <form onSubmit={handleSearch} method="Get">
        <label>display players with matches greater than: </label>
        <input type="number" name="Player_Name" value={state} required onChange={handleUpdateSearch}></input>
        <button type="submit">find</button>
      </form>
      <br />

      {playerData.map((item, index) => (
        <div className={style.card} key={index}>
          <p>Player name: {item.Player_Name}</p>
          <p>Matches: {item.Matches}</p>
          <p>Runs: {item.Runs}</p>
          <p>Inns: {item.Inns}</p>
          <p>HS: {item.HS}</p>
          <p>Ave: {item.Ave}</p>
        </div>
      ))}
    </div>
  )
}
export default DisplayByMatches;
