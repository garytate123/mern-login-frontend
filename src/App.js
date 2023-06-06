import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';

import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/register" element={<Register />}/>
        <Route exact path="/login" element={<Login />}/>
        <Route path='/' element={<Home />}/>
      </Routes>
    </BrowserRouter>
    
  );
};

export default App;
