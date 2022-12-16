import axios from "axios";
import { useState } from "react";

function Delete() {
  var [state, setState] = useState("");
  var [playerData, setPlayerData] = useState([]);

  // const handleUpdate = (event) => {
  //   setState(event.target.value);
  // };

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

  // const handleSubmit = (e, i) => {
  //   e.preventDefault();
  //   const data = {
  //     _id: playerData[i]._id,
  //   }
  //   console.log(data)

  //   axios.post("http://localhost:5000/deletes", data)
  // };

  const handleSubmit = (e, i)  => {
    e.preventDefault();
    const data = {
      _id: playerData[i]._id
    }
    axios.post("http://localhost:5000/delete", data)
  };

  return (
    <div>
      <form onSubmit={handleSearch} method="Get">
        <label>delete player: </label>
        <input type="text" name="Player_Name" value={state} required onChange={handleUpdateSearch}></input>
        <button type="submit">find</button>
      </form>
      <br />
      {playerData.map((item, index) => (
        <div key={index}>
          <form onSubmit={(e) => handleSubmit(e, index)}>

            <label>Player name:</label>
            <br />
            <input type="text" name="Player_name" value={state} disabled />
            <br />

            <label>ID:</label>
            <br />
            <input type="text" name="_id" value={item._id} disabled />
            <br />
            <label>Matches:</label>
            <br />
            <input type="text" name="Matches" value={item.Matches} disabled />
            <br />
            <label>Runs:</label>
            <br />
            <input type="text" name="Matches" value={item.Runs} disabled />
            <br />
            <button type="submit">delete</button>
          </form>
          <br />
        </div>
      ))}
      {/* <form onSubmit={handleSubmit} method="Post">
        <label>Delete player: </label>
        <input type="text" name="Player_Name" value={state} required onChange={handleUpdate}></input>
        <button type="submit">delete</button>
      </form> */}
    </div>
  )
}
export default Delete;