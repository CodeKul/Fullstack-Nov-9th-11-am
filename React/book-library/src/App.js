import logo from './logo.svg';
import './App.css';
import BookProvider from './components/BookContext';
import BookList from './components/BookList';
import Navbar from './components/Navbar';
import AddNewBook from './components/AddNewBook';

// https://community.nasscom.in/communities/mobile-web-development/controlled-uncontrolled-components-react

function App() {
  return (
    <div className="App">
     


        <Navbar />

        <AddNewBook/>
        <BookList />

    
    </div>
  );
}

export default App;
