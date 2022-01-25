import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './components/About';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Home from './components/Home';
import Footer from './components/Footer';
import Blog1 from './components/Blog1';
import Blog2 from './components/Blog2';
import BlogContent from './components/BlogContent';
import Game from './components/Game';



// https://reactrouter.com/docs/en/v6/upgrading/v5 
// https://reactrouter.com/docs/en/v6/getting-started/overview
// https://github.com/remix-run/react-router/blob/main/docs/getting-started/tutorial.md
// https://v5.reactrouter.com/web/guides/quick-start
function App() {


  const topics = [

    {
      topicName: "CSS Grid",
      id: 1,
      description: "",
      content: [{
        title: "Rows and Columns in Grid",
        id: "CSS",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio quia iure sit sint maiores aliquam minus dicta fugiat repellendus nesciunt laudantium"

      }]

    },


    {
      topicName: "",
      topicDescription: "",
      content: [
        {
          title: "Rows and Columns in Grid",
          id: "CSS",
          description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio quia iure sit sint maiores aliquam minus dicta fugiat repellendus nesciunt laudantium"

        }
      ]

    },

    {
      topicName: "",
      topicDescription: "",
      content: [
        {
          title: "Rows and Columns in Grid",
          id: "CSS",
          description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio quia iure sit sint maiores aliquam minus dicta fugiat repellendus nesciunt laudantium"

        }
      ]

    },



  ]


  return (
    <div className="App">

      <h1>React Routing</h1>



      <BrowserRouter>



        <Navbar />
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<About />} />
          {/* <Route path='/blog' element={<Blog />} /> */}
          <Route path='/contact' element={<Contact />} />

          <Route path='/blog' element={<Blog topics={topics} />} >
            {/* <Route path='/blog1' element={<Blog1 />} />
            <Route path='/blog2' element={<Blog2 />} /> */}
          </Route>

          <Route path='/blog:topicId' element={<BlogContent/>}/>

          <Route path='/game' element={<Game/>}/>
        </Routes>
        <Footer />

      </BrowserRouter>
    </div>
  );
}

export default App;
