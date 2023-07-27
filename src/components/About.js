import React from 'react'
import CountUp from 'react-countup';
// import about_photo from '../assets/about.png';
import about_photo from '../images_videos/services-3.jpg';
import '../css_files/about.css';
import { Carousel } from 'react-responsive-carousel';
import img1 from "../images_videos/team-1.jpg";
import img2 from "../images_videos/team-2.jpg";
import img3 from "../images_videos/team-3.jpg";
import img4 from "../images_videos/team-4.jpg";
import img5 from "../images_videos/pic1.1.png";

const mystyle = {
  color: "orange",
  // backgroundColor: "DodgerBlue",
  fontFamily: "Arial",
  fontSize: 50 
};
const mystyle2 = {
  // backgroundColor: "DodgerBlue",
  // backgroundColor: "red"
  // fontSize: 5000 
};

const About = () => {
  return (
    <>
      <section className="ftco-section ftco-no-pt ftco-no-pb">
        <div className="container">
          <div className="row d-flex no-gutters">
            <div className="col-md-6 d-flex order-md-last">
              <div className="img img-video d-flex align-self-stretch align-items-center justify-content-center justify-content-md-center mb-4 mb-sm-0" style={{ backgroundImage: 'url(images/about-1.jpg)' }}>
              </div>
            </div>
            <div className="col-md-6 pr-md-5 py-md-5">
              <div className="heading-section pt-md-5 mb-4">
                <span className="subheading">About us</span>
                <h2 className="mb-2">Give a helping hand to a needy people</h2>
                <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                <p><a href="#" className="btn btn-secondary">Become a Volunteer</a></p>
              </div>
            </div>
            <div className="col-md-6 pr-md-5 py-md-5">
              <img className="img-fluid" src={about_photo} alt="" />
            </div>
          </div>
        </div>
      </section>
      <section className="ftco-counter" id="section-counter">
        <div >
          <div className="row">
            <div className="col-md-3 mb-5 mb-md-0 text-center text-md-left">
              <h2 className="font-weight-bold" >We're on a mission to help all your problems</h2>
              <a href="#" className="btn btn-white btn-outline-white">Donate Now</a>
            </div>
            <div className="col-md-9">
              <div className="row">
                <div className="col-md-6 col-lg-3 d-flex justify-content-center">
                <div className="text-center" >
                <div className="text"  style={mystyle2}>
                      <strong className="number">
                        <CountUp style={mystyle} end={900} duration={5} />
                      </strong>
                    </div>
                    <div className="text">
                      <span>Donation Campaigns are running</span>
                    </div>
                </div>
                </div>
                <div className="col-md-6 col-lg-3 d-flex justify-content-center">
                <div className="text-center">
                <div className="text">
                      <strong className="number">
                        <CountUp style={mystyle} end={1250} duration={5} />
                      </strong>
                    </div>
                    <div className="text">
                      <span>Professional and kind volunteers</span>
                    </div>
                </div>
                </div>
                <div className="col-md-6 col-lg-3 d-flex justify-content-center">
                <div className="text-center">
                <div className="text">
                      <strong className="number">
                        <CountUp style={mystyle} end={3000} duration={5} />
                      </strong>
                    </div>
                    <div className="text">
                      <span>Funds we raised till now on site</span>
                    </div>
                </div>
                </div>
                <div className="col-md-6 col-lg-3 d-flex justify-content-center">
                <div className="text-center">
                <div className="text">
                      <strong className="number">
                        <CountUp style={mystyle} end={369} duration={5} />
                      </strong>
                    </div>
                    <div className="text">
                      <span>Dedicated Donors</span>
                    </div>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div style={{
        alignContent: 'center',
      }}>
        <img className="img" src={img5} alt="" />
      </div>
    </>
  )
}

export default About
