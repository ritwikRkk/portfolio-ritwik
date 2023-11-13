import React, { useState } from 'react';
import "./Contact.css";
import { useOutletContext } from 'react-router-dom';

const Contact = () => {
    const context = useOutletContext();

    const [formData, setFormData] = useState({ name: "", email: "", msg: "", })
    const [sending, setSending] = useState(false);

    const handleOnchange = (e) => {
        const { name, value } = e.target;
        setFormData((prevVal) => {
            return {
                ...prevVal,
                [name]: value
            }
        });
    }

    const data = {
        service_id: process.env.REACT_APP_SERVICEID,
        template_id: process.env.REACT_APP_TEMPLATEID,
        user_id: process.env.REACT_APP_PUBLICKEY,
        template_params: {
            from_name: formData.name,
            frome_email: formData.email,
            message: formData.msg,
            to_name: "Ritwik",
        }
    };

    const sendMail = async () => {
        const url = 'https://api.emailjs.com/api/v1.0/email/send';
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            });
            const res = await response;
            // console.log(res);
            return res;
        } catch (error) {
            console.error(error);
            return error;
        }
    }

    const handleOnSubmit = async (e) => {
        e.preventDefault();
        setSending(true);
        const res = await sendMail();
        if (res.status === 200) {
            setSending(false);
            setFormData({ name: "", email: "", msg: "", });
            setTimeout(() => {
                alert("SUCCESS!, I will get back to you soon!");
            }, 200);

        } else {
            setSending(false);
            setTimeout(() => {
                alert("Failed to send Message, Please try again!");
            }, 200);
        }

    }

    return (
        <div className="contact_container" ref={context.contactScrollRef}>
            <div className="contact_wrapper">
                <h3 className="header_bottom_bar">Contact Me</h3>
                <div className="contact_section">

                    <div className="contact_info">
                        <p className="social_header">Get in Touch on social media</p>
                        <hr />
                        <p className="email"> <i className="fa-solid fa-envelope"></i> <a href="mailto:kushwaharitwik01@gmail.com">kushwaharitwik01@gmail.com</a> </p>
                        <p className="social_links_container">
                            {/* <a className="social_links" href="https://www.facebook.com//" target="_blank" rel="noreferrer"> <i className="fa-brands fa-facebook"></i> </a>
                            <a className="social_links" href="https://www.instagram.com//" target="_blank" rel="noreferrer"> <i className="fa-brands fa-instagram"></i> </a>
                            <a className="social_links" href="https://x.com/" target="_blank" rel="noreferrer"> <i className="fa-brands fa-square-x-twitter"></i> </a> */}
                            <a className="social_links" href="https://github.com/ritwikRkk" target="_blank" rel="noreferrer"> <i className="fa-brands fa-github"></i> </a>
                            <a className="social_links" href="https://www.linkedin.com/in/ritwik-kumar-kushwaha" target="_blank" rel="noreferrer"> <i className="fa-brands fa-linkedin"></i> </a>
                        </p>
                        <p className="resume_btn_container"> <a className="resume_btn" href="./doc/Ritwik's%20Resume.pdf" >Download CV</a> </p>
                        {/* <a className="resume_btn" href="./doc/Resume.pdf" download>Download CV</a> */}
                    </div>

                    <hr />
                    <div className="contact_form">
                        <p className="msg_header">Message Me Directly!</p>

                        <form onSubmit={handleOnSubmit}>
                            <input type="text" name="name" value={formData.name} onChange={handleOnchange} placeholder="Your Name" />
                            <input type="email" name="email" value={formData.email} onChange={handleOnchange} placeholder="Your Email" />
                            <textarea name="msg" value={formData.msg} onChange={handleOnchange} cols="30" rows="10" placeholder="Your Message"></textarea>
                            <button className="btn_submit" type="submit" disabled={formData.name.length < 3 || formData.email.length < 3 || formData.msg.length < 3}>
                                {!sending && <span className="btn_submit_txt">Submit</span>}
                                {sending && <img className="loading_gif" src="./images/loading.gif" alt="" />}
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Contact