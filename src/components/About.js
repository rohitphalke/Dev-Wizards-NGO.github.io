import React from 'react'
import CountUp from 'react-countup';
// import about_photo from '../assets/about.png';
import about_photo from '../images_videos/about.png';
import '../css_files/about.css';

const About = () => {
  return (
    <>
      <div className="my-5 px-4">
        <u className='my-2'>
          <h2 className="fw-bold h-font text-center">About Us</h2>
        </u>
        <p className="text-center mt-3 text-dark">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi soluta
          voluptatem cupiditate incidunt
          totam,<br /> tenetur quis fuga nulla suscipit ea dicta nemo perferendis debitis expedita reiciendis molestias
          delectus officiis temporibus.</p>
      </div>
      <div>
        <div className="row justify-content-between align-items-center">
          <div className="col-lg-6 col-md-5 mb-4 order-lg-1 order-md-1 order-2">
            <h3 className="mb-3 mx-3">Lorem ipsum dolor sit.</h3>
            <p className='mx-5'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Id aliquam, aut in molestiae temporibus
              commodi quos officia tempora harum a quasi ipsum mollitia ipsa..</p>
          </div>
          <div className="col-lg-5 col-md-5 mb-4 order-lg-2 order-md-2 order-1">
            <img src={about_photo} alt="about_photo" className='about_photo' />
          </div>
        </div>
      </div>
      <section class="ftco-counter" id="section-counter">
        <div >
          <div class="row">
            <div class="col-md-3 mb-5 mb-md-0 text-center text-md-left">
              <h2 class="font-weight-bold" >We're on a mission to help all your problems</h2>
              <a href="#" class="btn btn-white btn-outline-white">Donate Now</a>
            </div>
            <div class="col-md-9">
              <div class="row">
                <div class="col-md-6 col-lg-3 d-flex justify-content-center counter-wrap ftco-animate">
                  <div className="block-18 text-center">
                    <div className="text">
                      <strong className="number" data-number="884">0</strong>
                    </div>
                    <div className="text">
                      <span>Donation Campaigns are running</span>
                    </div>
                  </div>
                </div>
                <div class="col-md-6 col-lg-3 d-flex justify-content-center counter-wrap ftco-animate">
                  <div class="block-18 text-center">
                    <div class="text">
                      <strong class="number" data-number="65000">0</strong>
                    </div>
                    <div class="text">
                      <span>Professional and kind volunteers</span>
                    </div>
                  </div>
                </div>
                <div class="col-md-6 col-lg-3 d-flex justify-content-center counter-wrap ftco-animate">
                  <div class="block-18 text-center">
                    <div class="text">
                      <strong class="number">
                        <CountUp end={1000} duration={5} />
                      </strong>
                    </div>
                    <div class="text">
                      <span>Funds we raised till now on site</span>
                    </div>
                  </div>
                </div>
                <div class="col-md-6 col-lg-3 d-flex justify-content-center counter-wrap ftco-animate">
                  <div class="block-18 text-center">
                    <div class="text">
                      <strong class="number" data-number="500">0</strong>
                    </div>
                    <div class="text">
                      <span>Dedicated Donors</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About
