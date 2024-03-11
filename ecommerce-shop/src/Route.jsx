import React from 'react';
import {
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Navbar from "./component/Header/navbar"
import Home from './pages/Home';
import Aboutus from './component/Main/Aboutus';
import Assessories from './component/Main/Assessories';
import Checkout from './component/Main/Checkout';
import Contactus from './component/Main/Contactus';
import Everything from './component/Main/Everything';
import Men from './component/Main/Men';
import Women from './component/Main/Women';

 

function Routing() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<Aboutus/>}/>
      <Route path="/contact" element={<Contactus/>}/>
      <Route path="/assessories" element={<Assessories/>}/>
      <Route path="/checkout" element={<Checkout/>}/>
      <Route path="/everything" element={<Everything/>}/>
      <Route path="/men" element={<Men/>}/>
      <Route path="/women" element={<Women/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default Routing