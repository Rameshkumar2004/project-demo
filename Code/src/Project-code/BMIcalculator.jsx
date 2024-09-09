import React from 'react'
import { useState } from 'react';

function BMIcalculator() {

 const [number ,setNumber]= useState(null)
 const [number2 ,setNumber2]= useState(null)
 const [result ,setResult]= useState(null)
 const [message , setMessage]=useState(null)
 console.log("Message", message)
    function Calculate(){
        if (number==='' || number<0 || isNaN(number)){
            setMessage("please give a valid height");
             
        }else if (number2==='' || number2<0 || isNaN(number2)){
            setMessage("please give a valid weight")

        }else{
            setResult(number2/ (number*number/10000));
            if(result <18.6){
                setMessage("under weight :")
            }
            else if(result>18.6 && result<24.9){
                setMessage("Normal Range :")

            }else{
                setMessage("Over weight :")
            }
            
        }

    }
  return (
    <div className='bg-black flex justify-center items-center h-[full] w-[full]'>
        <header className='bg-yellow-300 items-center  '>
            <h1>BMI Calculator</h1>
            <div className='p-2 '> Height in CM  
                < input type="number" placeholder='CM' className='border-2 border-solid border-black rounded-md m-2'
                value={number} onChange={e=>setNumber(+e.target.value)}/>
            </div>
            <div> Weight in Kg
                <input type="number" placeholder='Kg' className='border-2 border-solid border-black rounded-md m-2'
                value={number2} onChange={e=>setNumber2(+e.target.value)}/>
            </div>
            <button onClick={Calculate} className='border-2 border-solid border-black rounded-md m-2 p-2 hover:bg-cyan-600 bg-blue-700' >Calculator</button>
            <div > {result && `Your BMI is: ${result}`}</div>
            <div className='bg-green-500 rounded-md w-[80%] text-center ml-9'>{message}</div>

            <div>
                <h3>BMI Weight Guide</h3>
                <p>under weight = less then 18.6</p>
                <p> normal Range =18.6 and 24.9</p>
                <p>Overweight = Greater than 24.9</p>
                <p></p>
            </div>
        </header>
      
    </div>
  )
}

export default BMIcalculator;
