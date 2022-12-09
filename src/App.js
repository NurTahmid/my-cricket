import './App.css';
import { Route, Routes } from "react-router-dom";
import Home from './Pages/home';
import Insert from './Pages/insert';
import Update from "./Pages/update";
import Delete from "./Pages/delete";
import Show from "./Pages/show";
import DisplayByHS from "./Pages/displayByHS";
import DisplayByMatches from "./Pages/displayByMatches";



function App() {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Insert" element={<Insert />} />
        <Route path="/Update" element={<Update />} />
        <Route path="/Delete" element={<Delete />} />
        <Route path="/Show" element={<Show />} />
        <Route path="/DisplayByHS" element={<DisplayByHS />} />
        <Route path="/DisplayByMatches" element={<DisplayByMatches />} />
      </Routes>
    // <div className="App">
    //     <h1>Welcome to myCricket!</h1>
    //    <NavBar />
    //    {/* <Insert /> */}
    //    <Show />
    // </div>
  );
}

export default App;
