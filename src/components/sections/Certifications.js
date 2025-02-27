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
        </div>
    )
};


const Certifications = () => {
    return (
        <>
            <div className="section-header">
                <h1>Certifications</h1>
            </div>
            <div className="certifications-container">
                {personalInfo.certifications.map(certificationData => (
                    <Certification data={certificationData}/>
                ))}
            </div>
        </>
    )
};
export default Certifications;