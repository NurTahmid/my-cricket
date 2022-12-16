import React from "react";
import { useState } from "react";
import axios from "axios";
import style from "./card.module.css"

function Insert() {
  var [state, setState] = useState({
    Player_Name: "",
    Matches: "",
    Inns: "",
    Runs: "",
    HS: "",
    Ave: ""
  });

  const handleUpdate = (e) => {
    const value = e.target.value;
    setState({
      ...state,
      [e.target.name]: value,
    })
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      Player_Name: state.Player_Name,
      Matches: state.Matches,
      Inns: state.Inns,
      Runs: state.Runs,
      HS: state.HS,
      Ave: state.Ave
    }
    axios.post("http://localhost:5000/insert", data)
  }

  return (
    <div>
      <form className={style.form} onSubmit={handleSubmit} method="Post">
        <label>Player name:</label>
        <br />
        <input type="text" name="Player_Name" value={state.Player_Name} required onChange={handleUpdate} />
        <br />

        <label>Matches:</label>
        <br />
        <input type="text" name="Matches" value={state.Matches} required onChange={handleUpdate} />
        <br />

        <label>Inns:</label>
        <br />
        <input type="text" name="Inns" value={state.Inns} required onChange={handleUpdate} />
        <br />

        <label>Runs:</label>
        <br />
        <input type="text" name="Runs" value={state.Runs} required onChange={handleUpdate} />
        <br />

        <label>HS:</label>
        <br />
        <input type="text" name="HS" value={state.HS} required onChange={handleUpdate} />
        <br />

        <label>Ave:</label>
        <br />
        <input type="text" name="Ave" value={state.Ave} required onChange={handleUpdate} />
        <br />
        <input type="submit" value="add" />
      </form>
    </div>
  );
}

export default Insert;
