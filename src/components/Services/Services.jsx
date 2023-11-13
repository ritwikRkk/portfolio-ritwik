import React from 'react';
import "./Services.css";
import { useOutletContext } from 'react-router-dom';


const Services = () => {

  const context = useOutletContext();

  return (
    <div className="services_container" ref={context.serviceScrollRef}>
      <div className="services_wrapper">

        <h3 className="services_header">My Services</h3>

        <div className="services_section">

          <div className="service_type">
            <div className="service_tag">
              <p className="service_img"> <i className="fa-solid fa-code"></i> </p>
              <p className="service_name">Web App Design/ Development</p>
              <p className="service_desc">Unlock your digital potential with our web design and development services. From engaging design to robust development, I tailor solutions to meet your unique goals, making your online presence stand out.</p>
            </div>
          </div>
          
          <div className="service_type">
            <div className="service_tag">
              <p className="service_img"> <i className="fa-solid fa-right-left"></i> </p>
              <p className="service_name">Backend/ API Development</p>
              <p className="service_desc">Elevate your business with my backend & API development services. I aim to ensure back-end systems are seamlessly integrated with frontend applications, ensuring a seamless, secure, and scalable experience.</p>
            </div>
          </div>

          <div className="service_type">
            <div className="service_tag">
              <p className="service_img"> <i className="fa-solid fa-screwdriver-wrench"></i> </p>
              <p className="service_name">Maintenace & Support</p>
              <p className="service_desc">Keep your website running smooth, secure, and up-to-date with my maintenance and support service, allowing you to focus on your business, while I handle troubleshooting, updates, enhancements, and securtiy.</p>
            </div>
          </div>

          {/* <div className="service_type">
            <div className="service_tag">
              <p className="service_img"> <i className="fa-solid fa-arrow-up-from-bracket"></i> </p>
              <p className="service_name">Server Deployment</p>
              <p className="service_desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, fuga!</p>
            </div>
          </div> */}

        </div>
        {/* SERVICES
            <i className="fa-solid fa-code"></i>
            <i className="fa-solid fa-arrow-up-from-bracket"></i>
            <i className="fa-solid fa-right-left"></i> */}
      </div>
    </div>
  )
}

export default Services