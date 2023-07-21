import './App.css';
import './css_files/rohit.css';
import Login from './components/Login'
import Navbar from './components/Navbar'
import Gallery from './components/Gallery'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Donate from './components/Donate'
import Footer from './components/Footer'
import Profile from './components/Profile'
import Events from './components/Events/Events'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <>
      <HashRouter>
          <Navbar/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/signup_login" element={<Login />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/donate" element={<Donate />} />
            <Route path="/events" element={<Events />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/profile" element={<Profile name='Rohit' username='rohit1' email='rohit@gmail.com'/>} />
          </Routes>
          <Footer/>
      </HashRouter>
    </>
  );
}

export default App;
