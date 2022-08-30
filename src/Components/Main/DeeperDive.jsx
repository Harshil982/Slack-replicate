import React from 'react'
import Img1 from './../../assets/CardImages/Img1.png'
import './DeeperDive.css'
import { BsArrowRight } from 'react-icons/bs'
import Card2Img from './../../assets/CardImages/card-2.jpg'
import Card3Img from './../../assets/CardImages/card-3.jpg'
import Card4Img from './../../assets/CardImages/card-4.jpg'

const DeeperDive = () => {
    return (
        <div className="deeper-dive" >
            <h1>Take a deeper dive into a new way to work</h1>
            <div className="cards-container" >
                <div className="card-harshil" >
                    <p className="collection" >Collection</p>
                    <p className="slack-as" >Slack as your digital HQ</p>
                    <img src={Img1} alt="Img 1" />
                    <div className="see-all" >
                        <p>SEE ALL</p>
                        <p><BsArrowRight /></p>
                    </div>
                </div>
                <div className="second-card-harshil" >
                    <img src={Card2Img} alt="card-2" />
                    <p className="topic" >Resources</p>
                    <p className="title" >See how others are building their digital HQ</p>
                    <div className="see-all" >
                        <p>SEE ALL</p>
                        <p><BsArrowRight /></p>
                    </div>
                </div>
                <div className="second-card-harshil" >
                    <img src={Card3Img} alt="card-3" />
                    <p className="topic" >Webinar</p>
                    <p className="title" >Embracing a digital-first approach to work</p>
                    <div className="see-all" >
                        <p>SEE ALL</p>
                        <p><BsArrowRight /></p>
                    </div>
                </div>
                <div className="second-card-harshil" >
                    <img src={Card4Img} alt="card-4" />
                    <p className="topic" >E-book</p>
                    <p className="title" >Reinventing work: new imperatives for the future of working</p>
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