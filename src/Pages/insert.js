import React from "react";
import { useState } from "react";
import axios from "axios";

function Insert() {
  var [name, setName] = useState();
  var [match, setMatch] = useState();
  var [inns, setInns] = useState();
  var [runs, setRuns] = useState();
  var [hs, setHS] = useState();
  var [ave, setAVE] = useState();

  const nameUpdate = (event) => {
    setName(event.target.value);
  };
  const matchUpdate = (event) => {
    setMatch(event.target.value);
  };
  const innsUpdate = (event) => {
    setInns(event.target.value);
  };
  const runsUpdate = (event) => {
    setRuns(event.target.value);
  };
  const hsUpdate = (event) => {
    setHS(event.target.value);
  };
  const aveUpdate = (event) => {
    setAVE(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      playerName: name,
      match: match,
      inns: inns,
      runs: runs,
      hs: hs,
      ave: ave,
    };
    axios.post("https://localhost:3000/insert", { data }).then((res) => {
      console.log(res);
      console.log(res.data);
      // window.location = "/retrieve"
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Player name:</label>
        <br />
        <input type="text" required onChange={nameUpdate} />
        <br />

        <label>Matches:</label>
        <br />
        <input type="text" required onChange={matchUpdate} />
        <br />

        <label>Inns:</label>
        <br />
        <input type="text" required onChange={innsUpdate} />
        <br />

        <label>Runs:</label>
        <br />
        <input required onChange={runsUpdate} />
        <br />

        <label>HS:</label>
        <br />
        <input required onChange={hsUpdate} />
        <br />

        <label>AVE:</label>
        <br />
        <input required onChange={aveUpdate} />
        <br />
        <button type="submit"> Insert </button>
      </form>
    </div>
  );
}

export default Insert;
