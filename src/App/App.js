
import ShowUser from '../ShowUser/ShowUser';
import HomePage from '../HomePage/HomePage';
import React from "react";
import {
  Route,
  Routes,
  BrowserRouter
} from "react-router-dom";
import './App.css';

function App() {


  return (
    <div className="App">
      <h1 className='title'>About users</h1>
      <BrowserRouter>

      <Routes>
 
          <Route path="/" element={ <HomePage/>}/>
 
          <Route path="/user/:id" element={<ShowUser/>}/>
      </Routes>
      
      </BrowserRouter>
   
      
    
   </div>
  );
}

export default App;
