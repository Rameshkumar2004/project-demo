import { data } from "autoprefixer";
import React, { useEffect, useState } from "react";

function Gituser() {
  const [user, setUser] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch(`https://api.github.com/users`)
      .then((response) => response.json())
      .then((data) => {
        setUser(data);
        console.log(data); // This will log the fetched data
      });
  }, []);

  const filteredUsers = user.filter((users) =>
    users.login.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <div className="bg-black text-white flex flex-col items-center rounded-md ">
        <div className="text-center mb-4">
          <h3 className="text-2xl mb-4">GitHub Users</h3>
          <input
            type="text"
            placeholder="Search user"
            className="flex rounded-md p-2 text-black w-64 border-2 border-solid border-red-500 hover:bg-blue-200"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {user ? (
        <div className="  items-center flex justify-between p-4 gap-6 mt-6 flex-wrap  ">
          
        {filteredUsers.map((users) => (
          
          <div
            key={users.id}
            className="bg-white rounded-lg p-2  w-[140px] ">

            <span className="text-gray-600">{users.id}</span>
            
            <img
              src={users.avatar_url}
              alt={users.login}
              className="rounded-full w-24 h-24 items-center justify-center flex ml-3"
            />
            <h2 className="text-gray-600 text-lg font-bold text-center ">
              {users.login}
            </h2>
            <a href={users.html_url} className="p-1 bg-blue-400 text-[0.50rem] rounded-full"> view profile</a>
          </div>
          
        ))}
        </div>
       ):(<h3 className="text-blue-500 text-2xl mb-4">Loading...</h3>)}
      </div>
       
       
    </>
  );
}

export default Gituser;
