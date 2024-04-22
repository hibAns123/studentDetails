// src/App.js
import React from 'react';
import Home from '../pages/Home';
import { Route, Routes } from 'react-router-dom';
import LandingPage from '../pages/LandingPage';
import Data from '../pages/Data';

function App() {
  

  return (
   <>
   <Routes>
   <Route path='/' element={<LandingPage/>}/>

   <Route path='/home' element={<Home/>}/>
   <Route path='/data' element={<Data/>}/>
   </Routes>
   
   </>
  );
}

export default App;
