import React from 'react'
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="container-fluid bg-white mt-5">
    <div className="row">
      <div className="col-lg-4 p-4">
        <h3 className="h-font fw-bold fs-3 mb-2">NGO</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Mollitia dolorum molestias temporibus voluptatem, esse fuga soluta doloremque nobis ea quos voluptatibus
          debitis sed voluptate velit obcaecati voluptates voluptas amet? Quos.</p>
      </div>
      <div className="col-lg-4 p-4">
        <h5 className="mb-3">Links</h5>
        <Link href="/" className="d-inline-block mb-2 text-dark text-decoration-none">Home</Link> <br/>
        <Link href="/about" className="d-inline-block mb-2 text-dark text-decoration-none">About</Link> <br/>
        <Link href="/contact" className="d-inline-block mb-2 text-dark text-decoration-none">Contact Us</Link> <br/>
        <Link href="/donate" className="d-inline-block mb-2 text-dark text-decoration-none">Donate</Link> <br/>
        <Link href="/events" className="d-inline-block mb-2 text-dark text-decoration-none">Events</Link><br/>
      </div>
      <div className="col-lg-4 p-4">
        <h5 className="mb-3">Follow Us</h5>
        <Link href="#" className="d-inline-block text-dark text-decoration-none mb-2">
          <i className="bi bi-twitter me-1"></i> Twitter</Link> <br/>
        <Link href="#" className="d-inline-block text-dark text-decoration-none mb-2">
          <i className="bi bi-instagram me-1"></i> Instagram</Link> <br/>
        <Link href="#" className="d-inline-block text-dark text-decoration-none">
          <i className="bi bi-facebook me-1"></i> Facebook</Link> <br/>
      </div>
    </div>
  </div>
    </>
  )
}

export default Footer;
