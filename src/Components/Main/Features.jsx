import React from 'react'
import CommonVideoPlayer from '../Main/CommonVideoPlayer'
import Video2 from './../../assets/video-2.webm'
import Video3 from './../../assets/video-3.webm'
import Video4 from './../../assets/video-4.webm'
import './Features.css'

const Features = () => {
    return (
        <div className="features-provided" >
            <div className="feature-video-text-cont" >
                <div className="video-cont" >
                    <CommonVideoPlayer source={Video2} />
                </div>
                <div className="text-cont" >
                    <h1>Bring your team together</h1>
                    <p>At the heart of Slack are channels: organised spaces for everyone and everything that you need for work. In channels, it’s easier to connect across departments, offices, time zones and even other companies.</p>
                </div>
            </div>
            <div className="feature-video-text-cont flex-reverese" >
                <div className="video-cont" >
                    <CommonVideoPlayer source={Video3} />
                </div>
                <div className="text-cont" >
                    <h1>Choose how you want to work</h1>
                    <p>In Slack, you’ve got all the flexibility to work when, where and how it’s best for you. You can easily chat, send audio and video clips, or join a huddle to talk things through live.</p>
                </div>
            </div>
            <div className="feature-video-text-cont" >
                <div className="video-cont" >
                    <CommonVideoPlayer source={Video4} />
                </div>
                <div className="text-cont" >
                    <h1>Move faster with your tools in one place</h1>
                    <p>With your other work apps connected to Slack, you can work faster by switching tabs less. And with powerful tools like Workflow Builder, you can automate away routine tasks.</p>
                </div>
            </div>
        </div>
    )
}

export default Features