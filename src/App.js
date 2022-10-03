import {useState, useEffect} from 'react';
import Home from './Home';
import About from './About';
import NavigationMenu from './NavigationMenu'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';  
import './App.css';
import MoonLoader from "react-spinners/MoonLoader";
import Projects from "./Projects";
import Contact from './Contact';

function App() {

  const [loading, setLoading] = useState(false)


  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  },[]);
  return (
    <Router>
      <div className="app">
        {
      loading ? (
        <div className='pageLoader'>
          <MoonLoader color={'purple'} loading={loading} size={30} />
        </div>
      )
      : 
      (
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>} />
          <Route path="/menu" element={<NavigationMenu/>} />
          <Route path="/projects" element={<Projects/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
        )}
      </div>
    </Router>
  );
}

export default App;
