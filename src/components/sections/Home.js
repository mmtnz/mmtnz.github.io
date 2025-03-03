import React from "react";
import { personalInfo } from "../../data";
import TypingEffect from "../TypingEffect";
import { Link } from "react-scroll";

const Home = () => {
    return (
        <div className="section-content-main">
            {/* <h1>HEY, I'M {personalInfo.name.toUpperCase()}</h1> */}
            <TypingEffect text={`HEY, I'M ${personalInfo.name.toUpperCase()}`} speed={120}/>
            <div className="description">{personalInfo.description}</div>
            <div className="custom-button icon">
                <Link to="about" smooth={true} duration={500} className="button-link">
                    Know about me
                    <span className="material-symbols-outlined" translate="no" aria-hidden="true">
                        arrow_downward
                    </span>
                </Link>
            </div>
        </div>
    )
};
export default Home;