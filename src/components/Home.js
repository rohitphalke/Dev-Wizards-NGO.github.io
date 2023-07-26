import React from 'react';
import '../css_files/udit.css'; // Replace 'your-css-file-path.css' with the actual path to your CSS file
import '../css_files/style.css'; // Replace 'your-css-file-path.css' with the actual path to your CSS file
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
                      <span className="number" data-number={24781}>
                        0
                      </span>
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
                          <label htmlFor="name">Select Causes</label>
                          <div className="form-field">
                            <div className="select-wrap">
                              <div className="icon">
                                <span className="fa fa-chevron-down" />
                              </div>
                              <select name="" id="" className="form-control">
                                <option value="" />
                                <option value="">House Washing</option>
                                <option value="">Roof Cleaning</option>
                                <option value="">Driveway Cleaning</option>
                                <option value="">Gutter Cleaning</option>
                                <option value="">Patio Cleaning</option>
                                <option value="">Building Cleaning</option>
                                <option value="">Concrete Cleaning</option>
                                <option value="">Sidewal Cleaning</option>
                              </select>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <label htmlFor="name">Amount</label>
                          <div className="input-wrap">
                            <div className="icon">
                              <span className="fa fa-money" />
                            </div>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="$5"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <label htmlFor="name">Payment Method</label>
                          <div className="d-lg-flex">
                            <div className="form-radio mr-3">
                              <div className="radio">
                                <label>
                                  <input
                                    type="radio"
                                    name="radio-input"
                                    defaultChecked=""
                                  />
                                  <span className="checkmark" />
                                  <span className="fill-control-description">
                                    Credit Card
                                  </span>
                                </label>
                              </div>
                            </div>
                            <div className="form-radio mr-3">
                              <div className="radio">
                                <label>
                                  <input type="radio" name="radio-input" />
                                  <span className="checkmark" />
                                  <span className="fill-control-description">
                                    Paypal
                                  </span>
                                </label>
                              </div>
                            </div>
                            <div className="form-radio">
                              <div className="radio">
                                <label>
                                  <input type="radio" name="radio-input" />
                                  <span className="checkmark" />
                                  <span className="fill-control-description">
                                    Payoneer
                                  </span>
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <input
                            type="submit"
                            defaultValue="Donate Now"
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
                  <span className="subheading">Welcome to BC NGO Fucker</span>
                  <h2 className="mb-4">We are here to help everyone in need</h2>
                  <p>
                    On her way she met a copy. The copy warned the Little Blind Text,
                    that where it came from it would have been rewritten a thousand
                    times and everything that was left from its origin would be the
                    word "and" and the Little Blind Text should turn around and return
                    to its own, safe country. But nothing the copy said could convince
                    her and so it didn’t take long until a few insidious Copy Writers
                    ambushed her, made her drunk with Longe and Parole and dragged her
                    into their agency, where they abused her for their.
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
                          <strong className="number" data-number={50}>
                            0
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
                          <strong className="number" data-number={24400}>
                            0
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
                      But nothing the copy said could convince her and so it didn’t
                      take long until a few
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
                      But nothing the copy said could convince her and so it didn’t
                      take long until a few
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
                      But nothing the copy said could convince her and so it didn’t
                      take long until a few
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
                      But nothing the copy said could convince her and so it didn’t
                      take long until a few
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
        <section className="ftco-section ftco-no-pb">
          <div className="container">
            <div className="row justify-content-center pb-5 mb-3">
              <div className="col-md-7 heading-section text-center ftco-animate">
                <span className="subheading">Our Causes</span>
                <h2>Donate to charity causes around the world</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 col-lg-3">
                <div className="causes causes-2 text-center ftco-animate">
                  <a
                    href="#"
                    className="img w-100"
                    style={{ backgroundImage: "url(../images_videos/causes-1.jpg)" }}
                  />
                  <div className="text p-3">
                    <h2>
                      <a href="#">Save the poor children from hunger</a>
                    </h2>
                    <p>
                      Far far away, behind the word mountains, far from the countries
                      Vokalia
                    </p>
                    <div className="goal mb-4">
                      <p>
                        <span>$3,800</span> to go
                      </p>
                      <div className="progress" style={{ height: 20 }}>
                        <div
                          className="progress-bar progress-bar-striped"
                          style={{ width: "70%", height: 20 }}
                        >
                          70%
                        </div>
                      </div>
                    </div>
                    <p>
                      <a href="#" className="btn btn-light w-100">
                        Donate Now
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="causes causes-2 text-center ftco-animate">
                  <a
                    href="#"
                    className="img w-100"
                    style={{ backgroundImage: "url(../images_videos/causes-2.jpg)" }}
                  />
                  <div className="text p-3">
                    <h2>
                      <a href="#">Save the poor children from hunger</a>
                    </h2>
                    <p>
                      Far far away, behind the word mountains, far from the countries
                      Vokalia
                    </p>
                    <div className="goal mb-4">
                      <p>
                        <span>$3,800</span> to go
                      </p>
                      <div className="progress" style={{ height: 20 }}>
                        <div
                          className="progress-bar progress-bar-striped"
                          style={{ width: "82%", height: 20 }}
                        >
                          82%
                        </div>
                      </div>
                    </div>
                    <p>
                      <a href="#" className="btn btn-light w-100">
                        Donate Now
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="causes causes-2 text-center ftco-animate">
                  <a
                    href="#"
                    className="img w-100"
                    style={{ backgroundImage: "url(../images_videos/causes-3.jpg)" }}
                  />
                  <div className="text p-3">
                    <h2>
                      <a href="#">Save the poor children from hunger</a>
                    </h2>
                    <p>
                      Far far away, behind the word mountains, far from the countries
                      Vokalia
                    </p>
                    <div className="goal mb-4">
                      <p>
                        <span>$3,800</span> to go
                      </p>
                      <div className="progress" style={{ height: 20 }}>
                        <div
                          className="progress-bar progress-bar-striped"
                          style={{ width: "95%", height: 20 }}
                        >
                          95%
                        </div>
                      </div>
                    </div>
                    <p>
                      <a href="#" className="btn btn-light w-100">
                        Donate Now
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="causes causes-2 text-center ftco-animate">
                  <a
                    href="#"
                    className="img w-100"
                    style={{ backgroundImage: "url(../images_videos/causes-4.jpg)" }}
                  />
                  <div className="text p-3">
                    <h2>
                      <a href="#">Save the poor children from hunger</a>
                    </h2>
                    <p>
                      Far far away, behind the word mountains, far from the countries
                      Vokalia
                    </p>
                    <div className="goal mb-4">
                      <p>
                        <span>$3,800</span> to go
                      </p>
                      <div className="progress" style={{ height: 20 }}>
                        <div
                          className="progress-bar progress-bar-striped"
                          style={{ width: "75%", height: 20 }}
                        >
                          75%
                        </div>
                      </div>
                    </div>
                    <p>
                      <a href="#" className="btn btn-light w-100">
                        Donate Now
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="ftco-counter" id="section-counter">
          <div className="container">
            <div className="row">
              <div className="col-md-3 mb-5 mb-md-0 text-center text-md-left">
                <h2
                  className="font-weight-bold"
                  style={{ color: "#fff", fontSize: 22 }}
                >
                  We're on a mission to help all your problems
                </h2>
                <a href="#" className="btn btn-white btn-outline-white">
                  Donate Now
                </a>
              </div>
              <div className="col-md-9">
                <div className="row">
                  <div className="col-md-6 col-lg-3 d-flex justify-content-center counter-wrap ftco-animate">
                    <div className="block-18 text-center">
                    <div class="text">
                      <strong class="number">
                        <CountUp end={1000} duration={5} />
                      </strong>
                    </div>
                      <div className="text">
                        <span>Donation Campaigns are running</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-3 d-flex justify-content-center counter-wrap ftco-animate">
                    <div className="block-18 text-center">
                      <div className="text">
                        <strong className="number" data-number={65000}>
                          0
                        </strong>
                      </div>
                      <div className="text">
                        <span>Professional and kind volunteers</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-3 d-flex justify-content-center counter-wrap ftco-animate">
                    <div className="block-18 text-center">
                      <div className="text">
                        <strong className="number" data-number={77000}>
                          0
                        </strong>
                      </div>
                      <div className="text">
                        <span>Funds we raised till now on site</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-3 d-flex justify-content-center counter-wrap ftco-animate">
                    <div className="block-18 text-center">
                      <div className="text">
                        <strong className="number" data-number={50}>
                          0
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
        <section className="ftco-section testimony-section">
          <div className="overlay" />
          <div className="container">
            <div className="row justify-content-center pb-5">
              <div className="col-md-7 heading-section heading-section-white text-center ftco-animate">
                <span className="subheading">Testimony</span>
                <h2>Happy Clients &amp; Feedbacks</h2>
              </div>
            </div>
            <div className="row ftco-animate">
              <div className="col-md-12">
                <div className="carousel-testimony owl-carousel">
                  <div className="item">
                    <div className="testimony-wrap d-flex">
                      <div
                        className="user-img"
                        style={{ backgroundImage: "url(../images_videos/person_1.jpg)" }}
                      ></div>
                      <div className="text pl-4">
                        <span className="quote d-flex align-items-center justify-content-center">
                          <i className="fa fa-quote-left" />
                        </span>
                        <p className="rate">
                          <span className="fa fa-star" />
                          <span className="fa fa-star" />
                          <span className="fa fa-star" />
                          <span className="fa fa-star" />
                          <span className="fa fa-star" />
                        </p>
                        <p>
                          Far far away, behind the word mountains, far from the
                          countries Vokalia
                        </p>
                        <p className="name">Racky Henderson</p>
                        <span className="position">Father</span>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="testimony-wrap d-flex">
                      <div
                        className="user-img"
                        style={{ backgroundImage: "url(../images_videos/person_2.jpg)" }}
                      ></div>
                      <div className="text pl-4">
                        <span className="quote d-flex align-items-center justify-content-center">
                          <i className="fa fa-quote-left" />
                        </span>
                        <p className="rate">
                          <span className="fa fa-star" />
                          <span className="fa fa-star" />
                          <span className="fa fa-star" />
                          <span className="fa fa-star" />
                          <span className="fa fa-star" />
                        </p>
                        <p>
                          Far far away, behind the word mountains, far from the
                          countries Vokalia
                        </p>
                        <p className="name">Henry Dee</p>
                        <span className="position">Businesswoman</span>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="testimony-wrap d-flex">
                      <div
                        className="user-img"
                        style={{ backgroundImage: "url(../images_videos/person_3.jpg)" }}
                      ></div>
                      <div className="text pl-4">
                        <span className="quote d-flex align-items-center justify-content-center">
                          <i className="fa fa-quote-left" />
                        </span>
                        <p className="rate">
                          <span className="fa fa-star" />
                          <span className="fa fa-star" />
                          <span className="fa fa-star" />
                          <span className="fa fa-star" />
                          <span className="fa fa-star" />
                        </p>
                        <p>
                          Far far away, behind the word mountains, far from the
                          countries Vokalia
                        </p>
                        <p className="name">Mark Huff</p>
                        <span className="position">Businesswoman</span>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="testimony-wrap d-flex">
                      <div
                        className="user-img"
                        style={{ backgroundImage: "url(../images_videos/person_4.jpg)" }}
                      ></div>
                      <div className="text pl-4">
                        <span className="quote d-flex align-items-center justify-content-center">
                          <i className="fa fa-quote-left" />
                        </span>
                        <p className="rate">
                          <span className="fa fa-star" />
                          <span className="fa fa-star" />
                          <span className="fa fa-star" />
                          <span className="fa fa-star" />
                          <span className="fa fa-star" />
                        </p>
                        <p>
                          Far far away, behind the word mountains, far from the
                          countries Vokalia
                        </p>
                        <p className="name">Benjie Busk Jr.</p>
                        <span className="position">Businesswoman</span>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="testimony-wrap d-flex">
                      <div
                        className="user-img"
                        style={{ backgroundImage: "url(../images_videos/person_1.jpg)" }}
                      ></div>
                      <div className="text pl-4">
                        <span className="quote d-flex align-items-center justify-content-center">
                          <i className="fa fa-quote-left" />
                        </span>
                        <p className="rate">
                          <span className="fa fa-star" />
                          <span className="fa fa-star" />
                          <span className="fa fa-star" />
                          <span className="fa fa-star" />
                          <span className="fa fa-star" />
                        </p>
                        <p>
                          Far far away, behind the word mountains, far from the
                          countries Vokalia
                        </p>
                        <p className="name">Ken Bosh</p>
                        <span className="position">Businesswoman</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="ftco-section">
          <div className="container">
            <div className="row justify-content-center pb-5 mb-3">
              <div className="col-md-7 heading-section text-center ftco-animate">
                <span className="subheading">Our Blog</span>
                <h2>Latest news from our blog</h2>
              </div>
            </div>
            <div className="row d-flex">
              <div className="col-md-6 col-lg-3 d-flex ftco-animate">
                <div className="blog-entry align-self-stretch">
                  <a
                    href="blog-single.html"
                    className="block-20"
                    style={{ backgroundImage: 'url("../images_videos/image_1.jpg")' }}
                  ></a>
                  <div className="text p-4">
                    <div className="meta mb-2">
                      <div>
                        <a href="#">July 20, 2020</a>
                      </div>
                      <div>
                        <a href="#">Admin</a>
                      </div>
                      <div>
                        <a href="#" className="meta-chat">
                          <span className="fa fa-comment" /> 3
                        </a>
                      </div>
                    </div>
                    <h3 className="heading">
                      <a href="#">Foods &amp; Water Need in Africa</a>
                    </h3>
                    <p>
                      Far far away, behind the word mountains, far from the countries
                      Vokalia and Consonantia
                    </p>
                    <p>
                      <a href="#" className="btn btn-secondary">
                        Read more
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-3 d-flex ftco-animate">
                <div className="blog-entry align-self-stretch">
                  <a
                    href="blog-single.html"
                    className="block-20"
                    style={{ backgroundImage: 'url("../images_videos/image_2.jpg")' }}
                  ></a>
                  <div className="text p-4">
                    <div className="meta mb-2">
                      <div>
                        <a href="#">July 20, 2020</a>
                      </div>
                      <div>
                        <a href="#">Admin</a>
                      </div>
                      <div>
                        <a href="#" className="meta-chat">
                          <span className="fa fa-comment" /> 3
                        </a>
                      </div>
                    </div>
                    <h3 className="heading">
                      <a href="#">Foods &amp; Water Need in Africa</a>
                    </h3>
                    <p>
                      Far far away, behind the word mountains, far from the countries
                      Vokalia and Consonantia
                    </p>
                    <p>
                      <a href="#" className="btn btn-secondary">
                        Read more
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-3 d-flex ftco-animate">
                <div className="blog-entry align-self-stretch">
                  <a
                    href="blog-single.html"
                    className="block-20"
                    style={{ backgroundImage: 'url("../images_videos/image_3.jpg")' }}
                  ></a>
                  <div className="text p-4">
                    <div className="meta mb-2">
                      <div>
                        <a href="#">July 20, 2020</a>
                      </div>
                      <div>
                        <a href="#">Admin</a>
                      </div>
                      <div>
                        <a href="#" className="meta-chat">
                          <span className="fa fa-comment" /> 3
                        </a>
                      </div>
                    </div>
                    <h3 className="heading">
                      <a href="#">Foods &amp; Water Need in Africa</a>
                    </h3>
                    <p>
                      Far far away, behind the word mountains, far from the countries
                      Vokalia and Consonantia
                    </p>
                    <p>
                      <a href="#" className="btn btn-secondary">
                        Read more
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-3 d-flex ftco-animate">
                <div className="blog-entry align-self-stretch">
                  <a
                    href="blog-single.html"
                    className="block-20"
                    style={{ backgroundImage: 'url("../images_videos/image_4.jpg")' }}
                  ></a>
                  <div className="text p-4">
                    <div className="meta mb-2">
                      <div>
                        <a href="#">July 20, 2020</a>
                      </div>
                      <div>
                        <a href="#">Admin</a>
                      </div>
                      <div>
                        <a href="#" className="meta-chat">
                          <span className="fa fa-comment" /> 3
                        </a>
                      </div>
                    </div>
                    <h3 className="heading">
                      <a href="#">Foods &amp; Water Need in Africa</a>
                    </h3>
                    <p>
                      Far far away, behind the word mountains, far from the countries
                      Vokalia and Consonantia
                    </p>
                    <p>
                      <a href="#" className="btn btn-secondary">
                        Read more
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
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
                    Become A Volunteer
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>
        <footer className="footer">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-lg-3 mb-4 mb-md-0">
                <h2 className="footer-heading">Unicare.</h2>
                <p>
                  A small river named Duden flows by their place and supplies it with
                  the necessary regelialia.
                </p>
                <ul className="ftco-footer-social p-0">
                  <li className="ftco-animate">
                    <a
                      href="#"
                      data-toggle="tooltip"
                      data-placement="top"
                      title="Twitter"
                    >
                      <span className="fa fa-twitter" />
                    </a>
                  </li>
                  <li className="ftco-animate">
                    <a
                      href="#"
                      data-toggle="tooltip"
                      data-placement="top"
                      title="Facebook"
                    >
                      <span className="fa fa-facebook" />
                    </a>
                  </li>
                  <li className="ftco-animate">
                    <a
                      href="#"
                      data-toggle="tooltip"
                      data-placement="top"
                      title="Instagram"
                    >
                      <span className="fa fa-instagram" />
                    </a>
                  </li>
                </ul>
                <p>
                  <a href="#" className="btn btn-quarternary">
                    Donate Now
                  </a>
                </p>
              </div>
              <div className="col-md-6 col-lg-3 mb-4 mb-md-0">
                <h2 className="footer-heading">Latest News</h2>
                <div className="block-21 mb-4 d-flex">
                  <a
                    className="img mr-4 rounded"
                    style={{ backgroundImage: "url(../images_videos/image_1.jpg)" }}
                  />
                  <div className="text">
                    <h3 className="heading">
                      <a href="#">
                        Even the all-powerful Pointing has no control about
                      </a>
                    </h3>
                    <div className="meta">
                      <div>
                        <a href="#">Jul 20, 2020</a>
                      </div>
                      <div>
                        <a href="#">Admin</a>
                      </div>
                      <div>
                        <a href="#">19</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="block-21 mb-4 d-flex">
                  <a
                    className="img mr-4 rounded"
                    style={{ backgroundImage: "url(../images_videos/image_2.jpg)" }}
                  />
                  <div className="text">
                    <h3 className="heading">
                      <a href="#">
                        Even the all-powerful Pointing has no control about
                      </a>
                    </h3>
                    <div className="meta">
                      <div>
                        <a href="#">Jul 20, 2020</a>
                      </div>
                      <div>
                        <a href="#">Admin</a>
                      </div>
                      <div>
                        <a href="#">19</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-3 pl-lg-5 mb-4 mb-md-0">
                <h2 className="footer-heading">Quick Links</h2>
                <ul className="list-unstyled">
                  <li>
                    <a href="#" className="py-2 d-block">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="#" className="py-2 d-block">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="#" className="py-2 d-block">
                      Causes
                    </a>
                  </li>
                  <li>
                    <a href="#" className="py-2 d-block">
                      New Campaigns
                    </a>
                  </li>
                  <li>
                    <a href="#" className="py-2 d-block">
                      Blog
                    </a>
                  </li>
                  <li>
                    <a href="#" className="py-2 d-block">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-md-6 col-lg-3 mb-4 mb-md-0">
                <h2 className="footer-heading">Have a Questions?</h2>
                <div className="block-23 mb-3">
                  <ul>
                    <li>
                      <span className="icon fa fa-map" />
                      <span className="text">
                        203 Fake St. Mountain View, San Francisco, California, USA
                      </span>
                    </li>
                    <li>
                      <a href="#">
                        <span className="icon fa fa-phone" />
                        <span className="text">+2 392 3929 210</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span className="icon fa fa-paper-plane" />
                        <span className="text">info@yourdomain.com</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="row mt-5">
              <div className="col-md-12 text-center">
                <p className="copyright">
                  {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                  Copyright © All rights reserved | This template is made with{" "}
                  <i className="fa fa-heart" aria-hidden="true" /> by{" "}
                  <a href="https://colorlib.com" target="_blank">
                    Colorlib.com
                  </a>
                  {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                </p>
              </div>
            </div>
          </div>
        </footer>
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
