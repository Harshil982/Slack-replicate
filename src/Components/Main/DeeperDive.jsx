import React from 'react'
import Img1 from './../../assets/CardImages/Img1.png'
import './DeeperDive.css'
import {BsArrowRight} from 'react-icons/bs'

const DeeperDive = () => {
  return (
    <div className="deeper-dive" >
        <h1>Take a deeper dive into a new way to work</h1>
        <div className="cards-container" >
            <div className="card-harshil" >
                <p>Collection</p>
                <p>Slack as your digital HQ</p>
                <img src={Img1} alt="Img 1" />
                <div className="see-all" >
                    <p>SEE ALL</p>
                    <p><BsArrowRight /></p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DeeperDive