import React from "react";
import { personalInfo } from "../../data";
import ReactMarkdown from "react-markdown";
import { useMediaQuery } from "react-responsive";

const GITHUB_LOGO_URL = personalInfo.socialLogos.github;

const ProjectCardMobile = ({data}) => {
    return (
        <div className="project-card">
            

            <div className="project-card-content">

                <div className="project-card-header">
                    <h3>{data.title}</h3>
                    {data.link && (
                        <a className="external-link inverse" title="View online" href={data.link} target="_blank" rel="noopener noreferrer">
                            <span className="material-symbols-outlined" translate="no" aria-hidden="true">
                                open_in_new
                            </span>
                        </a>
                    )}
                    {data.linkRepository && (
                        <a className="external-link" title="View repository" href={data.linkRepository} target="_blank" rel="noopener noreferrer">
                            {/* <span className="material-symbols-outlined" translate="no" aria-hidden="true">
                                open_in_new
                            </span> */}
                            <img className="github-link" src={GITHUB_LOGO_URL}/>
                        </a>
                    )}
                </div>
                
                <div className="project-card-img">
                    <img src={data.imagesList}/>
                </div>

                <div>
                    <ReactMarkdown>{data.description}</ReactMarkdown>
                </div>

                <div className="project-skills">
                    {data.techStack.map((item, index) => (
                        <div key={index} className="project-skill">{item}</div>
                    ))}
                </div>
            </div>

        </div>
    )
}

const ProjectCard = ({data}) => {
    return (
        <div className="project-card">
            <div className="project-card-img">
                    <a className="external-link inverse" href={data.link || data.linkRepository} target="_blank" rel="noopener noreferrer">
                        <img src={data.imagesList}/>
                    </a>
            </div>

            <div className="project-card-content">

                <div className="project-card-header">
                    <h3>{data.title}</h3>
                    {data.link && (
                        <a className="external-link inverse" title="View online" href={data.link} target="_blank" rel="noopener noreferrer">
                            <span className="material-symbols-outlined" translate="no" aria-hidden="true">
                                open_in_new
                            </span>
                        </a>
                    )}
                    {data.linkRepository && (
                        <a href={data.linkRepository} title="View repository" target="_blank" rel="noopener noreferrer">
                            {/* <span className="material-symbols-outlined" translate="no" aria-hidden="true">
                                open_in_new
                            </span> */}
                            <img className="github-link" src={GITHUB_LOGO_URL}/>
                        </a>
                    )}
                </div>

                <div>
                    <ReactMarkdown>{data.description}</ReactMarkdown>
                </div>

                <div className="project-skills">
                    {data.techStack.map((item, index) => (
                        <div key={index} className="project-skill">{item}</div>
                    ))}
                </div>
            </div>

        </div>
    )
}

const Projects = () => {
    const isMobile = useMediaQuery({ maxWidth: 768 });
    return (
        <> 
            <h1 className="section-header">
                Projects
            </h1>

            {!isMobile ? (
                <div className="projects-container">
                    {personalInfo.projectsList.map((projectData, index) => (
                        <ProjectCard key={index} data={projectData}/>
                    ))}
                 </div>
            ):(
                <div className="projects-container">
                    {personalInfo.projectsList.map((projectData, index) => (
                        <ProjectCardMobile key={index} data={projectData}/>
                    ))}
                </div>
            
            )}
            
        </>
    )
};
export default Projects;