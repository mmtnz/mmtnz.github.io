import React from "react";
import { personalInfo } from "../../data";
import ReactMarkdown from "react-markdown";


const ProjectCard = ({data}) => {
    return (
        <div className="project-card">
            <div className="project-card-img">
                <img src={data.imagesList}/>
            </div>

            <div className="project-card-content">
                
                <div className="project-card-header">
                    <h3>{data.title}</h3>
                    <a href={data.link} target="_blank" rel="noopener noreferrer">
                        <span className="material-symbols-outlined" translate="no" aria-hidden="true">
                            open_in_new
                        </span>
                    </a>
                    <a href={data.linkRepository} target="_blank" rel="noopener noreferrer">
                        <span className="material-symbols-outlined" translate="no" aria-hidden="true">
                            open_in_new
                        </span>
                    </a>
                </div>

                <div><ReactMarkdown>{data.description}</ReactMarkdown></div>
                <div className="project-skills">
                    {data.techStack.map(item => (
                        <div className="project-skill">{item}</div>
                    ))}
                </div>
            </div>

        </div>
    )
}

const Projects = () => {
    return (
        <>
            <h1 className="section-header">
                Projects
            </h1>

            <div className="projects-container">
                {personalInfo.projectsList.map(projectData => (
                    <ProjectCard data={projectData}/>
                ))}
            </div>
        </>
    )
};
export default Projects;