import React from 'react'
import signin from '../assets/signin.svg'
import signup from '../assets/signup.svg'
const Login = (props) => {
  const onclick_sign_in_btn = () => {
    const container = document.querySelector(".container");
    container.classList.remove("sign-up-mode");
  }
  const onclick_sign_in_btn2 = () => {
    const container = document.querySelector(".container");
    container.classList.remove("sign-up-mode2");
  }
  const onclick_sign_up_btn = () => {
    const container = document.querySelector(".container");
    container.classList.add("sign-up-mode");
  }
  const onclick_sign_up_btn2 = () => {
    const container = document.querySelector(".container");
    container.classList.add("sign-up-mode2");
  }
  const sign_in = () => {
    let username = document.getElementById('sign_in_name').target.value
    let password = document.getElementById('sign_in_passowrd').target.value

  }
  const sign_up = () => {

  }
  return (
    <div className="login_body">
        <div className="container">
        <div className="signin-signup">
            <form action="" className="sign-in-form">
                <h2 className="title">Sign in</h2>
                <div className="input-field">
                    <i className="fas fa-user"></i>
                    <input type="text" placeholder="Username"/>
                </div>
                <div className="input-field">
                    <i className="fas fa-lock"></i>
                    <input type="password" placeholder="Password"/>
                </div>
                <input type="submit" value="Login" className="btn" onclick={sign_in}/>
                <p className="social-text">Or Sign in with our NGO</p>
                <div className="social-media">
                    <a href="/" className="social-icon">
                        <i className="fab fa-facebook"></i>
                    </a>
                    <a href="/" className="social-icon">
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a href="/" className="social-icon">
                        <i className="fab fa-google"></i>
                    </a>
                    <a href="/" className="social-icon">
                        <i className="fab fa-linkedin-in"></i>
                    </a>
                </div>
                <p className="account-text">Don't have an account? <a href="/" id="sign-up-btn2" onClick={onclick_sign_up_btn2}>Sign up</a></p>
            </form>
            <form action="" className="sign-up-form">
                <h2 className="title">Sign up</h2>
                <div className="input-field">
                    <i className="fas fa-file-signature"></i>
                    <input type="text" placeholder="Name" id='sign_up_name'/>
                </div>
                <div className="input-field">
                    <i className="fas fa-user"></i>
                    <input type="text" placeholder="Username" id='sign_up_username'/>
                </div>
                <div className="input-field">
                    <i className="fas fa-envelope"></i>
                    <input type="text" placeholder="Email" id='sign_up_email'/>
                </div>
                <div className="input-field">
                    <i className="fas fa-lock"></i>
                    <input type="password" placeholder="Password" id='sign_up_password'/>
                </div>
                <input type="submit" value="Sign up" className="btn" onclick={sign_up}/>
                <p className="social-text">Or Sign in with social platform</p>
                <div className="social-media">
                    <a href="/" className="social-icon">
                        <i className="fab fa-facebook"></i>
                    </a>
                    <a href="/" className="social-icon">
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a href="/" className="social-icon">
                        <i className="fab fa-google"></i>
                    </a>
                    <a href="/" className="social-icon">
                        <i className="fab fa-linkedin-in"></i>
                    </a>
                </div>
                <p className="account-text">Already have an account? <a href="/" id="sign-in-btn2" onClick={onclick_sign_in_btn2}>Sign in</a></p>
            </form>
        </div>
        <div className="panels-container">
            <div className="panel left-panel">
                <div className="content">
                    <h3>Member of our NGO?</h3>
                    <p>By logging in, you become part of our mission to create positive change in the world. Together, we can make a lasting impact.</p>
                    <button className="btn" id="sign-in-btn" onClick={onclick_sign_in_btn}>Sign in</button>
                </div>
                <img src={signin} alt="" className="image"/>
            </div>
            <div className="panel right-panel">
                <div className="content">
                    <h3>New to our NGO?</h3>
                    <p>Sign up to be a part of our community and help create a better world.</p>
                    <button className="btn" id="sign-up-btn" onClick={onclick_sign_up_btn}>Sign up</button>
                </div>
            <img src={signup} alt="" className="image"/>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Login
