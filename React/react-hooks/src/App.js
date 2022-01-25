import logo from './logo.svg';
import './App.css';
import Effect from './components/useeffect/Effect';
import Effectapi from './components/useeffect/Effectapi';
import Input from './components/useref/Input';
import DataContext from './components/usecontext/DataContext';
import Dashboard from './components/usecontext/Dashboard';
import ReducerCounter from './components/usereducer/ReducerCounter';


// https://blog.logrocket.com/react-context-api-deep-dive-examples/

// codevolution context api
function App() {
  return (
    <div className="App">
     {/* <Effect/>

     <Effectapi/> */}

     {/* <Input/> */}

     {/* <DataContext>
       {<Dashboard/>}
     </DataContext> */}

     <ReducerCounter/>
    </div>
  );
}

export default App;
