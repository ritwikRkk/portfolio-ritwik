import React, { useEffect, useState } from 'react';
import "./Hero.css";

const Hero = () => {
  const skills = ["Web Developer", "Web Designer", "Graphics Designer"];
  const [currIndex, setCurrIndex] = useState(0); // CURRENT POSTION OF THE CURRENT SKILL STRING
  const [arrIndex, setArrIndex] = useState(0); // CURRENT SKILL
  const [skillsLen, setSkillsLen] = useState(skills[arrIndex].length); // LENGHT OF THE STRING OF CURRENT SKILL
  const [txt, setTxt] = useState(skills[arrIndex].slice(0, currIndex)); // SUBSTRING OF CURRENT SKILL
  const [cursor, setCursor] = useState(false);

  const typeWriter = () => {
    // CHANGE THE CURRENT POSITION OF THE CURRENT SKILL STRING
    setCurrIndex((prevVal) => {
      if (prevVal === skillsLen - 1) {
        // IF CURRENT WORD IS COMPLETED, DELAY THE NEXT WORD BY 1s TO MAKE IT COMPLETELY VISIBLE
        setArrIndex((currIndex) => (currIndex + 1) % skills.length);
      }
      return (prevVal + 1) % skillsLen;
    });
  }
  const blinkCursor = () => setCursor((prevVal) => !prevVal);


  useEffect(() => {
    // CHANGING THE CURRENT POSITION OF THE CURRENT SKILL STRING
    setTimeout(() => {
      typeWriter();
    }, 300);
    setTxt(skills[arrIndex].slice(0, currIndex + 1));
    // eslint-disable-next-line
  }, [currIndex])

  useEffect(() => {
    // CHANGE THE LENGHT OF THE CURRENT SKILL STRING
    setSkillsLen(skills[arrIndex].length);
    // eslint-disable-next-line
  }, [arrIndex])

  useEffect(() => {
    // TO BLINK THE CURSOR
    const blinkId = setInterval(() => {
      blinkCursor();
    }, 230);
    return () => {
      clearInterval(blinkId);
    };
    // eslint-disable-next-line
  }, [])




  return (
    <div className="hero_container">
      <div className="hero_wrapper">
        <div className="info_container">
          <h2>
            <p><span className="greet">Hi</span>, My name is <span className="name">Ritwik</span>, </p>
            <p>and, I am a <span className="passion">Passionate</span> </p>
            <p className="skills"> {txt}<span className={`text_cursor ${cursor === true ? "blink" : ""}`}>|</span> </p>
            {/* <p>Graphics Designer</p> */}
          </h2>
        </div>
        <div className="img_container">
          <img src="./images/Profile_Pic.png" alt="" />
        </div>

      </div>
    </div>
  )
}

export default Hero