import React from 'react'
import './Companies.css'
import Seek from './../../assets/Companies/Seek.png'
import Ibm from './../../assets/Companies/Ibm.png'
import Deliveroo from './../../assets/Companies/Deliveroo.png'
import Rea from './../../assets/Companies/Rea.png'
import Rmit from './../../assets/Companies/Rmit.png'
import Xero from './../../assets/Companies/Xero.png'

import Features from '../Main/Features'

const Companies = () => {
    return (
        <div className="companies-features-container" >
            <p className="trusted-companies-title" >TRUSTED BY COMPANIES ALL OVER THE WORLD</p>
            <div className="companies-logos-container" >
                <img src={Seek} alt="seek" />
                <img src={Xero} alt="Xero" />
                <img src={Rea} alt="Rea" />
                <img src={Rmit} alt="Rmit" />
                <img src={Ibm} alt="Ibm" />
                <img src={Deliveroo} alt="Deliveroo" />
            </div>
            <Features />
        </div>
    )
}

export default Companies