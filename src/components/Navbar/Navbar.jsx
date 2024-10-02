import React, { useRef, useState } from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import github from '../../assets/github.svg'
import linkedin from '../../assets/linkedin.svg'
import mail_icon from '../../assets/mail_icon.svg'
import menu_close from '../../assets/menu_close.svg'
import menu_open from '../../assets/menu_open.svg'
import underline from '../../assets/nav_underline.svg'
import './Navbar.css'


const Navbar = () => {

    const [menu, setMenu] = useState("home");
    const menuRef = useRef();

    const openMenu = () => {
        menuRef.current.style.right = "0"
    }
    const closeMenu = () => {
        menuRef.current.style.right = "-350px"
    }

    return (
        <div className="navbar">
            {/* <img src={logo} alt="" /> */}
            <img src={menu_open}
                onClick={openMenu}
                alt="" className="nav-mob-open" />
            <ul ref={menuRef} className="nav-menu">
                <img src={menu_close}
                    onClick={closeMenu}
                    className="nav-mob-close" />
                <li>
                    <AnchorLink className="anchor-link" href='#home'>
                        <p onClick={() => setMenu("home")}>Home</p>
                    </AnchorLink>
                    {menu === "home" ? <img src={underline} alt="" /> : <></>}
                </li>
                <li>
                    <AnchorLink className="anchor-link" offset={50} href='#about'>
                        <p onClick={() => setMenu("about")}>About</p>
                    </AnchorLink>
                    {menu === "about" ? <img src={underline} alt="" /> : <></>}
                </li>
                <li>
                    <AnchorLink className="anchor-link" offset={50} href='#services'>
                        <p onClick={() => setMenu("experience")}>Experience</p>
                    </AnchorLink>
                    {menu === "services" ? <img src={underline} alt="" /> : <></>}
                </li>
                <li>
                    <AnchorLink className="anchor-link" offset={50} href='#work'>
                        <p onClick={() => setMenu("work")}>Portfolio</p>
                    </AnchorLink>
                    {menu === "work" ? <img src={underline} alt="" /> : <></>}
                </li>
                <li>
                    <AnchorLink className="anchor-link" offset={50} href='#contact'>
                        <p onClick={() => setMenu("contact")}>Contact</p>
                    </AnchorLink>
                    {menu === "contact" ? <img src={underline} alt="" /> : <></>}
                </li>
            </ul>
            <div className="nav-connect">
                {/* <AnchorLink className="anchor-link" offset={50} href='#contact'>
                Connect with me
            </AnchorLink> */}

                <div className="contact-detail">
                    <a href="mailto: shrutiballurgi1@gmail.com"><img src={mail_icon} alt="" /></a>
                </div>
                <div className="contact-detail">
                    <a href="http://linkedin.com/in/shruti-ballurgi" target='_blank'><img src={linkedin} alt="" /></a>
                </div>
                <div className="contact-detail">
                    <a href="https://github.com/ShrutiB32" target='_blank'><img src={github} alt="" /></a>
                </div>
            </div>
        </div>
    )
}

export default Navbar