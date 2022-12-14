import axios from "axios";
import { useState } from "react";


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
        <input type="text" name="Player_Name" value={state} required onChange={handleUpdateSearch}></input>
        <button type="submit">find</button>
      </form>
      <br />

      {playerData.map((item) => (
        <div>
          <p>{item.Player_Name}</p>
          <p>{item.Matches}</p>
          <p>{item.Runs}</p>
          <p>{item.Inns}</p>
          <p>{item.HS}</p>
          <p>{item.Ave}</p>
        </div>
        
        
      ))}
    </div>
  )
}
export default DisplayByMatches;
