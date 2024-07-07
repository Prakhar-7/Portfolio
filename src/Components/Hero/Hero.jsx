import React from 'react'
import "./Hero.css"
import profile_img from '../../assets/profile_img.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div id="home" className="hero">
      <img src={profile_img} alt="" />
      <h1>
        <span>I'm Prakhar Srivastava,</span> Web Developer & AI Enthusiast based
        in India.
      </h1>
      <p>
        {/* Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi ipsum
        veritatis sunt? Ut, doloribus beatae! Lorem ipsum dolor sit. */}
      </p>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Connect With Me
          </AnchorLink>
        </div>
        {/* <div className="hero-resume">My Resume</div> */}
      </div>
    </div>
  )
}

export default Hero
