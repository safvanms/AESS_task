import React from 'react'
import'./header.css'
import Logo from '../../assets/logo.png'
import Avatar from '../../assets/avatar.png'
import { BiArrowBack } from 'react-icons/bi'


export default function Header() {
  return (
    <div className='header'>
     <div className="logo-sec">
       <img src={Logo} alt="logo" />   
     </div>
     <div className="header-sec">
          <div className="header-name">
          <p><BiArrowBack color='orange'/> ITSM</p>
          <p>Dashboard</p>
          </div>
          <div className="user-account">
               <img src={Avatar} alt="avatar" />
          </div>
     </div>
     
    </div>
  )
}
