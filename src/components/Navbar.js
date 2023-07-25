import React from 'react'
import { Link, useNavigate } from "react-router-dom";
const Navbar = (props) => {
  const navigate = useNavigate()
  const logout = (event) => {
    event.preventDefault();
    props.stat.setLoginStatus("Login/Sign Up")
    navigate('/')
  }
  return (
    <nav
      className={"navbar navbar-expand-lg navbar-light bg-light"}
    >
      <Link className="navbar-brand" to='/'>NGO</Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active mx-3">
            <Link className="nav-a" to='/'>
              Home
            </Link>
          </li>
          <li className="nav-item mx-3">
            <Link className="nav-a" to="/about">
              About
            </Link>
          </li>
          <li className="nav-item mx-3">
            <Link className="nav-a" to="/contact">
              Contact Us
            </Link>
          </li>
          <li className="nav-item mx-3">
            <Link className="nav-a" to="/donate">
              Donate
            </Link>
          </li>
          <li className="nav-item mx-3">
            <Link className="nav-a" to="/events">
              Events
            </Link>
          </li>
          <li className="nav-item mx-3">
            <Link className="nav-a" to="/gallery">
              Gallery
            </Link>
          </li>
          <li className="nav-item mx-3">
            <Link className="nav-a" to={props.stat.loginStatus==="Profile" ? "/profile" : "/signup_login"}>
              {props.stat.loginStatus}
            </Link>
          </li>
          {props.stat.loginStatus==="Profile" ? 
            <li className="nav-item mx-3">
            <Link style={{pointer:'cursor'}} className="nav-a" onClick={logout} >
              Log Out
            </Link>
          </li>
            :
            <li style={{display: 'none'}}></li>
          }
        </ul>
        {/* <form className="form-inline my-2 my-lg-0">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button
            className="btn btn-primary my-2 my-sm-0"
            type="submit"
          >
            Search
          </button>
        </form> */}
      </div>

    </nav>
  );
}


export default Navbar
