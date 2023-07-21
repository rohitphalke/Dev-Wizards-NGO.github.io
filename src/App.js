import './App.css';
import './css_files/rohit.css';
import Login from './components/Login'
import Navbar from './components/Navbar'
import Gallery from './components/Gallery'
import Footer from './components/Footer'
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
            <Route path="/home" element={<Footer />} />
            <Route path="/signup_login" element={<Login />} />
          </Routes>
      </Router>
    </>
  );
}

export default App;
