import React from 'react'
import Logo from './../../assets/Final_logo.png'
import {BsSearch} from 'react-icons/bs'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className="navbar" >
        <img src={Logo} className="Slack-logo" alt="slack-logo" />
        <div className="options" >
            <p>Product</p>
            <p>Solutions</p>
            <p>Enterprise</p>
            <p>Resources</p>
            <p>Pricing</p>
        </div>
        <div className="signin-options" >
            <BsSearch style={{color : "white"}} />
            <p>Sign in</p>
            <button className="talk-sales" >TALK TO SALES</button>
            <button className="try-free">TRY FOR FREE</button>
        </div>
    </div>
  )
}

export default Navbar