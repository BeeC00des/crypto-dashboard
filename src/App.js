// import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {Home, Coin} from '././pages/index';


function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>  
            <Route path="/" element={<Home />}></Route>
            <Route path="/coinpage" element={<Coin />}></Route>  
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
