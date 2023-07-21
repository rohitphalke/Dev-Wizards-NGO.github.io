import './App.css';
import './css_files/rohit.css';
import Login from './components/Login'
import Navbar from './components/Navbar'
import Gallery from './components/Gallery'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Donate from './components/Donate'
import Events_and_campaigns from './components/Events_and_campaigns'
import Footer from './components/Footer'
import Profile from './components/Profile'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
          <Navbar/>
          <Routes>
            <Route path="/" element={<Gallery />} />
            <Route path="/home" element={<Home />} />
            <Route path="/signup_login" element={<Login />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/donate" element={<Donate />} />
            <Route path="/events_and_campaigns" element={<Events_and_campaigns />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
          <Footer/>
      </Router>
    </>
  );
}

export default App;
