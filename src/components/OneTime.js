import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { TextField, FormControlLabel, Radio, RadioGroup, Checkbox, Button, Modal, Typography, Box, LinearProgress } from '@mui/material';
import "../css_files/akash_PaymentForm.css"

import firstImage from '../images_videos/thank-you.png';

export default function OneTime() {
  const [modalOpen, setModalOpen] = useState(false);
  const navigate = useNavigate();
  const [progress, setProgress] = useState(100);
  const [name, setname] = useState('');
  const [donationAmount, setDonationAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // toast.success('Donation successful!', {
    //   position: 'top-center',
    //   autoClose: 3000, // The notification will automatically close after 3 seconds
    // });
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setModalOpen(true);
    // window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  const handleCloseModal = () => {
    setModalOpen(false);
  };

  useEffect(() => {
    if (modalOpen) {
      // After 6 seconds of modal being open, redirect to '/'
      const intervalId = setInterval(() => {
        setProgress((prevProgress) => prevProgress - (100 / 100)); // Reducing 100% over 60 intervals (6 seconds)
      }, 100);
      const timeoutId = setTimeout(() => {
        handleCloseModal();
        navigate('/');
      }, 10000);

      // Clear the timeout when the component unmounts or when the modal is closed
      return () => {
        clearInterval(intervalId);
        clearTimeout(timeoutId);
      };
    }
  }, [modalOpen, navigate]);
  const modalStyle = {
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    position: 'absolute',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 2,
  };

  const handleNameChange = (event) => {
    setname(event.target.value);
  };

  const handledonation = (event) => {
    setDonationAmount(event.target.value);
  };


  return (
    <div className='container'>
      <br></br>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <TextField id="name" label="Name" variant="standard" required value={name} onChange={handleNameChange} />
        </div>
        <div className="mb-3">
          <TextField type="email" id="email" label="Email" variant="standard" required />
        </div>
        <div className="mb-3">
          <TextField type="tel" id="contactNumber" label="Contact Number" variant="standard" required />
        </div>
        <div className="mb-3">
          <TextField type="number" id="donationAmount" label="Donation Amount" variant="standard" value={donationAmount} onChange={handledonation} required />
        </div>
        <div className="mb-3">
          <TextField multiline id="address" label="Address" variant="standard" required />
        </div>
        <div className="mb-3">
          <RadioGroup name="paymentMethod" required>
            <FormControlLabel value="Credit Card" control={<Radio />} label="Credit Card" />
            <FormControlLabel value="Debit Card" control={<Radio />} label="Debit Card" />
          </RadioGroup>
        </div>
        <div className="mb-3">
          <TextField type="text" id="cardNumber" label="Card Number" variant="standard" required />
        </div>
        <div className="mb-3">
          <TextField type="text" id="expiryDate" label="Expiry Date" variant="standard" required />
        </div>
        <div className="mb-3">
          <TextField type="text" id="cvv" label="CVV/CVC Code" variant="standard" required />
        </div>
        <div className="mb-3">
          <TextField type="text" id="cardholderName" label="Cardholder Name" variant="standard" required />
        </div>
        <div className="mb-3">
          <TextField multiline="true" id="comment" label="Comment/Message (Optional)" variant="standard" />
        </div>
        <div className="mb-3" style={{ display: 'flex', alignItems: 'center' }}>
          <Checkbox id="agreeTerms" required />
          <label className="form-check-label" htmlFor="agreeTerms" style={{ marginLeft: '8px' }}>
            I agree to the Terms and Conditions
          </label>
        </div>
        <Button type="submit" variant="contained" color="primary">Donate</Button>
      </form>
      <Modal open={modalOpen} onClose={handleCloseModal}>
        <Box sx={modalStyle}>
          <Typography variant="h5" align="center" gutterBottom className='greendonation'>
            Donation Successful
          </Typography>
          <div className='imodalout'>
            <div className="iimageout">
              <img
                src={firstImage}
                height="180px"
                width="180px"
              // style={{ paddingTop: "11%" }}
              />
            </div>
            <div className='iamtext'>
              <p>Thank you, {name}, for your ₹{donationAmount} donation! </p>
              <p>Your support will provide meals for {donationAmount / 50} people in need. </p>
            </div>
          </div>
          <div>
            <h6>Now Redirecting to Home Page</h6>
          </div>
          <LinearProgress variant="determinate" value={progress} color="success" />
        </Box>
      </Modal>
      <br></br>
      <p>
        By donating to our cause, you can make a significant impact on the lives of those in need. Your generous contribution can help improve the lives of people who are facing challenging circumstances
        and give them the sustenance they need to thrive.
        Thank you for being a part of this important mission. Your kindness and compassion make a world of difference!
      </p>
      <br></br>
    </div>
  )
}
