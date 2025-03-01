import React from "react";
import { personalInfo } from "../../data";
import emailjs from "emailjs-com";

const ContactForm = () => {

}

const EMAILJS_SERVICE_ID = process.env.REACT_EMAILJS_SERVICE_ID;
const EMAILJS_PUBLIC_KEY = process.env.REACT_EMAILJS_PUBLIC_KEY;

const Contact = () => {

    const handleSubmit = (e) => {
        e.preventDefault();


        // send email using emailjs service
        emailjs
            .send(
                EMAILJS_SERVICE_ID,
                // "your_template_id", // Replace with your actual EmailJS Template ID
                {name: "mario", email: "marioml_97@outlook.com", message: "hola"},
                EMAILJS_PUBLIC_KEY // Replace with your EmailJS Public Key
            )
            .then(
                (response) => {
                console.log("SUCCESS!", response.status, response.text);
                // setStatus("Message Sent Successfully!");
                },
                (error) => {
                console.log("FAILED...", error);
                // setStatus("Failed to Send Message.");
                }
            );
    };

    return (
        <>
            <h1 className="section-header">
                Contact
            </h1>

            <div className="contact-content">

                <div>{personalInfo.contactText}</div>
                <form className="contact-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Name</label>
                        <input type="text" placeholder="Enter your name"/>
                    </div>

                    <div className="form-group">
                        <label>Email</label>
                        <input type="text" placeholder="Enter your email"/>
                    </div>

                    <div className="form-group">
                        <label>Message</label>
                        <textarea placeholder="Enter your message"/>
                    </div>

                    <button className="custom-button" type="submit">
                        Submit
                    </button>
                    
                </form>
            </div>
        </>
    )
};
export default Contact;