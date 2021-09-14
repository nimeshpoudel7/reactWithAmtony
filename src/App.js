import './App.css';
import Counter from './Counter';
import Employee from './Employee';



function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Counter/>
       <Employee name="jack" />
         <Employee name="aadad"/>
      </header>

     
    </div>
  );
}

export default App;
