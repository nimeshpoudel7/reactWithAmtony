import { useState } from 'react';
import './App.css';
import Counter from './Counter';
import Employee from './Employee';


function App() {
  const data=[
   {
  id:'sas',
  name: 'mane Schuster',
  salary:1000,
  title: ' Operations Producer',
  address:{
    street:'fhaufh',
    salary:5000,
    country:'hfuahfuf',
    zone:{
      map:'dadad',
      ward:'010'
    }
  }
 }]
 
  return (

  
    <div className="App">
      <header className="App-header">
       <Counter/>
       {data.map(details=>{
         console.log({...details})
         return(<Employee {...details} key={details.id} />)
       })}
      </header>

     
    </div>
  );
}

export default App;
