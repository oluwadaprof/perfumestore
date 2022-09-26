import React from 'react'
import './mainnav.scss'
import { NavLink } from "react-router-dom";

const MainNav = () => {
  return (
    <nav>
        <ul>
            <NavLink to='/' className='main__nav-item' ><a>HOME</a></NavLink>
            <NavLink to='/about' className='main__nav-item'><a>ABOUT US</a></NavLink>
            <NavLink to='/offer' className='main__nav-item'><a>OFFER</a></NavLink>
            <NavLink to='/contact' className='main__nav-item'><a>CONTACT US</a></NavLink>
        </ul>
    </nav>
  )
}

export default MainNav