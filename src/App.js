import './App.css';
import './css_files/rohit.css';
import './css_files/styles.css';
import Login from './components/Login'
import Navbar from './components/Navbar'
import Gallery from './components/Gallery'
import Home from './components/Home'
import About from './components/About'
import ContactUs from './components/ContactUs';
import Donate from './components/Donate'
import Footer from './components/Footer'
import Profile from './components/Profile'
import Events from './components/Events/Events'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { useState } from 'react';

function App() {
  const [loginStatus, setLoginStatus] = useState("Login/Sign Up")
  const [userInfo, setUserInfo] = useState({ name: "", username: "", email: "", password: "" })
  return (
    <>
      <Router>
        <Navbar stat={{ loginStatus, setLoginStatus }} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Dev-Wizards-NGO.github.io" element={<Home />} />
          <Route path="/Dev-Wizards-NGO.github.io/home" element={<Home />} />
          <Route path="/Dev-Wizards-NGO.github.io/signup_login" element={<Login user_stat={{ userInfo, setUserInfo, setLoginStatus }} />} />
          {/* <Route path="/signup_login" component={Login} user_stat={{userInfo, setUserInfo, setLoginStatus}}/> */}
          <Route path="/Dev-Wizards-NGO.github.io/about" element={<About />} />
          <Route path="/Dev-Wizards-NGO.github.io/contact" element={<ContactUs />} />
          <Route path="/Dev-Wizards-NGO.github.io/donate" element={<Donate />} />
          <Route path="/Dev-Wizards-NGO.github.io/events" element={<Events />} />
          <Route path="/Dev-Wizards-NGO.github.io/gallery" element={<Gallery />} />
          {
            userInfo.name !== "" ? <Route path="/Dev-Wizards-NGO.github.io/profile" element={<Profile user_info={userInfo} />} /> : <Route path="/Dev-Wizards-NGO.github.io/profile" element={<h1>Oops! No user signed in</h1>} />
          }
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
