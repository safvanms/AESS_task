import React, { useState } from 'react'
import './login.css'
import Man from '../../assets/PeopleSol Login 1.png'
import Dashboard from '../../assets/dashboard 1.png'
import Img3 from '../../assets/Group 36.png'
import Img4 from '../../assets/Group 33.png'
import Img5 from '../../assets/Mask Group.png'
import Logo from '../../assets/logo.png'
import { IoMdArrowRoundForward } from 'react-icons/io'
import { BiHide, BiShowAlt } from 'react-icons/bi'
import { useNavigate } from 'react-router-dom'

export default function Login() {
  const [showPassword, setShowPassword] = useState(false)
  const [employeeId, setEmployeeId] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleShow = () => {
    setShowPassword(!showPassword)
  }

  const navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault()

    if (employeeId&&password) {
      navigate('/IT_dashboard')
    }else{
      setError('Please Enter Authentication credentials.')
      return;
    }

  }

  return (
    <div className="login-container">
      {/* left side */}

      <div className="login-left-side">
        <div className="login-image-container"></div>
        <div className="login-images1">
          <img src={Man} alt="logoAvatar" />
        </div>
        <div className="login-images2">
          <img src={Dashboard} alt="logoAvatar" />
        </div>
        <div className="login-images3">
          <img src={Img3} alt="logoAvatar" />
        </div>
        <div className="login-images4">
          <img src={Img4} alt="logoAvatar" />
        </div>
        <div className="login-images5">
          <img src={Img5} alt="logoAvatar" />
        </div>
      </div>

      {/* login form section  */}

      <div className="login-form-section">
        <div className="login-form">
          <img src={Logo} alt="logo" />
          <p className="login-input-head">Login</p>

          <form>
            <div className="inputs">
              <div className="input-container">
                <input
                  type="text"
                  placeholder="Employee ID / Email ID"
                  required
                  value={employeeId}
                  onChange={(e) => setEmployeeId(e.target.value)}
                />
              </div>
              <div className="input-container">
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Enter Password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <div className="show-hide" onClick={handleShow}>
                  {' '}
                  {showPassword ? <BiShowAlt /> : <BiHide />}{' '}
                </div>
              </div>
            </div>
            <p className="forgot-option">forgot password</p>
            <button
              type="submit"
              className="login-submit-button"
              onClick={handleSubmit}
            >
              Login to PeopleSol{' '}
              <IoMdArrowRoundForward style={{ marginLeft: '10px' }} />
            </button>
            <p style={{color:'red', textAlign:"center",fontSize:"9px"}}>{error&&error}</p>
          </form>
        </div>

        {/* Login footer section */}

        <div className="login-footer">
          <div className="footer-top-line">
            <img src={Logo} alt="" />
            <p>Privacy Policy</p>
            <p>Terms & Condition</p>
          </div>
          <div className="hr"></div>
          <div className="footer-bottom-line">
            ©2022 . All rights reserved. Made in India.❤️
          </div>
        </div>
      </div>
    </div>
  )
}
