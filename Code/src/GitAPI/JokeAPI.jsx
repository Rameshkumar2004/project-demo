import React, { useState, useEffect } from "react";

function JokeAPI() {
  const [user, setUser] = useState([]); // Initialize as null instead of an empty array

//   Fetch the first joke on component mount
  useEffect(() => {
    const getFirstJoke = async () => {
      const response = await fetch(`https://official-joke-api.appspot.com/jokes/random`);
      const data = await response.json();
      setUser({ setup: data.setup, punchline: data.punchline });
    };
    getFirstJoke();
  }, []);


  const getJokes = async () => {
    const response = await fetch(`https://official-joke-api.appspot.com/jokes/random`);
    const data = await response.json();
    setUser({ setup: data.setup, punchline: data.punchline });
  };

  return (
    <div className="bg-black text-white flex flex-col items-center w-full h-full">
        
      {user ? ( // Check if user (joke) data exists
      
        <div className="flex bg-white h-[full] w-96 items-center justify-center p-4 rounded-lg shadow-lg border-2 border-solid border-red-500 m-2">
            
          <div className="  items-center justify-center">
            <h1 className="bg-blue-300 border-2 border-solid border-red-500 text-black rounded-xl m-2">❁❁😂 Come let's tell you some jokes😂❁❁</h1>
            {/* <h3 className="items-center justify-cente text-xl text-black">😂jokes</h3> */}
            <h2 className=" bg-yellow-300 rounded-xl text-xl font-bold text-black">{user.setup}</h2>
            <h3 className=" bg-yellow-300 rounded-xl text-lg text-black mt-2">{user.punchline}</h3>
            <button
              onClick={getJokes}
              className="mt-4 bg-blue-500 text-white p-2 rounded-full hover:bg-pink-400"
            >
              Get Another Joke
            </button>
          </div>
        </div>
      ) : (
        <h3 className="text-blue-500 text-2xl mb-4">Loading...</h3>
      )}
    </div>
  );
}

export default JokeAPI;
