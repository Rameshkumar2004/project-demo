import React, { useState } from 'react';

function Colorchanger() {
  const [bgColor, setBgColor] = useState('bg-yellow-300');

  const handleColorChange = (color) => {
    setBgColor(color);
  };

  return (
    <div className={`${bgColor} h-full w-full flex justify-center items-center`}>
      <div className="bg-black flex justify-center items-center h-30 w-64 border-4 border-solid border-red-500 ">
        <div
          onClick={() => handleColorChange('bg-white')}
          className="bg-white h-20 w-20 p-2 m-5 cursor-pointer"
        ></div>
        <div
          onClick={() => handleColorChange('bg-green-500')}
          className="bg-green-500 h-20 w-20 p-2 m-5 cursor-pointer"
        ></div>
        <div
          onClick={() => handleColorChange('bg-cyan-600')}
          className="bg-cyan-600 h-20 w-20 p-2 m-5 cursor-pointer"
        ></div>
        <div
          onClick={() => handleColorChange('bg-blue-600')}
          className="bg-blue-600 h-20 w-20 p-2 m-5 cursor-pointer"
        ></div>
      </div>
    </div>
  );
}

export default Colorchanger;
