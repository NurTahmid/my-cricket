import React from "react";
import "./navBar.css";
import { Link } from "react-router-dom";
function NavBar() {
  return (
    <div>
      <ul>
        <li>
        <Link to="/">Home</Link>
        </li>
        <li>
        <Link to="/Insert">Insert</Link>
        </li>
        <li>
        <Link to="/Update">Update</Link>
        </li>
        <li>
          <Link to="/Delete">Delete</Link>
        </li>
        <li>
        <Link to="/Show">Show</Link>
        </li>
        <li>
        <Link to="/DisplayByHS">Display by HS</Link>
        </li>
        <li>
        <Link to="/DisplayByMatches">Display by matches</Link>
        </li>
      </ul>
    </div>
  );
}
export default NavBar;
