import React, { useState } from 'react'

const App = () => {
    const [title,setTitle]= useState('');
    const [body,setBody]=useState('');
    const [userid,setUserid]=useState('')

    function saveuser() {
        console.log({title,body,userid})
        let data= {title,body,userid}
    
    fetch('https://jsonplaceholder.typicode.com/posts',{
        method:'POST',
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
          body:JSON.stringify(data)
    }).then((response) => response.json())
    .then((json) => console.log(json),alert('form data submitted'));
    }
  return (
    <>
    <h1>Post API Example</h1>
    <input type="text" onChange={(e)=>{setTitle(e.target.value)}} value={title} name='title' /> <br />
    <input type="text" onChange={(e)=>{setBody(e.target.value)}} value={body} name='body' /> <br />
    <input type="text" onChange={(e)=>{setUserid(e.target.value)}} value={userid} name='userID' /> <br />
    <button onClick={saveuser}>Save Data</button>
    </>
  )
}

export default App