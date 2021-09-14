
import './App.css';
import { useState } from 'react';
function App() {
  const [isLoggedIn, setisLoggedIn] = useState(false)
   const loginData=()=>{
     setisLoggedIn(!isLoggedIn)
     console.log('heu')
   }
  return (
    <div className="App">
      
      <header className="App-header">
       <div> {isLoggedIn?<h3>Welcome TO </h3>: <h2>please login </h2>}</div>
       <div>{!isLoggedIn? <button onClick={loginData}>login</button>:<button onClick={loginData}>lOGOUT</button>}</div>
      </header>

     
    </div>
  );
}

export default App;
