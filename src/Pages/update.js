import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";


function Update() {
  // let params = useParams();
  var [state, setState] = useState("");
  var [playerData, setPlayerData] = useState({
    Matches: "",
    Runs: "",
    HS: ""
  });
  

  const handleUpdate = (e) => {
    const value = e.target.value;
    setPlayerData({
      ...playerData,
      [e.target.name]: value,
    })
  }
  const handleUpdateSearch = (event) => {
    setState(event.target.value); 
  };

  const handleSearch = (event) => {
    event.preventDefault();
    const data = {
      Player_Name: state
    }

    axios.get("http://localhost:5000/getData/"+state, data).then(res =>{
      console.log(res.data)
          setPlayerData(res.data)
    })
  };


  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      _id: playerData._id,
      Matches: playerData.Matches,
      Runs: playerData.Runs,
      HS: playerData.HS
    }
    console.log(data)

    axios.post("http://localhost:5000/update", data).then(res =>{
      console.log(res.data)

    })
  };

  // useEffect(() => {
  //   axios.get("http://localhost:5000/getData"+state).then(res => {console.(res.data)})
  // })
  return(
    <div>
      <form onSubmit={handleSearch} method="Get">
        <label>Update player: </label>
        <input type="text" name="Player_Name" value={state} required onChange={handleUpdateSearch}></input>
        <button type="submit">find</button>
      </form>
      <br />

      <form onSubmit={handleSubmit} method="Post">

        <label>Matches:</label>
        <br />
        <input type="text" name="Matches" value={playerData.Matches} required onChange={handleUpdate} />
        <br />

        <label>Runs:</label>
        <br />
        <input type="text" name="Runs" value={playerData.Runs} required onChange={handleUpdate} />
        <br />

        <label>HS:</label>
        <br />
        <input type="text" name="HS" value={playerData.HS} required onChange={handleUpdate} />
        <br />
        <label>ID:</label><br />
        <input type="text" name="_id" disabled value={playerData._id}  />
        
        <br />
        <input type="submit" value="update" />
      </form>
    </div>
  )
}
export default Update;
