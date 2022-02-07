import logo from './logo.svg';
import './App.css';
import Dashboard from './components/Dashboard';
import { useState } from 'react';

function App() {

  const [data, setData] = useState({
    title: "Sanket Bhosale",
    username: "reach2Sanket",
    activeProfileId: "18992"
  });


  console.log("Data inside Apps: ", data)
  return (
    <div className="App">

      
      <Dashboard xyz={data}/>
    </div>
  );
}

export default App;
