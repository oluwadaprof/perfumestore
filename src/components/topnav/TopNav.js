import React from 'react'
import './topnav.scss'
import { BiSearchAlt } from "react-icons/bi";
import { MdOutlineHeadsetMic } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { GrCart } from "react-icons/gr";


const TopNav = () => {
  return (
    <nav>
        <p className='logo' >Logo</p>
        <div className='search__container' > 
            <input type="search" name="" value=""/>
            <button type=""><BiSearchAlt/></button>
        </div>
        <div className='customer__support' >
                <MdOutlineHeadsetMic className='customer__support-icon'/>
            <div className='customer__support-content' >
                <p>08126019796</p>
                <p>Customer Support</p>
            </div>
        </div>
        <div className='account' >
            <FaRegUser/>
            <p>My Account</p>
        </div>
        <div className='cart' >
            <div className='cart__number' >3</div>
            <GrCart/>
        </div>
    </nav>
  )
}

export default TopNav