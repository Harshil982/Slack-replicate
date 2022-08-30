import React from 'react'
import Video from './../../assets/video-1.webm'
import './Poster.css'
import {FcGoogle} from 'react-icons/fc'
import CommonVideoPlayer from './CommonVideoPlayer'

const Poster = () => {
  return (
    <div className="poster-main-cont" >
      <div className="Poster-text" >
        <h1>Great teamwork starts with a<span style={{ color: "#ecb22e" }} > digital HQ</span></h1>
        <p>With all your people, tools and communication in one place, you can work faster and more flexibly than ever before.</p>
        <div className="button-cont" >
          <button>SIGN UP WITH EMAIL ADDRESS</button>
          <button><FcGoogle />SIGN UP WITH GOOGLE</button>
        </div>
        <p><strong>Slack is free to try</strong> for as long as you like</p>
      </div>
      <div className="video-cont" >
        {/* <video autoPlay controls ><source src={Video} type=""></source></video> */}
        <CommonVideoPlayer source={Video} />
      </div>
    </div>
  )
}

export default Poster