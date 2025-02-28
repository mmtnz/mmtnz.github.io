import React from "react";
import { personalInfo } from "../../data";


const Certification = ({data}) => {
    return (
        <div className="certification">
            <img className="badge" src={data.badge}/>
            <div className="certification-data">
                <div className="certification-title">{data.title}</div>
                <div className="certification-info">
                    <div>Issuer: {data.issuer}</div>
                    <div>Expedition date: {data.expeditionDate}</div>
                </div>
            </div>
            <div>

            <a href={data.link} target="_blank" rel="noopener noreferrer">
                <span className="material-symbols-outlined" translate="no" aria-hidden="true">
                    open_in_new
                </span>
            </a>
            </div>
        </div>
    )
};


const Certifications = () => {
    return (
        <>
            
            <h1 className="section-header">Certifications</h1>
            
            <div className="certifications-container">
                {personalInfo.certifications.map(certificationData => (
                    <Certification data={certificationData}/>
                ))}
            </div>
        </>
    )
};
export default Certifications;