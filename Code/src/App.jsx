import "./App.css";




import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navebar from "./Routing/Navebar";
import About from "./Routing/About";
import Contact from "./Routing/Contact";
import Home1 from "./Routing/Home1";
import Resume from "./Routing/Resume";
import Project from "./Routing/Project";

function App() {
  return (
    <BrowserRouter>
    <Navebar/>
      <Routes>
        <Route path="/home1" element={<Home1 />} /> 
        <Route path="/about" element={<About />} />
        <Route path="/project" element={<Project />} />
        <Route path="/resume" element={<Resume/>} />
        <Route path="/contact" element={<Contact />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
