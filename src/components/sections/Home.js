import React from "react";
import { personalInfo } from "../../data";
import TypingEffect from "../TypingEffect";

const Home = () => {
    return (
        <div className="section-content-main">
            <h1>HEY, I'M {personalInfo.name.toUpperCase()}</h1>
            <TypingEffect text={`HEY, I'M ${personalInfo.name.toUpperCase()}`} speed={120}/>
        </div>
    )
};
export default Home;