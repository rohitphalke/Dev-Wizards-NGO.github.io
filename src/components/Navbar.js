import React from 'react'
import { Link, useNavigate } from "react-router-dom";
const Navbar = (props) => {
  const navigate = useNavigate()
  const logout = (event) => {
    event.preventDefault();
    props.stat.setLoginStatus("Login/Sign Up")
    navigate('/Dev-Wizards-NGO.github.io')
  }
  return (
    <nav
      className={"navbar navbar-expand-lg navbar-dark bg-dark "}
    >
      <Link className="navbar-brand" to='/Dev-Wizards-NGO.github.io'>NGO</Link>
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
            <Link className="nav-link" to='/Dev-Wizards-NGO.github.io'>
              Home
            </Link>
          </li>
          <li className="nav-item mx-3">
            <Link className="nav-link" to="/Dev-Wizards-NGO.github.io/about">
              About
            </Link>
          </li>
          <li className="nav-item mx-3">
            <Link className="nav-link" to="/Dev-Wizards-NGO.github.io/contact">
              Contact Us
            </Link>
          </li>
          <li className="nav-item mx-3">
            <Link className="nav-link" to="/Dev-Wizards-NGO.github.io/donate">
              Donate
            </Link>
          </li>
          <li className="nav-item mx-3">
            <Link className="nav-link" to="/Dev-Wizards-NGO.github.io/events">
              Events
            </Link>
          </li>
          <li className="nav-item mx-3">
            <Link className="nav-link" to="/Dev-Wizards-NGO.github.io/gallery">
              Gallery
            </Link>
          </li>
          <li className="nav-item mx-3">
            <Link className="nav-link" to={props.stat.loginStatus==="Profile" ? "/Dev-Wizards-NGO.github.io/profile" : "/Dev-Wizards-NGO.github.io/signup_login"}>
              {props.stat.loginStatus}
            </Link>
          </li>
          {props.stat.loginStatus==="Profile" ? 
            <li className="nav-item mx-3">
            <Link style={{pointer:'cursor'}} className="nav-link" onClick={logout} >
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
          //   <nav
          //   className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light"
          //   id="ftco-navbar"
          // >
          //   <div className="container">
          //   <Link className="navbar-brand" to='/'>NGO</Link>
          //     <button
          //       className="navbar-toggler"
          //       type="button"
          //       data-toggle="collapse"
          //       data-target="#ftco-nav"
          //       aria-controls="ftco-nav"
          //       aria-expanded="false"
          //       aria-label="Toggle navigation"
          //     >
          //       <span className="oi oi-menu" /> Menu
          //     </button>
          //     <div className="collapse navbar-collapse" id="ftco-nav">
          //       <ul className="navbar-nav ml-auto">
          //         <li className="nav-item active">
          //         <Link className="nav-link" to='/'> Home</Link>
          //         </li>
          //         <li className="nav-item">
          //         <Link className="nav-link" to="/about">About</Link>
          //         </li>
          //         <li className="nav-item">
          //         <Link className="nav-link" to="/contact">Conatct Us</Link>
          //         </li>
          //         <li className="nav-item">
          //         <Link className="nav-link" to="/events">Events</Link>
          //         </li>
          //         <li className="nav-item">
          //         <Link className="nav-link" to="/gallery">Gallery</Link>
          //         </li>
          //         <li className="nav-item mx-3">
          //    <Link className="nav-link" to={props.stat.loginStatus==="Profile" ? "/profile" : "/signup_login"}>
          //      {props.stat.loginStatus}
          //    </Link>
          //  </li>
          //  {props.stat.loginStatus==="Profile" ? 
          //    <li className="nav-item mx-3">
          //    <Link style={{pointer:'cursor'}} className="nav-link" onClick={logout} >
          //      Log Out
          //    </Link>
          //  </li>
          //    :
          //    <li style={{display: 'none'}}></li>
          //  }
          //         <button>
          //         <li className="nav-item cta">
          //         <Link className="nav-link" to="/gallery">Gallery</Link>
          //         </li>
          //         </button>

          //       </ul>
          //     </div>
          //   </div>
          // </nav>
  );
}


export default Navbar
