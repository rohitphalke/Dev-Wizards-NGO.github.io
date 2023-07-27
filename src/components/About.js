import React from 'react'
import CountUp from 'react-countup';
// import about_photo from '../assets/about.png';
import about_photo from '../images_videos/services-3.jpg';
import '../css_files/about.css';
import { Carousel } from 'react-responsive-carousel';

const sliderimgstyle = {
  // border: '2px solid #000',
  width: `${window.innerWidth > 900 ? '350px' : '20%'}`,
  height: `${window.innerWidth > 900 ? '350px' : '100%'}`,
  // width: '30%',
  // maxWidth: '300px',
  // height: '100%',
  // maxHeight: '300px',
  margin: '1em',
  borderRadius: '50%',
  boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.5)',
}
const sliderimgstyle2 = {
  width: `${window.innerWidth > 900 ? '300px' : '200px'}`,
  // height: `${window.innerWidth > 900 ? '400px' : '200px'}`,
  // width: '100%',
  height: `${window.innerWidth > 900 ? '300px' : '200px'}`,
  margin: '2rem',
  boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.5)',
}
const sliderdivstyle2 = {
  width: `${window.innerWidth > 900 ? '500px' : '200px'}`,
  // width: '100%',
  height: '250px',
  margin: ' 0 1em',
  borderRadius: '0px',
}


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
      <section >
          <div className="col-lg-6 col-md-5 mb-4 order-lg-1 order-md-1 order-2">
            <h3 className="mb-3 mx-3">Lorem ipsum dolor sit.</h3>
            <p className='mx-5'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Id aliquam, aut in molestiae temporibus
              commodi quos officia tempora harum a quasi ipsum mollitia ipsa..</p>
          </div>
          <div className="col-lg-5 col-md-5 mb-4 order-lg-2 order-md-2 order-1">
            <img style={{ width: "50%", height: "60%" }} src={about_photo} alt="about_photo" className='about_photo' />
          </div>
        
      </section>
      </div>
      <section className="ftco-counter" id="section-counter">
        <div >
          <div className="row">
            <div className="col-md-3 mb-5 mb-md-0 text-center text-md-left">
              <h2 className="font-weight-bold" >We're on a mission to help all your problems</h2>
              <a href="#" className="btn btn-white btn-outline-white">Donate Now</a>
            </div>
            <div className="col-md-9">
              <div className="row">
                <div className="col-md-6 col-lg-3 d-flex justify-content-center counter-wrap ftco-animate">
                  <div className="block-18 text-center">
                    <div className="text">
                      <strong className="number" data-number="884">0</strong>
                    </div>
                    <div className="text">
                      <span>Donation Campaigns are running</span>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-3 d-flex justify-content-center counter-wrap ftco-animate">
                  <div className="block-18 text-center">
                    <div className="text">
                      <strong className="number" data-number="65000">0</strong>
                    </div>
                    <div className="text">
                      <span>Professional and kind volunteers</span>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-3 d-flex justify-content-center counter-wrap ftco-animate">
                  <div className="block-18 text-center">
                    <div className="text">
                      <strong className="number">
                        <CountUp end={1000} duration={5} />
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
                      <strong className="number" data-number="500">0</strong>
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
        background: 'white 100%',
        width: '100%',
        height: '100%',
        padding: '3rem 0',
        // border: '2px solid red',
      }}>
        <Carousel autoPlay={true} infiniteLoop={true} labels={false} showStatus={false} showIndicators={false} showArrows={false} interval={2000} showThumbs={false}>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
            <img src='https://www.cry.org/wp-content/themes/cry/images/kid-portrait-5.jpg' alt="" style={sliderimgstyle} />
            <img src='https://www.cry.org/wp-content/themes/cry/images/kid-portrait-1.jpg' alt="" style={sliderimgstyle} />
            <img src='https://www.cry.org/wp-content/themes/cry/images/kid-portrait-6.jpg' alt="" style={sliderimgstyle} />
          </div>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
            <img src='https://www.cry.org/wp-content/themes/cry/images/portrait-8.jpg' alt="" style={sliderimgstyle} />
            <img src='https://www.cry.org/wp-content/themes/cry/images/portrait-9.jpg' alt="" style={sliderimgstyle} />
            <img src='https://www.cry.org/wp-content/themes/cry/images/kid-portrait-7.jpg' alt="" style={sliderimgstyle} />
          </div>

        </Carousel>
        </div>
    </>
  )
}

export default About
