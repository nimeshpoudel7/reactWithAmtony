import { useState } from 'react';
import './App.css';
import Counter from './Counter';
import Employee from './Employee';


function App() {
  const [data, setdata] = useState([
   {
  id:'sas',
  name1: 'mane Schuster',
  title: ' Operations Producer',
  avatar: 'https://cdn.fakercloud.com/avatars/rachelreveley_128.jpg'
 }])
 const hide= data.map((details,index)=>{
   return( <Employee name={details.name1}/>)
    })
  return (

  
    <div className="App">
      <header className="App-header">
       <Counter/>
       {hide}
      </header>

     
    </div>
  );
}

export default App;
