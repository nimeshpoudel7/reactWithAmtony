
import './App.css';
function App() {
  const empData=['nimesh','hvghsvuh','hhfh']
  return (
    <div className="App">
      <header className="App-header">
      {empData && empData.length>1 &&
      <div>
        {empData.map((details)=>{
          return(<h4>{details}</h4>)
        })}
      </div>
      }

      </header>

     
    </div>
  );
}

export default App;
