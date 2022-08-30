import React from 'react'
import CommonVideoPlayer from './CommonVideoPlayer'
import './TeamsRely.css'
import CustomerReview from './../../assets/customer-review.mp4'
const TeamsRely = () => {
    return (
        <div className="teams-rely" >
            <div className="brief-info" >
                <h1>Teams large and small rely on Slack</h1>
                <p>Slack securely scales up to support collaboration at the world’s biggest companies.</p>
                <button className="meet-slack-btn" >MEET SLACK FOR ENTERPRISE</button>
                <button className="talk-sales-btn">TALK TO SALES</button>
            </div>
            <div className="statics" >
                <div>
                    <h1>85%</h1>
                    <p>of users say Slack has improved communication*</p>
                </div>
                <div>
                    <h1>86%</h1>
                    <p>feel their ability to work remotely has improved*</p>
                </div>
                <div>
                    <h1>88%</h1>
                    <p>feel more connected to their teams*</p>
                </div>
            </div>
            <div className="customer-review" >
                <div className="video-cont" >
                    <CommonVideoPlayer source={CustomerReview} />
                </div>
                <div className="customer-statement" >
                    <p className="statement" >‘We were able to create a large virtual network of employees that can communicate as though they are together. There was a lot of disruption in terms of where we worked, but in terms of how we worked – very little disruption.’</p>
                    <p className="customer-name">Mark Smith</p>
                    <p className="customer-position">Senior Technical Product Manager, T-Mobile</p>
                </div>
            </div>
            <p style={{ textAlign: "center" }} >*Weighted average. Based on 2,707 survey responses from weekly Slack users in the US, UK, Australia and Canada with a ± 2% margin of error at 95% CI (December 2021).</p>
        </div>
    )
}

export default TeamsRely