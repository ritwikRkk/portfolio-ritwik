import React from 'react';
import "./Skills.css";
import { ProgrammSkillsData, designSkillsData } from '../../Data/Data';

const Skills = () => {

    const renderSkill = (skill, index) => {
        return (
            <div key={index} className="skill_set">
                <p className={`skill_name_eff ${skill.efficiency>0 ? "" : "hidden"}`}> <span>{skill.name}</span> <span>{skill.efficiency}%</span> </p>
                <p className={`skill_progress_bar ${skill.efficiency>0 ? "" : "hidden"}`} style={{ "--w": `${skill.efficiency}%` }}></p>
            </div>
        )
    }

    return (
        <div className="skills_container">
            <div className="skills_wrapper">

                <div className="skills_header">
                    <h3 className="header_bottom_bar">My Skills</h3>
                    <p>Masterfully blending code and creativity, I showcase my prowess in programming, design, and professional skills on my portfolio — bringing a seamless fusion of technical excellence and creative innovation to every project.</p>
                </div>

                <div className="skills_section">

                    <div className="skills_list">
                        <h3 className="header_bottom_bar">Programming Skills</h3>
                        <div className="code_skill_list">
                            {ProgrammSkillsData.map(renderSkill)}
                        </div>
                    </div>

                    <div className="skills_list">
                        <h3 className="header_bottom_bar">Design Skills</h3>
                        <div className="design_skill_list">
                            {designSkillsData.map(renderSkill)}
                        </div>
                    </div>

                    <div className="skills_list">
                        <h3 className="header_bottom_bar">Professional Skills</h3>
                        <div className="pro_skill_set">
                            <div className="pro_skill">
                                {/* <div className="circular_progress">80%</div> */}
                                <div className="circular_progress" style={{ "--r": "90" }}>
                                    <span className="progress_value">90%</span>
                                </div>
                                <span className="pro_skill_name">Communication</span>
                            </div>

                            <div className="pro_skill">
                                {/* <div className="circular_progress">80%</div> */}
                                <div className="circular_progress" style={{ "--r": "75" }}>
                                    <span className="progress_value">75%</span>
                                </div>
                                <span className="pro_skill_name">Team Work</span>
                            </div>

                            <div className="pro_skill">
                                {/* <div className="circular_progress">80%</div> */}
                                <div className="circular_progress" style={{ "--r": "85" }}>
                                    <span className="progress_value">85%</span>
                                </div>
                                <span className="pro_skill_name">Project Management</span>
                            </div>

                            <div className="pro_skill">
                                {/* <div className="circular_progress">80%</div> */}
                                <div className="circular_progress" style={{ "--r": "80" }}>
                                    <span className="progress_value">80%</span>
                                </div>
                                <span className="pro_skill_name">Creativity</span>
                            </div>
                        </div>
                    </div>

                    {/* <div className="skills_list"></div>
                    <div className="skills_list"></div> */}

                </div>
            </div>
        </div>
    )
}

export default Skills