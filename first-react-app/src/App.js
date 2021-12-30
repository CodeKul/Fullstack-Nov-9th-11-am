import logo from './logo.svg';
import './App.css';
//import "./Function.css"
import Home from './components/ClassComponent';
import FunctionComponent from './components/FunctionComponent';


// https://beta.reactjs.org/learn
// https://reactjs.org/docs/create-a-new-react-app.html
// https://medium.com/codex/the-lifecycle-of-a-react-component-8e01332a068d
// https://blog.logrocket.com/react-lifecycle-methods-tutorial-examples/#componentWillUnmount

function App() {
  return (
    <div className="App">
      <Home/>
      <FunctionComponent/>
         </div>
  );
}

export default App;
