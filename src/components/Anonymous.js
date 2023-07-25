import React from 'react'
import '../css_files/akash_Anonymous.css';
// Modal for popup on submit.
// import Typewriter from 'typewriter-effect/dist/core';
import Typewriter from 'typewriter-effect';
import firstImage from '../images_videos/qrcode.png';
import secondImage from '../images_videos/banklogo.jpeg';

export default function Anonymous() {

  return (
    <>
      <div style={{
        fontSize: "2.5rem",
        width: "60%",
        fontWeight: "bold",
        height: window.innerWidth <= 768 ? "420px" : "150px",
        display: "flex",
        textAlign: "center",
        margin: "1em auto",
        background: "aliceblue",
        boxShadow:"10px 10px 10px 10px rgb(165, 210, 249)"
        // border: "2px solid red"
      }}>
        <Typewriter
          options={{
            loop: true,
            autoStart: true,
            strings: ['Every ₹200 you donate can provide essential meals for 4 individuals.', 'Your generosity can bring hope and change to the lives of many.', 'Be the hope they need, donate now.'],
          }}
        />
      </div>
      <section className="container">

        {/* <div className="row"> */}
        <h1 className="head2">BANK ACCOUNT DETAILS</h1>
        {/* <div className="col-md-4 col-sm-6" /> */}
        {/* <div className="col-md-4 col-sm-6">
            <img className="img-responsive img-rounded img1" src={secondImage} />
          </div> */}
        <div className="col-md-4 col-sm-6" />
        {/* </div> */}
      </section>
      <div id="account" className="container">
        <div className="row">
          <div className="col-md-6 d-flex justify-content-center">
            <h4>
              Account Name: THE NGO OF LIFE <br />
              Account Number: 12319282567 <br />
              IFSC Code: ICIC0000100 <br />
              Bank Name: ICICI Bank Ltd. <br />
              Account type: Saving <br />
            </h4>
          </div>
          <div className="col-md-6 d-flex justify-content-center">
            <img
              src={firstImage}
              height="250px"
              width="250px"
            style={{ paddingBottom: "5%" }}
            />
          </div>
        </div>
      </div>
    </>
  )
}
