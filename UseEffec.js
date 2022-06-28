import React, { useEffect, useState } from 'react'

const UseEffec = () => {

  const [count , setCount] = useState(0)

   const getData = async () => {
    let Fetch = await fetch("https://jsonplaceholder.typicode.com/posts");
    let response = await Fetch.json();
    console.log(response);
   }

  useEffect(() => {
    getData();
  },[])

   const UpdateCount = () => {
    setCount(count + 1);
   }

  return (
    <div>
      This is UseEffect Tutorial
      <p>Count : {count}</p>
      <button onClick={UpdateCount}>Update Count</button>
    </div>
  )
}

export default UseEffec
