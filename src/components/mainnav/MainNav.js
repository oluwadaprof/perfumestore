import React from 'react'
import './mainnav.scss'

const MainNav = () => {
  return (
    <nav>
        <ul>
            <li className='main__nav-item' ><a>HOME</a></li>
            <li className='main__nav-item'><a>ABOUT US</a></li>
            <li className='main__nav-item'><a>OFFER</a></li>
            <li className='main__nav-item'><a>CONTACT US</a></li>
        </ul>
    </nav>
  )
}

export default MainNav