import { useState } from 'react';
import './App.css';
import Counter from './Counter';
import Employee from './Employee';


function App() {
  const data=[
   {
  id:'sas',
  name: 'mane Schuster',
  title: ' Operations Producer',
  avatar: 'https://cdn.fakercloud.com/avatars/rachelreveley_128.jpg'
 }]
 
  return (

  
    <div className="App">
      <header className="App-header">
       <Counter/>
       {data.map(details=>{
         return(<Employee {...details} key={details.id}/>)
       })}
      </header>

     
    </div>
  );
}

export default App;
