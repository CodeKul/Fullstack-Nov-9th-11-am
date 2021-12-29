import logo from './logo.svg';
import './App.css';


// https://beta.reactjs.org/learn
// https://reactjs.org/docs/create-a-new-react-app.html
// https://medium.com/codex/the-lifecycle-of-a-react-component-8e01332a068d
// https://blog.logrocket.com/react-lifecycle-methods-tutorial-examples/#componentWillUnmount

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
