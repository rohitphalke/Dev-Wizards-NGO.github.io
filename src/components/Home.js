import React from 'react';
import '../css_files/udit.css'; // Replace 'your-css-file-path.css' with the actual path to your CSS file
 // Replace 'your-css-file-path.css' with the actual path to your CSS file
import '../css_files/animate.css';
import '../css_files/owl.carousel.min.css';
import '../css_files/owl.theme.default.min.css';
import '../css_files/magnific-popup.css';
import '../css_files/bootstrap-datepicker.css';
import '../css_files/jquery.timepicker.css';
import '../css_files/flaticon.css';
import '../fonts/flaticon/font/flaticon.css';
import img1 from "../images_videos/services-1.jpg";
import img2 from "../images_videos/services-2.jpg";
import img3 from "../images_videos/services-3.jpg";
import img4 from "../images_videos/services-4.jpg";
import CountUp from "react-countup";
import img5 from "../images_videos/pic1.1.png";
import img6 from "../images_videos/pic1.2.png";

const Home = () => {
  return (
    <div>
      <>
        <title>NGO</title>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />

        <section className="ftco-appointment ftco-section ftco-no-pt ftco-no-pb img">
          <div className="overlay" />
          <div className="container">
            <div className="row">
              <div className="col-md-5 order-md-last d-flex align-items-stretch">
                <div className="donation-wrap my-5">
                  <div className="total-donate d-flex align-items-center">
                    <span className="fa flaticon-cleaning" />
                    <h4>
                      Donation Campaign <br />
                      are running
                    </h4>
                    <p className="d-flex align-items-center">
                      <span>$</span>
                      <strong className="number">
                        <CountUp end={1000} duration={5} />
                      </strong>
                    </p>
                  </div>
                  <form action="#" className="appointment">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="form-group">
                          <label htmlFor="name">Full Name</label>
                          <div className="input-wrap">
                            <div className="icon">
                              <span className="fa fa-user" />
                            </div>
                            <input
                              type="text"
                              className="form-control"
                              placeholder=""
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <label htmlFor="name">Email Address</label>
                          <div className="input-wrap">
                            <div className="icon">
                              <span className="fa fa-paper-plane" />
                            </div>
                            <input
                              type="email"
                              className="form-control"
                              placeholder=""
                            />
                          </div>
                        </div>
                      </div>
                      
                      <div className="col-md-12">
                        <div className="form-group">
                          <label htmlFor="name">Age</label>
                          <div className="input-wrap">
                            <div className="icon">
                              <span className="fa fa-money" />
                            </div>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="18+"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <label htmlFor="name"> Help Lives. Empower the Young. Volunteer Now</label>
                          <div className="d-lg-flex">
                            <div className="form-radio mr-3">
                              <div className="radio">
                                <label>
                                  <input
                                    type="radio"
                                    name="radio-input"
                                    defaultChecked=""
                                  />

                                </label>
                              </div>
                            </div>
                            
                            
                          </div>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <input
                            type="Donate"
                            defaultValue="Volunteer Now"
                            className="btn btn-secondary py-3 px-4"
                          />
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-md-7 wrap-about py-5">
                <div className="heading-section pr-md-5 pt-md-5">
                  <span className="subheading">Welcome to NGO</span>
                  <h2 className="mb-4">We are here to help everyone in need</h2>
                  <p>
                    Welcome to our NGO, a beacon of hope for the most vulnerable among us - needy children. With a heartwarming mission to uplift young lives, we dedicate ourselves to providing essential support and care. Our tireless efforts focus on nourishing bodies, minds, and spirits.

                    Through our diverse programs, we ensure nutritious meals, proper healthcare, and access to quality education for these precious souls. We create safe havens where they can thrive, laugh, and dream freely. Our dedicated team of compassionate individuals guides them towards a brighter future.

                    Together with our generous supporters, we build a strong foundation for these children to break free from the chains of poverty. We believe in empowering them with love, knowledge, and opportunities to unleash their potential. Join us in this transformative journey as we sow seeds of kindness and cultivate a world where every child can flourish.
                  </p>
                </div>
                <div className="row my-md-5">
                  <div className="col-md-6 d-flex counter-wrap">
                    <div className="block-18 d-flex">
                      <div className="icon d-flex align-items-center justify-content-center">
                        <span className="flaticon-volunteer" />
                      </div>
                      <div className="desc">
                        <div className="text">
                        <strong className="number">
                        <CountUp end={10000} duration={5} />
                      </strong>
                        </div>
                        <div className="text">
                          <span>Volunteers</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 d-flex counter-wrap">
                    <div className="block-18 d-flex">
                      <div className="icon d-flex align-items-center justify-content-center">
                        <span className="flaticon-piggy-bank" />
                      </div>
                      <div className="desc">
                        <div className="text">
                        <strong className="number">
                        <CountUp end={7000} duration={5} />
                      </strong>
                        </div>
                        <div className="text">
                          <span>Trusted Funds</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <p>
                  <a href="#" className="btn btn-secondary btn-outline-secondary">
                    Become A Volunteer
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="ftco-section ftco-no-pt ftco-no-pb">
          <div className="container">
            <div className="row no-gutters">
              <div className="col-md-3 d-flex align-items-stretch">
                <div className="services">
                  <div className="text text-center bg-secondary">
                    <h3>
                      Become a <br />
                      Volunteer
                    </h3>
                    <p>
                      Join Our Cause: Become a Volunteer Today! Empower Change, Ignite Hope, Transform Lives. Together, We Make a Difference
                    </p>
                  </div>
                  <div
                    className="img border-2"                  >
                      <img className="img-fluid" src={img1} alt="" />
                    <div className="icon d-flex align-items-center justify-content-center">
                      <span className="flaticon-volunteer" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3 d-flex align-items-stretch">
                <div className="services">
                  <div className="text text-center bg-tertiary">
                    <h3>
                      Quick <br />
                      Fundraising
                    </h3>
                    <p>
                      Support Our Mission! Every Contribution Counts. Empower Change, Create Impact, Transform Lives. Join Us Today!
                    </p>
                  </div>
                  <div
                    className="img border-3"                  >
                      <img className="img-fluid" src={img2} alt="" />
                    <div className="icon d-flex align-items-center justify-content-center">
                      <span className="flaticon-piggy-bank" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3 d-flex align-items-stretch">
                <div className="services">
                  <div className="text text-center bg-primary">
                    <h3>
                      Start <br />
                      Donating
                    </h3>
                    <p>
                      Make a Difference Now! Your Generosity Empowers Change, Nourishes Lives, and Fuels Hope. Join Our Cause Today!
                    </p>
                  </div>
                  <div
                    className="img border-1"        
                  >
                    <img className="img-fluid" src={img3} alt="" />
                    <div className="icon d-flex align-items-center justify-content-center">
                      <span className="flaticon-donation" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3 d-flex align-items-stretch">
                <div className="services">
                  <div className="text text-center bg-quarternary">
                    <h3>
                      Get <br />
                      Involved
                    </h3>
                    <p>
                      e the Change! Join Our Movement, Empower Communities, and Create Lasting Impact. Together, Let's Shape a Better World.
                    </p>
                  </div>
                  <div
                    className="img border-4"                  >
                      <img className="img-fluid" src={img4} alt="" />
                    <div className="icon d-flex align-items-center justify-content-center">
                      <span className="flaticon-ecological" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        
        <div style={{
          fontSize: `${window.innerWidth > 600 ? '2rem' : '1.3rem'} `,
          fontWeight: 'bold',
          textAlign: 'center',
          margin: '2rem auto',
          borderBottom: '2px solid #000',
          paddingBottom: '0.5rem',

          width: `${window.innerWidth > 900 ? 'fit-content' : '80%'} `,
        }}>Donate To Charity Causes Around The World.</div>

        <div style={{
          alignContent: 'center',
        }}>
          <img className="img" src={img6} alt="" />
        </div>
        {/* <div style={{
          alignContent: 'center',
        }}>
          <img className="img" src={img5} alt="" />
        </div> */}

      
       
        
        {/* Include this in About Page */}
        {/* <section className="ftco-section ftco-no-pt">
          <div className="container">
            <div className="row justify-content-center pb-5 mb-3">
              <div className="col-md-7 heading-section text-center ftco-animate">
                <span className="subheading">Volunteer</span>
                <h2>Our Expert Volunteer</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 col-lg-3">
                <div className="volunteer">
                  <div
                    className="img"
                    style={{ backgroundImage: "url(../images_videos/team-1.jpg)" }}
                  />
                  <div className="text text-1">
                    <h3>Alex Martin</h3>
                    <span>Volunteer</span>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="volunteer">
                  <div
                    className="img"
                    style={{ backgroundImage: "url(../images_videos/team-2.jpg)" }}
                  />
                  <div className="text text-2">
                    <h3>Cedrick Brown</h3>
                    <span>Volunteer</span>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="volunteer">
                  <div
                    className="img"
                    style={{ backgroundImage: "url(../images_videos/team-3.jpg)" }}
                  />
                  <div className="text text-3">
                    <h3>John Wick</h3>
                    <span>Volunteer</span>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="volunteer">
                  <div
                    className="img"
                    style={{ backgroundImage: "url(../images_videos/team-4.jpg)" }}
                  />
                  <div className="text text-4">
                    <h3>Max Love</h3>
                    <span>Volunteer</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}
        <section className="ftco-hireme bg-secondary">
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-md-8 col-lg-8 d-flex align-items-center">
                <div className="w-100">
                  <h2>Best Way to Make a Difference in the Lives of Others</h2>
                </div>
              </div>
              <div className="col-md-4 col-lg-4 d-flex align-items-center justify-content-end">
                <p className="mb-0">
                  <a href="#" className="btn btn-primary py-3 px-4">
                    Donate Now
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* loader */}
        {/* <div id="ftco-loader" className="show fullscreen">
          <svg className="circular" width="48px" height="48px">
            <circle
              className="path-bg"
              cx={24}
              cy={24}
              r={22}
              fill="none"
              strokeWidth={4}
              stroke="#eeeeee"
            />
            <circle
              className="path"
              cx={24}
              cy={24}
              r={22}
              fill="none"
              strokeWidth={4}
              strokeMiterlimit={10}
              stroke="#F96D00"
            />
          </svg>
        </div> */}
      </>

    </div>
  );
}

export default Home;
