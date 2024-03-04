import React from 'react';
import {
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Navbar from "./component/Header/navbar"
import Home from './pages/Home';
 

function Routing() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      {/* <Route path="/about" element={<About/>}/> */}
      {/* <Route path="/contact" element={<Contact/>}/> */}
    </Routes>
    </BrowserRouter>
  )
}

export default Routing