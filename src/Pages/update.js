import axios from "axios";
import { useState } from "react";



function Update() {

  var [state, setState] = useState("");
  var [playerData, setPlayerData] = useState([]);


  const handleUpdate = (e, i) => {
    const value = e.target.value;
    const newState = [...playerData]
    newState[i] = {
      ...newState[i],
      [e.target.name]: value,
    };
    setPlayerData(newState);
  }
  const handleUpdateSearch = (event) => {
    setState(event.target.value);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    const data = {
      Player_Name: state
    }

    axios.get("http://localhost:5000/show/" + state, data).then(res => {
      setPlayerData(res.data)
      console.log(playerData)
    })
  };


  const handleSubmit = (e, i) => {
    e.preventDefault();
    const data = {
      _id: playerData[i]._id,
      Matches: playerData[i].Matches,
      Runs: playerData[i].Runs,
      HS: playerData[i].HS,
      Date: playerData[i].Date
    }
    console.log(data)

    axios.post("http://localhost:5000/update", data).then(res => {
      console.log(playerData)
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

      {playerData.map((item, index) => (
        <form key={index} onSubmit={(e) => handleSubmit(e, index)} method="Post">

          <label>Matches:</label>
          <br />
          <input type="text" name="Matches" value={item.Matches} required onChange={(e) => handleUpdate(e, index)} />
          <br />

          <label>Runs:</label>
          <br />
          <input type="text" name="Runs" value={item.Runs} onChange={(e) => handleUpdate(e, index)} />
          <br />

          <label>HS:</label>
          <br />
          <input type="text" name="HS" value={item.HS} onChange={(e) => handleUpdate(e, index)} />
          <br />
          <label>ID:</label><br />
          <input type="text" name="_id" disabled value={item._id} />

          <label>Date:</label><br />
          <input type="date" name="Date" value={item.Date} onChange={(e) => handleUpdate(e, index)}></input>

          <br />
          <button type="submit">update </button>
        </form>
      ))}
    </div>
  )
}
export default Update;
