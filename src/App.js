import { useState } from 'react';
import './App.css';
import Counter from './Counter';
import Employee from './Employee';


function App() {
//   const data=[
//    {
//   id:'sas',
//   name: 'mane Schuster',
//   salary:1000,
//   title: ' Operations Producer',
//   address:{
//     street:'fhaufh',
//     salary:5000,
//     country:'hfuahfuf',
//     zone:{
//       map:'dadad',
//       ward:'010'
//     }
//   }
//  }]

const emplyoee=[{
  id:12443,
  name:'nimesh',
  title:'cs'
},{
  id:124433,
  name:'nimfewfweesh',
  title:'cs'
},{
  id:123567,
  name:'dadada',
  title:'cs'
},{
  id:1787623,
  name:'suhguad',
  title:'cs'
}]
 
  return (

  
    <div className="App">
      <header className="App-header">
       <Counter/>
       {emplyoee.map((details,index)=>{
        
        return(
           <Employee name={details.name} key={details.id}/>)
      
       })
       }
       {/* {data.map(details=>{
         console.log({...details})
         return(<Employee {...details} key={details.id} />)
       })} */}
      </header>

     
    </div>
  );
}

export default App;
