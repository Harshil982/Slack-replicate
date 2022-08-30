import React from 'react'
import Navbar from '../Navbar/Navbar'
import './PosterNavbar.css'
import Poster from './Poster'

const PosterAndNavbar = () => {
    return (
        <div className="Poster-navbar" >
            <Navbar />
            <Poster />
        </div>
    )
}

export default PosterAndNavbar