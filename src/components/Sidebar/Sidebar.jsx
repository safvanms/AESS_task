import React from 'react'
import './sidebar.css'
import {AiOutlineUser} from 'react-icons/ai'
import { NavLink } from 'react-router-dom'

const menu = [
  {
    name: 'IT Dashboard',
    link: '/IT_dashboard',
  },
  {
    name: 'IT Ticket',
    link: '/IT_ticket',
  },
]

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-menu">
        {menu.map((item) => (
          <NavLink style={{textDecoration:'none',color:"#1296b0"}} to={item.link} activeClassName="active">
          <div className="menu">
            <div className='left-active-bar'></div>
            <div className='menu-content'>
               <div className='menu-icon'><AiOutlineUser color='orange' fontSize={'15px'}/></div> &nbsp;
              <div>{item.name}</div>
            </div>
          </div>
          </NavLink>
        ))}
      </div>
    </div>
  )
}
