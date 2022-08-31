import React from 'react'
import Logo from './../../assets/Final_logo.png'
import { BsSearch } from 'react-icons/bs'
import './Navbar.css'
import { GiHamburgerMenu } from 'react-icons/gi'

const Navbar = () => {
  const handleSideMenu = () =>{
    const container = document.querySelector(".all-options");
    const hamburg = document.querySelector(".hamburger");
    container.classList.toggle("opacity-inc");
    hamburg.classList.toggle("toggle-hamburger-color");
  }
  return (
    <div className="navbar" >
      <img src={Logo} className="Slack-logo" alt="slack-logo" />
      <div className="all-options" >
        <div className="options" >
          <p>Product</p>
          <p>Solutions</p>
          <p>Enterprise</p>
          <p>Resources</p>
          <p>Pricing</p>
        </div>
        <div className="signin-options" >
          <BsSearch />
          <p>Sign in</p>
          <button className="talk-sales" >TALK TO SALES</button>
          <button className="try-free">TRY FOR FREE</button>
        </div>
      </div>
      <GiHamburgerMenu className="hamburger" onClick={handleSideMenu} />
    </div>
  )
}

export default Navbar