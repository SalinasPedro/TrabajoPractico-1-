import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import "./styles/App.css";

import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Register from "./components/Register";
import CreatePost from "./components/CreatePost";
import AllPost from "./components/AllPost";
import NotFound from "./components/NotFound";

function App() {
  return (
    <Router>
      <div className="wrapper">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Register" element={<Register />} />
          <Route exact path="/Login" element={<Login />} />
          <Route exact path="/CreatePost" element={<CreatePost />} />
          <Route exact path="/AllPost" element={<AllPost />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
