import React from "react";
import { personalInfo } from "../../data";
import ReactMarkdown from "react-markdown";





const AboutMe = () => {

    const numSkills = personalInfo.skillsList.length;
    const skillsRow1 = personalInfo.skillsList.slice(0,5);
    const skillsRow2 = personalInfo.skillsList.slice(5,11);
    const skillsRow3 = personalInfo.skillsList.slice(11, numSkills);


    return (
        <>

            <h1 className="section-header">About Me</h1>

            <div className="section-content">
                
                <div className="about-bio">
                    <h3 className="about-title">Professional Summary</h3>
                    <div className="about-text">
                        <ReactMarkdown>{personalInfo.bio}</ReactMarkdown>    
                    </div>
                </div>

                <div className="about-skills">
                    {/* <h3 className="about-title">Skills</h3> */}

                    <div className="skills-columns">
                        <div className="skills-container">{skillsRow1.map((skill, index) => (
                                <div key={index} className="skill-container">
                                    <img className="skill-badge" src={skill.badge}/>
                                    {skill.title}
                                </div>
                            ))}
                        </div>
                        <div className="skills-container">{skillsRow2.map((skill, index) => (
                                <div key={index} className="skill-container">
                                    <img className="skill-badge" src={skill.badge}/>
                                    {skill.title}
                                </div>
                            ))}
                        </div>
                        <div className="skills-container">{skillsRow3.map((skill, index) => (
                                <div key={index} className="skill-container">
                                    <img className="skill-badge" src={skill.badge}/>
                                    {skill.title}
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
};
export default AboutMe;