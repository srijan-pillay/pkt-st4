import React from "react";
import NavBar from './NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    BrowserRouter
  } from "react-router-dom";

 import Footer from "./Footer"; 

  


function App() {
    return (<>
    <BrowserRouter>
        <NavBar  />
        <Footer/>
    </BrowserRouter>      
   </> 
    );
};

export default App;