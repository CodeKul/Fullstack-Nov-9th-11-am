import logo from './logo.svg';
import './App.css';
import FirstComponent from './components/FirstComponent';


// https://medium.com/@ralph1786/intro-to-react-component-lifecycle-ac52bf6340c 
// https://blog.logrocket.com/react-lifecycle-methods-tutorial-examples/#componentWillUnmount
function App() {
  return (
    <div className="App">
      <h1>Welcome to React</h1>
      <FirstComponent/>

     
    </div>
  );
}

export default App;
