import React from 'react'
import "./About.css"
import theme_pattern from "../../assets/theme_pattern.svg"
import profile_img from "../../assets/about_profile.jpeg"

const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About Me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={profile_img} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              I am a web Developer with 3 years of professional expertise in the
              field. Throughout my career, I have worked on numerous impactful
              projects that demonstrate my skills and dedication to the craft.
            </p>
            <p>
              My passion for development is not only reflected in my
              extensive experience but also in the enthusiasm and dedication I
              bring to each project.
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML & CSS</p>
              <hr style={{ width: '50%' }} />
            </div>
            <div className="about-skill">
              <p>React JS</p>
              <hr style={{ width: '70%' }} />
            </div>
            <div className="about-skill">
              <p>JavaScript</p>
              <hr style={{ width: '60%' }} />
            </div>
            <div className="about-skill">
              <p>Express JS</p>
              <hr style={{ width: '45%' }} />
            </div>
            <div className="about-skill">
              <p>C++</p>
              <hr style={{ width: '50%' }} />
            </div>
            <div className="about-skill">
              <p>Python</p>
              <hr style={{ width: '60%' }} />
            </div>
            <div className="about-skill">
              <p>ML</p>
              <hr style={{ width: '40%' }} />
            </div>
            <div className="about-skill">
              <p>SQL</p>
              <hr style={{ width: '60%' }} />
            </div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>3+</h1>
          <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>15+</h1>
          <p>PROJECTS</p>
        </div>
        {/* <hr /> */}
        {/* <div className="about-achievement">
          <h1>15+</h1>
          <p>HAPPY CLIENTS</p>
        </div> */}
      </div>
    </div>
  )
}

export default About
