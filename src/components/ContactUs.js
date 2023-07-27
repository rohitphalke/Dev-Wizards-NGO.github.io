import React from 'react';

const ContactForm = () => {
  return (
    <section id="section-wrapper123">
      <div className="box-wrapper123">
        <div className="info-wrap123">
          <h2 className="info-title123">ContactUs</h2>
        
          <ul className="info-details1234">
            <li>
              <li className="fas fa-phone-alt"></li>
              <span>Phone:</span> <a href="tel:+ 1235 2355 98">+ 987 654 321</a>
            </li>
            <li>
              <li className="fas fa-paper-plane"></li>
              <span>Email:</span> <a href="mailto:info@yoursite.com">contact@spjimr.abyudaya.com</a>
            </li>
            <li>
              <li className="fas fa-globe"></li>
              <span>Website:</span> <a href="/">yoursite.com</a>
            </li>
          </ul>

          <h3 className="info-sub-title1234">
          We welcome you to get in touch with us using this contact form. Whether you have questions about our programs, want to provide feedback, or are interested in partnerships or volunteering, we appreciate your interest and support. Thank you! </h3>

        </div>
        <div className="form-wrap1234">
          <form action="#" method="POST">
            <h2 className="form-title">Send us a message</h2>
            <div className="form-fields1234">
              <div className="form-group123">
                <input type="text" className="fname" placeholder="First Name" />
              </div>
              <div className="form-group123">
                <input type="text" className="lname" placeholder="Last Name" />
              </div>
              <div className="form-group123">
                <input type="email" className="email" placeholder="Mail" />
              </div>
              <div className="form-group123">
                <input type="number" className="phone" placeholder="Phone" />
              </div>
              <div className="form-group123">
                <textarea name="message" placeholder="Write your message" />
              </div>
            </div>
            <input type="submit" value="Send Message" className="submit-button" />
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
