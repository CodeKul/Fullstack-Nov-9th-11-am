import logo from './logo.svg';
import './App.css';
import BookProvider from './components/BookContext';
import BookList from './components/BookList';
import Navbar from './components/Navbar';
import AddNewBook from './components/AddNewBook';

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
