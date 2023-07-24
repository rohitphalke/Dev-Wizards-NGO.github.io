import React from 'react'
const Navbar = () => {
  return (
    <nav
      className={"navbar navbar-expand-lg navbar-light bg-light"}
    >
      <a href='/' className="navbar-brand">NGO</a>
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
            <a className="nav-a" href="/">
              Home
            </a>
          </li>
          <li className="nav-item mx-3">
            <a className="nav-a" href="/about">
              About
            </a>
          </li>
          <li className="nav-item mx-3">
            <a className="nav-a" href="/contact">
              Contact Us
            </a>
          </li>
          <li className="nav-item mx-3">
            <a className="nav-a" href="/donate">
              Donate
            </a>
          </li>
          <li className="nav-item mx-3">
            <a className="nav-a" href="/events">
              Events
            </a>
          </li>
          <li className="nav-item mx-3">
            <a className="nav-a" href="/gallery">
              Gallery
            </a>
          </li>
          <li className="nav-item mx-3">
            <a className="nav-a" href="/profile">
              Profile
            </a>
          </li>
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
