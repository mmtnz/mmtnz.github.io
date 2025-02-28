import React from "react";
import { personalInfo } from "../data";
import AboutMe from "../components/sections/AboutMe";
import Certifications from "../components/sections/Certifications";
import Projects from "../components/sections/Projects";
import WorkExperience from "../components/sections/WorkExperience";
import Home from "../components/sections/Home";
import Contact from "../components/sections/Contact";

const WelcomePage = () => {
    return (
        <div className="welcome-page">
            <section id="home" className="section">
                <Home/>
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

            <section id="experience" className="section">
                <WorkExperience/>
            </section>
        
            <section id="contact" className="section">
                <Contact/>
            </section>
        </div>
    )
};
export default WelcomePage;