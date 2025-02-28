import React from "react";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-scroll";

const Header = () => {

    const isMobile = useMediaQuery({ maxWidth: 900 });


    return (
        <div className="header">
            {/* <div>Mario Martinez</div> */}
            <nav className="nav-bar">
                {/* <Link to="home" smooth={true} duration={500} className="nav-bar-item">Home</Link> */}
                <Link to="about" smooth={true} duration={500} className="nav-bar-item">About</Link>
                <Link to="experience" smooth={true} duration={500} className="nav-bar-item">Experience</Link>
                <Link to="projects" smooth={true} duration={500} className="nav-bar-item">Projects</Link>
                <Link to="certifications" smooth={true} duration={500} className="nav-bar-item">Certifications</Link>
                <Link to="contact" smooth={true} duration={500} className="nav-bar-item">Contact</Link>
            </nav>
            
        </div>
    )
    
};
export default Header;