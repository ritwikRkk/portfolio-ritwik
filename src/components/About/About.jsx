import React from 'react';
import "./About.css";
import { useOutletContext } from 'react-router-dom';
import { forwardRef } from 'react';

const About = () => {
    const context = useOutletContext();
    // console.log(context);

    return (
        <div className="about_container" ref={context.skillScrollRef}>
            <div className="about_wrapper">
                <h3 className="about_header">Know Me</h3>
                <div className="about_section">
                    <div className="about_txt">
                        <p>Who Am I?</p>
                        <span>Greetings! I'm Ritwik kumar Kushwaha, who's embarked on a captivating journey into the realm of web development. From crafting over 10+ web apps that seamlessly merge robust backend APIs with user authentication, extending my education through online resources to master the language of technology beyond textbooks, my story is one of constant evolution. Fluent in spoken languages such as English & Hindi, while HTML, CSS, JavaScript, React.js, Node.js, Express.js, MongoDB, & Git are my coding languages. I find joy in unraveling the complexities of Web development. Despite my history degree, I've seamlessly transitioned into the dynamic world of web development, driven by a commitment to make a meaningful impact. I'm fascinated by web 3.0, problem-solving and eager to share the magic of web development.  Let's connect and script the next chapter together.</span>
                        <span className="readMore_btn"> <a href="https://github.com/ritwikRkk" target="_blank" rel="noreferrer">Read More</a> <i className="fa-solid fa-arrow-up-right-from-square"></i>  </span>
                    </div>
                    <div className="about_info">
                        <h3 className="heading">EDUCATION:</h3>
                        <div className="education_list">
                            <h4>BBMKU (university), Dhanbad</h4>
                            <p>Bachelor of Arts (History)</p>
                            <p>(2020 - 2023) | <span>Grade:</span> 7.0 </p>
                        </div>
                        <div className="education_list">
                            <h4>DAV Public School, Alkusa, Dhanbad</h4>
                            <p>Higher Secondary Certificate (class 12th)</p>
                            <p>(2017 - 2019) | <span>Grade:</span> 86% </p>
                        </div>
                        <div className="education_list">
                            <h4>DAV Public School, Alkusa, Dhanbad</h4>
                            <p>Secondary School Certificate (class 10th)</p>
                            <p>(2015 - 2017) | <span>Grade:</span> 10.0 </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default forwardRef(About)