import React, {useState} from "react";
import { personalInfo } from "../../data";
import ReactMarkdown from "react-markdown";
import { useMediaQuery } from "react-responsive";


const WorkCardHeader = ({data, isOpen, setIsOpen}) => {
    return (
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
    )
};

const WorkCardHeaderMobile = ({data, isOpen, setIsOpen}) => {
    return (
        <div className="work-card-header mobile" onClick={() => {setIsOpen(!isOpen)}}>
            <div className="work-card-mobile">
                
                <div className="work-card-title">
                    {data.title}
                </div>
                <div className="work-card-subtitle">
                    <div className="work-card-company mobile">
                        <div>@ {data.company}</div>
                    </div>

                    <div className="work-card-dates mobile">
                        <div>{`${data.dates[0]} - ${data.dates[1]}`}</div>
                    </div>
                </div>

            </div>
            

                <div className="work-card-mobile-icon">
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
        </div>
    )
};

const WorkCardWrap = ({data, isOpen}) => {

    

    return (
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
                        {data.skillsList.map((item, index) => (
                            <div key={index} className="work-wrap-skill">{item}</div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}


const WorkCard = ({data}) => {

    const [isOpen, setIsOpen] = useState(false);
    const isMobile = useMediaQuery({ maxWidth: 768 });

    return(
        <div className="work-card">
            {isMobile ? (
                <WorkCardHeaderMobile data={data} isOpen={isOpen} setIsOpen={setIsOpen}/>
            ) : (
                <WorkCardHeader data={data} isOpen={isOpen} setIsOpen={setIsOpen}/>
            )}

            <WorkCardWrap data={data} isOpen={isOpen}/>   
        </div>
    )
};


const WorkExperience = () => {


    return (
        <>
            
            <h1 className="section-header">Work Experience</h1>
            
            <div className="work-experience-container">
                {personalInfo.workExperience.map((workData, index) => (
                    <WorkCard key={index} data={workData}/>
                ))}

            </div>
        </>
    )
};
export default WorkExperience;