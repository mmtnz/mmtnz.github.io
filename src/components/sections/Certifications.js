import React from "react";
import { personalInfo } from "../../data";
import { useMediaQuery } from "react-responsive";

const CertificationMobile = ({data}) => {
    return (
        <div className="certification">

            
            <div className="certification-title">{data.title}</div>

            <div className="certification-data">

                <img className="badge" src={data.badge}/>
                
                <div className="certification-aux">
                    <div className="certification-info">
                        <div>Issuer: {data.issuer}</div>
                        <div>Expedition date: {data.expeditionDate}</div>
                    </div>
                    <div className="certification-link">
                        <a href={data.link} target="_blank" rel="noopener noreferrer">
                            <span className="material-symbols-outlined" translate="no" aria-hidden="true">
                                open_in_new
                            </span>
                        </a>
                    </div>
                </div>
                

            </div>

        </div>
    )
};

const Certification = ({data}) => {
    const isMobile = useMediaQuery({ maxWidth: 690 });
    return (
        <div className="certification">
            <img className="badge" src={data.badge}/>
            

            <div className="certification-data">

                <div className="certification-title">{data.title}</div>

                {!isMobile ? (
                    <div className="certification-info">
                        <div>Issuer: {data.issuer}</div>
                        <div>Expedition date: {data.expeditionDate}</div>
                    </div>
                ): (
                
                    <div className="certification-aux">
                        <div className="certification-info">
                            <div>Issuer: {data.issuer}</div>
                            <div>Expedition date: {data.expeditionDate}</div>
                        </div>
                        <div className="certification-link">
                            <a href={data.link} target="_blank" rel="noopener noreferrer">
                                <span className="material-symbols-outlined" translate="no" aria-hidden="true">
                                    open_in_new
                                </span>
                            </a>
                        </div>
                    </div>
                )}

            </div>

            {!isMobile && (
                <div className="certification-link">
                    <a href={data.link} target="_blank" rel="noopener noreferrer">
                        <span className="material-symbols-outlined" translate="no" aria-hidden="true">
                            open_in_new
                        </span>
                    </a>
                </div>
            )}
        </div>
    )
};


const Certifications = () => {
    const isMobile = useMediaQuery({ maxWidth: 690 });
    return (
        <>
            
            <h1 className="section-header">Certifications</h1>
            {!isMobile ? (
                <div className="certifications-container">
                    {personalInfo.certifications.map((certificationData, index) => (
                        <Certification key={index} data={certificationData}/>
                    ))}
                </div>
            ):(
                <div className="certifications-container">
                    {personalInfo.certifications.map((certificationData, index) => (
                        <CertificationMobile key={index} data={certificationData}/>
                    ))}
                </div>
            )} 
        
        </>
    )
};
export default Certifications;