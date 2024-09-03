import React from 'react'

function APIRequest() {
    const requesturl='https://api.github.com/users'
    const xhr=new  XMLHttpRequest();
    xhr.open('GET',requesturl)
    xhr.onreadystatechange =function(){
        console.log(xhr.readyState);
        if(xhr.readyState ===4){
            // console.log(this.responseText);
            const data=JSON.parse(this.responseText)
            console.log(typeof data);
            console.log(data.followers);
            
            
            
        }
    }
    xhr.send()
    
    
  return (
    <div>
      <h1>Hii Ramesh</h1>

    </div>
  )
}

export default APIRequest
