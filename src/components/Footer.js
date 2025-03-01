import React from "react";
import { personalInfo } from "../data";

const Footer = () => {
    return (
        <div className="footer">
            <div>&copy; {personalInfo.name}</div>
            <div>{personalInfo.year}</div>
        </div>
    )
};
export default Footer;