import React from 'react';
import "./Projects.css";
import { projectsData } from '../../Data/Data';
import { useOutletContext } from 'react-router-dom';

const Projects = () => {
    const context = useOutletContext();
    // console.log(context);

    const renderProjects = (project, index) => {
        return (
            <div key={index} className="project_type">
                <img src={project.img} alt="" />
                <div className="project_info">
                    <h4 className="project_name">{project.name}</h4>
                    <p className="project_desc">
                        <span>{project.desc} </span>
                        <span className="readMore_btn"> <a href={project.readmore_link} target="_blank" rel="noreferrer">Read More</a> <i className="fa-solid fa-arrow-up-right-from-square"></i>  </span>
                    </p>
                    <a href={project.link} target='_blank' rel="noreferrer"> <p className="project_link"><i className="fa-solid fa-arrow-up-right-from-square"></i></p> </a>
                </div>
            </div>
        )
    }

    return (
        <div className="projects_container" ref={context.projectScrollRef}>
            {/* <div className="projects_container" > */}
            <div className="projects_wrapper">
                <h3 className="header_bottom_bar">Projects</h3>
                <div className="project_list">
                    {/* <div className="project_type">
                        <img src="./images/test_img2.png" alt="" />
                        <div className="project_info">
                            <h4 className="project_name">PrimeCart</h4>
                            <p className="project_desc">
                                <span>A Tic Tac Toe game using ReactJS, offering an interactive and enjoyable gaming experience.</span>
                                <span className="readMore_btn"> <a href="https://github.com/ritwikRkk" target="_blank" rel="noreferrer">Read More</a> <i className="fa-solid fa-arrow-up-right-from-square"></i>  </span>
                            </p>
                            <a href="https://google.com" target='_blank' rel="noreferrer"> <p className="project_link"><i className="fa-solid fa-arrow-up-right-from-square"></i></p> </a>
                        </div>
                    </div> */}
                    {projectsData.map(renderProjects)}

                </div>


            </div>
        </div>
    )
}

export default Projects