import React from "react";
import { personalInfo } from "../../data";

const AboutMe = () => {
    return (
        <>
            {/* <div className="section-header"> */}
                {/* <h1 className="section-header2">About Me</h1> */}
                <h1 className="section-header">About Me</h1>
            {/* </div> */}
            <div className="section-content">
                <div className="about-bio">
                    {personalInfo.bio}
                </div>
                <div className="about-skills">

                </div>
            </div>
        </>
    )
};
export default AboutMe;