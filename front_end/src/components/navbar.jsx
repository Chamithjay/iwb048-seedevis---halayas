import React from 'react'
import './CSS/NavBar.css'
import Logo from './images/logo.png'
import Search from './images/search.svg'
import Logo2 from './images/logoimg.png'


import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className='navbar'>
        <div className='logo'>
            <img id ="img1" src={Logo2} alt='logo' />
            <img  id="img2" src={Logo} alt='logo' />
        </div>
        
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/donors">Donors</a></li>
            <li><a href="/about">AboutUs</a></li>
        </ul>

        <div className='search-box'>
            <img src={Search} alt='search' />
            <input type="text" placeholder='Search' />

        </div>
        <div className='navbar-buttons'>
            <Link to="/add-donor"><button  className='register-btn' >Donate</button></Link>
            <Link to="/signup"><button  className='register-btn' >Sign Up</button></Link>
        </div>
        
    </div>
  )
}

export default NavBar
