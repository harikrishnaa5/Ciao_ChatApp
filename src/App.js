import React from "react";
import './style.scss'

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";

const App = () => {
  return (
    <div>
      {/* <Register/> */}
      {/* <Login/> */}
      <Home/>
    </div>
  );
};

export default App;
