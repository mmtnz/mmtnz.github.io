import React from "react";
import { personalInfo } from "../data";

const Footer = () => {
    return (
        <div className="footer">
            <div>{`&copy ${personalInfo.name}`}</div>

            <p>Footer</p>
        </div>
    )
};
export default Footer;