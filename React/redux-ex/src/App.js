import BankOperations from "./components/BankOperations";
import Balance from "./components/Balance";
import "./App.css";
import AccountType from "./components/AccountType";
import Login from "./components/Login";

// https://blog.logrocket.com/react-context-api-deep-dive-examples/
function App() {
  return (
    <div className="container">
      <Login />
      <Balance />
      <BankOperations />
      <AccountType />
    </div>
  );
}

export default App;
