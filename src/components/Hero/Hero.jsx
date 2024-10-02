import React from 'react';
import './Hero.css'
import profile_img from '../../assets/profile_img.png'
import AnchorLink from 'react-anchor-link-smooth-scroll';
const Hero = () => {
    const handleResumeClick = () => {
        window.open('https://bit.ly/3YCvFfV', '_blank');
    };
    return (
        <div id='home' className='hero'>
            <img src={profile_img} alt="" />
            <h1><span>I'm Shruti Ballurgi</span>, Frontend developer</h1>
            <p>
                Passionate about crafting sleek, responsive web apps using Angular and React.
            </p>

            <div className="hero-action">
                <div className="hero-connect">
                    <AnchorLink className="anchor-link" offset={50} href='#contact'>
                        Connect with me
                    </AnchorLink>
                </div>
                <div className="hero-resume" onClick={handleResumeClick}>My resume</div>
            </div>
        </div>
    )
}

export default Hero