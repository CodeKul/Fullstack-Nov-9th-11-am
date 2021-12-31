import logo from './logo.svg';
import './App.css';
//import "./Function.css"
import Home from './components/ClassComponent';
import FunctionComponent from './components/FunctionComponent';
import ClassCounter from './components/ClassCounter';
import FunctionCounter from './components/FunctionCounter';
import HelloMessage from './components/HelloMessage';


// https://beta.reactjs.org/learn
// https://reactjs.org/docs/create-a-new-react-app.html
// https://medium.com/codex/the-lifecycle-of-a-react-component-8e01332a068d
// https://blog.logrocket.com/react-lifecycle-methods-tutorial-examples/#componentWillUnmount

function App() {
  return (
    <div className="App">
      {/* <Home/>
      <FunctionComponent/> */}

      {/* <ClassCounter/> */}
      {/* <FunctionCounter/> */}

      <HelloMessage name="Sanket"/>

      <HelloMessage name="Yash"/>
         </div>
  );
}

export default App;
