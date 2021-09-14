import React, { useState } from 'react'
const Counter = () => {
  let [count, setcount] = useState(5)
  const incrementhandler=()=>{
   count= count+1
   setcount(count)
  }

  return (
    <div>
      <p>value of copount {count}</p>
      <button onClick={()=> setcount(count+1)} > increment</button>
      <button>Decrement </button>
    </div>
  )
}

export default Counter
