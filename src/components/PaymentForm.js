import React, { useState } from 'react';
import OneTime from './OneTime';
import Monthly from './Monthly';
import "../css_files/akash_PaymentForm.css"
import { TextField, FormControlLabel, Radio, RadioGroup, Checkbox, Button, ButtonGroup } from '@mui/material';



export default function PaymentForm() {
    const [showMonthlyForm, setShowMonthlyForm] = useState(false);

    const handleFormToggle = (type) => {
        if (type === 'monthly') {
            setShowMonthlyForm(true);
        }
        else if (type === 'oneTime') {
            setShowMonthlyForm(false);
        }
    };
    const [alignment, setAlignment] = React.useState('web');

    const handleChange = (event, newAlignment) => {
        setAlignment(newAlignment);
    };
    return (
        <div className='huhuhu'>
            <div className='tunui'>
                <div className='container akashmybutton ' >
                    <ButtonGroup variant="outlined" aria-label="outlined button group" sx={{ width: "100%" }}>
                        <Button className="akashmybuttoninner" sx={{ width: "50%", borderRadius: "50px 50px", }} onClick={() => handleFormToggle('oneTime')}>One Time</Button>
                        <Button className="akashmybuttoninner" sx={{ width: "50%",borderRadius: "50px 50px", }} onClick={() => handleFormToggle('monthly')}>Monthly</Button>
                    </ButtonGroup>
                    {/* <button className='btn btn-warning btn-outline-danger' onClick={() => handleFormToggle('oneTime')}>One Time</button>
                <button className='btn btn-warning btn-outline-danger' onClick={() => handleFormToggle('monthly')}>Monthly</button> */}
                </div>

                <div className="container kik" style={{borderRadius: "20px", backgroundImage: 'linear-gradient(to bottom right, rgba(117,227,130,1) 12%, rgba(106,229,230,1) 50%, rgba(106,230,160,1) 92%)' }} >

                    {/* Render the MonthlyForm if showMonthlyForm is true, else render the OneTimeForm */}
                    {showMonthlyForm ? <Monthly /> : <OneTime />}
                </div>
            </div>
        </div>
    )
}
