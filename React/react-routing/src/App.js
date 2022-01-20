import logo from './logo.svg';
import './App.css';



// https://reactrouter.com/docs/en/v6/upgrading/v5 
// https://reactrouter.com/docs/en/v6/getting-started/overview
// https://github.com/remix-run/react-router/blob/main/docs/getting-started/tutorial.md
// https://v5.reactrouter.com/web/guides/quick-start
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
