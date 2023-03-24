import React from 'react'
import {  NavLink } from 'react-router-dom'
const Menu = () => {
  return (
    <div>
        <nav>
            <NavLink to="/student" className=" btn btn-info">Students</NavLink>
            <NavLink to="/subject" className=" btn btn-info">Subject</NavLink>
            <NavLink to="/register" className=" btn btn-info">Register</NavLink>
        </nav>
    </div>
  )
}

export default Menu