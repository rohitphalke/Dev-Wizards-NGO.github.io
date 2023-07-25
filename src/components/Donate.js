import React from 'react'
import Anonymous from './Anonymous';
import OneTime from './OneTime';
import Monthly from './Monthly';
import PaymentForm from './PaymentForm';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Donate = () => {
  return (
    <div>
    {/* style={{backgroundImage: 'linear-gradient(to bottom right, rgba(117,227,130,1) 12%, rgba(106,229,230,1) 50%, rgba(106,230,160,1) 92%)'}} */}
      <div className="App">
      </div>
      <Anonymous />
      <PaymentForm/>
      <ToastContainer />
    </div>
  )
}

export default Donate;
