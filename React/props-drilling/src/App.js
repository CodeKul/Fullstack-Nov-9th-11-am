import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Dashboard from './components/Dashboard';

function App() {

  const [data, setData] = useState(
    {
      title: "Mr",
      username: "reach2sanket",
      activeProfileId: "1892"
    })
  return (
    <div className="App">
      {/* <h1>{data.title}</h1>
      <h1>{data.username}</h1>
      <h1>{data.activeProfileId}</h1> */}

      <Dashboard propsdata={data}/>
    </div>
  );
}

export default App;
