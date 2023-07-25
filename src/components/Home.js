import React from 'react';
import '../css_files/udit.css'; // Replace 'your-css-file-path.css' with the actual path to your CSS file


const Home = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
        <div class="container">
          <a class="navbar-brand" href="index.html">Unicare</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="oi oi-menu"></span> Menu
          </button>

          <div class="collapse navbar-collapse" id="ftco-nav">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item active"><a href="index.html" class="nav-link">Home</a></li>
              <li class="nav-item"><a href="about.html" class="nav-link">About</a></li>
              <li class="nav-item"><a href="volunteer.html" class="nav-link">Volunteer</a></li>
              <li class="nav-item"><a href="causes.html" class="nav-link">Causes</a></li>
              <li class="nav-item"><a href="blog.html" class="nav-link">Blog</a></li>
              <li class="nav-item"><a href="contact.html" class="nav-link">Contact</a></li>
              <li class="nav-item cta"><a href="contact.html" class="nav-link">Donate</a></li>
            </ul>
          </div>
        </div>
      </nav>

      <section className="hero-wrap js-fullheight">
        <div class="home-slider js-fullheight owl-carousel">
          <div class="slider-item js-fullheight" >
            <div class="overlay-1"></div><div class="overlay-2"></div><div class="overlay-3"></div><div class="overlay-4"></div>
            <div class="container">
              <div class="row no-gutters slider-text js-fullheight align-items-center">
                <div class="col-md-10 col-lg-7 ftco-animate">
                  <div class="text w-100">
                    <h2>Help the poor in need</h2>
                    <h1 class="mb-3">Lend the helping hand get involved</h1>
                    <div class="d-flex meta">
                      <div class=""><p class="mb-0"><a href="#" class="btn btn-secondary py-3 px-2 px-md-4">Become A Volunteer</a></p></div>
                      <a href="#" class="d-flex align-items-center button-link">
                        <div class="button-video d-flex align-items-center justify-content-center">
                          <span class="fa fa-play"></span>
                        </div>
                        <span>Watch our video</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="slider-item js-fullheight">
            <div class="overlay-1"></div><div class="overlay-2"></div><div class="overlay-3"></div><div class="overlay-4"></div>
            <div class="container">
              <div class="row no-gutters slider-text js-fullheight align-items-center">
                <div class="col-md-10 col-lg-7 ftco-animate">
                  <div class="text w-100">
                    <h2>Raising Hope</h2>
                    <h1 class="mb-3">Discover Non-Profit Charity Platform</h1>
                    <div class="d-flex meta">
                      <div class=""><p class="mb-0"><a href="#" class="btn btn-secondary py-3 px-2 px-md-4">Become A Volunteer</a></p></div>
                      <a href="#" class="d-flex align-items-center button-link">
                        <div class="button-video d-flex align-items-center justify-content-center">
                          <span class="fa fa-play"></span>
                        </div>
                        <span>Watch our video</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="slider-item js-fullheight">
            <div class="overlay-1"></div><div class="overlay-2"></div><div class="overlay-3"></div><div class="overlay-4"></div>
            <div class="container">
              <div class="row no-gutters slider-text js-fullheight align-items-center">
                <div class="col-md-10 col-lg-7 ftco-animate">
                  <div class="text w-100">
                    <h2>Raising Hope</h2>
                    <h1 class="mb-3">Giving Hope to the Homeless People</h1>
                    <div class="d-flex meta">
                      <div class=""><p class="mb-0"><a href="#" class="btn btn-secondary py-3 px-2 px-md-4">Become A Volunteer</a></p></div>
                      <a href="#" class="d-flex align-items-center button-link">
                        <div class="button-video d-flex align-items-center justify-content-center">
                          <span class="fa fa-play"></span>
                        </div>
                        <span>Watch our video</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ftco-appointment ftco-section ftco-no-pt ftco-no-pb img">
        <div class="overlay"></div>
        <div class="container">
          <div class="row">
            <div class="col-md-5 order-md-last d-flex align-items-stretch">
              <div class="donation-wrap">
                <div class="total-donate d-flex align-items-center">
                  <span class="fa flaticon-cleaning"></span>
                  <h4>Donation Campaign are running</h4>
                  <p class="d-flex align-items-center">
                    <span>$</span>
                    <span class="number" data-number="24781">0</span>
                  </p>
                </div>
                <form action="#" class="appointment">
                  <div class="row">
                    <div class="col-md-12">
                      <div class="form-group">
                        <label for="name">Full Name</label>
                        <div class="input-wrap">
                          <div class="icon"><span class="fa fa-user"></span></div>
                          <input type="text" class="form-control" placeholder=""></input>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-12">
                      <div class="form-group">
                        <label for="name">Email Address</label>
                        <div class="input-wrap">
                          <div class="icon"><span class="fa fa-paper-plane"></span></div>
                          <input type="email" class="form-control" placeholder=""></input>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-12">
                      <div class="form-group">
                        <label for="name">Select Causes</label>
                        <div class="form-field">
                          <div class="select-wrap">
                            <div class="icon"><span class="fa fa-chevron-down"></span></div>
                            <select name="" id="" class="form-control">
                              <option value=""></option>
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
                    <div class="col-md-12">
                      <div class="form-group">
                        <label for="name">Amount</label>
                        <div class="input-wrap">
                          <div class="icon"><span class="fa fa-money"></span></div>
                          <input type="text" class="form-control" placeholder="$5"></input>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-12">
                      <div class="form-group">
                        <label for="name">Payment Method</label>
                        <div class="d-lg-flex">
                          <div class="form-radio mr-3">
                            <div class="radio">
                              <label>
                                <input type="radio" name="radio-input" checked></input>
                                  <span class="checkmark"></span>
                                  <span class="fill-control-description">Credit Card</span>
                              </label>
                            </div>
                          </div>
                          <div class="form-radio mr-3">
                            <div class="radio">
                              <label>
                                <input type="radio" name="radio-input"></input>
                                  <span class="checkmark"></span>
                                  <span class="fill-control-description">Paypal</span>
                              </label>
                            </div>
                          </div>
                          <div class="form-radio">
                            <div class="radio">
                              <label>
                                <input type="radio" name="radio-input"></input>
                                  <span class="checkmark"></span>
                                  <span class="fill-control-description">Payoneer</span>
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-12">
                      <div class="form-group">
                        <input type="submit" value="Donate Now" class="btn btn-secondary py-3 px-4"></input>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div class="col-md-7 wrap-about py-5">
              <div class="heading-section pr-md-5 pt-md-5">
                <span class="subheading">Welcome to unicare</span>
                <h2 class="mb-4">We are here to help everyone in need</h2>
                <p>On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word "and" and the Little Blind Text should turn around and return to its own, safe country. But nothing the copy said could convince her and so it didn’t take long until a few insidious Copy Writers ambushed her, made her drunk with Longe and Parole and dragged her into their agency, where they abused her for their.</p>
              </div>
              <div class="row my-md-5">
                <div class="col-md-6 d-flex counter-wrap">
                  <div class="block-18 d-flex">
                    <div class="icon d-flex align-items-center justify-content-center">
                      <span class="flaticon-volunteer"></span>
                    </div>
                    <div class="desc">
                      <div class="text">
                        <strong class="number" data-number="50">0</strong>
                      </div>
                      <div class="text">
                        <span>Volunteers</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-6 d-flex counter-wrap">
                  <div class="block-18 d-flex">
                    <div class="icon d-flex align-items-center justify-content-center">
                      <span class="flaticon-piggy-bank"></span>
                    </div>
                    <div class="desc">
                      <div class="text">
                        <strong class="number" data-number="24400">0</strong>
                      </div>
                      <div class="text">
                        <span>Trusted Funds</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <p><a href="#" class="btn btn-secondary btn-outline-secondary">Become A Volunteer</a></p>
            </div>
          </div>
        </div>
      </section>

      {/* And so on for each section */}

      <footer className="footer">
        {/* Footer */}
      </footer>
    </div>
  );
}

export default Home;