
import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios'
// import Counter from './Counter';

function App() {
  const [todos, settodos] = useState('')
  
  useEffect(() => {
    const fetchApi=async () =>{
    const {data}= await axios.get(`https://jsonplaceholder.typicode.com/todos`)
    // .then(response=>{
    //   console.log(response.data)
      settodos(data)
    // }).catch(response=>{

    // console.log('eerr')
    // })
    console.log(data)}
    fetchApi()
  }, [])

  return (
    <div className="App">
      
      <header className="App-header">
      <div>
       {todos &&
       todos.map((details)=>{
         const{userId,id,title}=details
         return(
           <h1 key={id}>{title}</h1>
         )
       })
       }
      </div>
      </header>

     
    </div>
  );
}

export default App;
