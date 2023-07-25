import React from 'react'
import back_photo from '../assets/profile_background1.jpg'
import user_photo from '../assets/user_photo.jpg'
import donation_data from '../css_files/r_data'

const Profile = (props) => {

  const data1 = donation_data.map((eve) => (
    <div key={eve.id} className='past_do'>
      {eve.event.map((exp) => (
        <div key={exp.title} className="past_donations">
          <div className="content-wrapper">
            <p className='eve_heading'>{exp.title}</p>
            <p className='eve_desc'>{exp.description}</p>
            <div className="card_row">
              <span className='eve_date_location'>{`${exp.date.getDate()}/${exp.date.getMonth()}/${exp.date.getFullYear()}, ${exp.location}`}</span>
              <span>Amt. : {exp.amount}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  ));

  return (
    <div className="pro_body">
      <div className="profile_body">
        <div className='back_photo'>
          <img src={back_photo} alt="background_photo" className='bg_photo'/>
          </div>
        <div className="pro_fir_div">
          
            <img src={user_photo} alt="user_photo" className='user_photo'/>
          
          <div className="userdata">
            <p><span>Name : </span>{props.user_info.name}</p>
            <p><span>Username : </span>{props.user_info.username}</p>
            <p><span>E-mail : </span>{props.user_info.email}</p>
          </div>
        </div>
        <div>
          <p className='past_don'>Past donations</p>
            {data1}
        </div>
      </div>
    </div>
  )
}

export default Profile
