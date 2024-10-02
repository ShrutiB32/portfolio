import React from 'react';
import './About.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import profile_img from '../../assets/profile_img.png'

const About = () => {
    return (
        <div id='about' className="about">
            <div className="about-title">
                <h1>About me</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="about-section">
                {/* <div className="about-left">
                    <img src={profile_img} alt="" />
                </div> */}
                <div className="about-right">
                    <div className="about-para">
                    <p>I'm Shruti Ballurgi, a frontend developer with 2 years of experience building dynamic web applications. Skilled in Angular and React, I deliver impactful user experiences. With knowledge in Node.js and Express, I can handle full-stack development. I'm dedicated to continuous learning and tech exploration.</p>
                    </div>
                    <div className="about-skills">
                        <div className="about-skill">
                            <p>HTML & CSS</p>
                            <hr style={{ width: "85%" }} />
                        </div>
                        <div className="about-skill">
                            <p>React JS</p>
                            <hr style={{ width: "75%" }} />
                        </div><div className="about-skill">
                            <p>Angular</p>
                            <hr style={{ width: "95%" }} />
                        </div><div className="about-skill">
                            <p>JavaScript</p>
                            <hr style={{ width: "85%" }} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="about-achievements">
                <div className="about-achievement">
                    <h1>2+</h1>
                    <p>YEARS OF EXPERIENCE</p>
                </div>
                <hr />
                <div className="about-achievement">
                    <h1>3+</h1>
                    <p>Projects Completed</p>
                </div>

            </div>
        </div>
    )
}

export default About