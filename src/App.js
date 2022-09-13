// import logo from './logo.svg';
// import { useState,useEffect } from 'react';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import { AiFillHeart, FaBeer, FaHeart, FaHeartbeat, FaHeartBroken, FaHSquare, FaKissWinkHeart} from 'react-icons/fa';
import './App.css';

import Game from './TheGame';
// import Squares from './Squares';

function App() {


  return (
    <BrowserRouter>
    <div className="App">
      
           
      <Routes>
        <Route path="/Game" element={<Game/>}/>
      </Routes>
      
      
      <h4 className="my-3">Made with <FaHeartbeat/> by Abhishek</h4>
    </div>
    </BrowserRouter>
    
  );
}

export default App;
