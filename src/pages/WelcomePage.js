import React from "react";
import { personalInfo } from "../data";
import AboutMe from "../components/sections/AboutMe";
import Certifications from "../components/sections/Certifications";
import Projects from "../components/sections/Projects";

const WelcomePage = () => {
    return (
        <div className="welcome-page">
            <section id="home" className="section">
                <div className="section-content-main">
                    <h1>HEY, I'M {personalInfo.name.toUpperCase()}</h1>
                </div>
            </section>
    
            <section id="about" className="section">
                <AboutMe/>
            </section>
        
            <section id="projects" className="section">
                <Projects/>
            </section>

            <section id="certifications" className="section">
                <Certifications/>
            </section>
        
            <section id="contact" className="section">
                <div className="section-header">
                    <h1>Contact</h1>
                </div>
                <div style={{height: "55rem"}}></div>
            </section>
        </div>
    )
};
export default WelcomePage;