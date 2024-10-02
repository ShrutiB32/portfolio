import React, { useState } from 'react'
import call_icon from '../../assets/call_icon.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import theme_pattern from '../../assets/theme_pattern.svg'
import './Contact.css'

const Contact = () => {

    const [formData, setFormData] = useState({ name: "", email: "", message: "" })
    const [showFormSuccess, setShowFormSuccess] = useState(false);

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append("access_key", "ea6f1eae-1aed-4539-9dfa-2603ca1a6e4a");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        }).then((res) => res.json());

        if (res.success) {
            let timer;
            setFormData({ name: "", email: "", message: "" })
            clearTimeout(timer);
            setShowFormSuccess(true);
            timer = setTimeout(() => {
                setShowFormSuccess(false)
            }, 30000)
            console.log("Success", res);
        }
    };

    return (
        <div id='contact' className="contact">
            <div className="contact-title">
                <h1>Get in touch</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="contact-section">
                <div className="contact-left">
                    <h1>Let's Talk</h1>
                    <p>I'm currently availbale to take on new projects, Feel free to reach out using the links below or submit the form for any queries!</p>
                    <div className="contact-details">
                        <div className="contact-detail">
                        <img src={mail_icon} alt="" /><p>shrutiballurgi1@gmail.com</p>
                        </div>
                        <div className="contact-detail">
                            <img src={call_icon} alt="" /><p>+91 8152058506</p>
                        </div>
                        <div className="contact-detail">
                            <img src={location_icon} alt="" /><p>Pune, India</p>
                        </div>
                    </div>
                </div>
                <form className="contact-right" onSubmit={onSubmit}>
                    <label htmlFor="name">Your Name</label>
                    <input type="text" placeholder='Enter your name' name="name" id="name" value={formData.name} onChange={(event) => setFormData({ ...formData, ['name']: event.target.value })} />

                    <label htmlFor="email">Your Email</label>
                    <input type="email" placeholder='Enter your email' name="email" id="email" value={formData.email} onChange={(event) => setFormData({ ...formData, ['email']: event.target.value })} />

                    <label htmlFor="message">Write your message here</label>
                    <textarea name="message" rows="10" id="message" placeholder="Enter your message" value={formData.message} onChange={(event) => setFormData({ ...formData, ['message']: event.target.value })}></textarea>
                    <div className="form-status-container">
                        <button type="submit" className="contact-submit" disabled={formData.name === "" && formData.message === "" && formData.email === ""}>Submit now</button>
                        {showFormSuccess ? <p className="formSuccess-message">Form submitted Successfully!</p> : <></>}
                    </div>

                </form>
            </div>
        </div>

    )
}

export default Contact