import React from 'react';
import "./Footer.css";

const Footer = () => {
    return (
        <div className="footer_container">
            <div className="footer_wrapper">
                <p className="footer_section">
                    <span>Copyright &copy; </span>
                    <span className="logo_txt"> Ritwik's Portfolio </span>
                    <span className="thank_txt"> Made with <i className="fa-solid fa-heart"></i> by <span className="name">RITWIK</span> </span>
                </p>
            </div>
        </div>
    )
}

export default Footer