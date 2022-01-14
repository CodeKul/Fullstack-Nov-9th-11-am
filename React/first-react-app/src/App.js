import logo from './logo.svg';
import './App.css';
//import "./Function.css"
import Home from './components/ClassComponent';
import FunctionComponent from './components/FunctionComponent';
import ClassCounter from './components/ClassCounter';
import FunctionCounter from './components/FunctionCounter';
import HelloMessage from './components/HelloMessage';
import CounterEx from './components/CounterEx';
import CounterFunction from './components/CounterFunction';


// https://beta.reactjs.org/learn
// https://reactjs.org/docs/create-a-new-react-app.html
// https://medium.com/codex/the-lifecycle-of-a-react-component-8e01332a068d
// https://blog.logrocket.com/react-lifecycle-methods-tutorial-examples/#componentWillUnmount
// https://dev.to/mustafaanaskh99/react-state-for-dummies-state-and-virtual-dom-1ac6
// https://www.pluralsight.com/guides/virtual-dom-explained
// https://medium.com/byte-sized-react/what-is-this-in-react-25c62c31480
// https://medium.com/@rajwar67/a-guide-to-bind-this-keyword-in-react-js-256c7ee39970
// https://blog.logrocket.com/react-hooks-cheat-sheet-unlock-solutions-to-common-problems-af4caf699e70/

function App() {
  return (
    <div className="App">
      {/* <Home/>
      <FunctionComponent/> */}

      {/* <ClassCounter/> */}
      {/* <FunctionCounter/> */}

      {/* <HelloMessage name="Sanket" />

      <HelloMessage name="Yash" /> */}

      {/* <CounterEx/> */}

      <HelloMessage name="Sanket"/>

      <HelloMessage name="Madhav"/>

      {/* <CounterFunction/> */}

    </div>
  );
}

export default App;
