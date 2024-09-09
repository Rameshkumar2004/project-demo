import React from "react";
import './BackgroundChanger.css'
import { useState } from 'react'

function BackgroundChanger() {
  const [color ,setColor]=useState("white");
    function red(){
    setColor("Red");
  }
  function blue(){
    setColor("Blue");
  }
  function aqua(){
    setColor("aqua");
  }
  function green(){
    setColor("Green");
  }
  function Reset(){
    setColor("white");
  }

  
  return (
    <>
      <div className="Box">
        <p>Color changer</p>
        <div className="backgroundcolor" style={{backgroundColor:color}}> </div>
        <div className="buttondiv">
          <button onClick={red} >Red </button>
          <button onClick={blue}>Blue</button>
          <button onClick={aqua}>Aqua</button>
          <button onClick={green}>Green</button>
          <button onClick={Reset}>Reset</button>
        </div>
      </div>
    </>
  );
}

export default BackgroundChanger;
