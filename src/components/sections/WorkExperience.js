import React, {useState} from "react";
import { personalInfo } from "../../data";
import ReactMarkdown from "react-markdown";


const WorkCard = ({data}) => {

    const [isOpen, setIsOpen] = useState(false);

    return(
        <div className="work-card">
            <div className="work-card-header" onClick={() => {setIsOpen(!isOpen)}}>
                <div className="work-card-title">
                    {data.title} @ {data.company}
                </div>
                <div className="work-card-dates">
                    
                    <div>
                        {isOpen ? (
                            <span className="material-symbols-outlined" translate="no" aria-hidden="true">
                                remove
                            </span>
                        ) : (
                            <span className="material-symbols-outlined" translate="no" aria-hidden="true">
                                add
                            </span>
                        )}
                    </div>
                    <div>{`${data.dates[0]} - ${data.dates[1]}`}</div>
                </div>
            </div>
            <div className={`work-card-wrap ${isOpen ? "visible" : ""}`}>
                <div className="work-wrap-content">
                    <div className="work-wrap-content-data">
                        <div className="work-wrap-location">
                            <span className="material-symbols-outlined" translate="no" aria-hidden="true">
                                location_on
                            </span>
                            {data.location}
                        </div>

                        <div className="work-wrap-summary">
                            <ReactMarkdown>{data.summary}</ReactMarkdown>
                        </div>

                        <div className="work-wrap-skills">
                            {data.skillsList.map(item => (
                                <div className="work-wrap-skill">{item}</div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};


const WorkExperience = () => {


    return (
        <>
            <div className="section-header">
                <h1>Work Experience</h1>
            </div>
            <div className="work-experience-container">
                {personalInfo.workExperience.map(workData => (
                    <WorkCard data={workData}/>
                ))}

            </div>
        </>
    )
};
export default WorkExperience;