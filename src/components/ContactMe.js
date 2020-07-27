import React from 'react'


const ContactMe = () => {
    return (
        <div className="container text-center my-5">
            <h3>Get In Touch With Me</h3>
            <div className="container  mx-auto text-center contact-container ">
                <a href="https://github.com/omamazainab" className="contact-link">
                    <i className="fa fa-github"></i>
                </a>
                <a href="https://stackoverflow.com/users/9579909/omama-zainab?tab=profile" className="contact-link">
                    <i className="fa fa-stack-overflow"></i>
                </a>
                <a href="https://twitter.com/omamazainab_" className="contact-link">
                    <i className="fa fa-twitter"></i>
                </a>
                <a href="https://www.linkedin.com/in/omama-zainab-348a07156/" className="contact-link">
                    <i className="fa fa-linkedin-square"></i>
                </a>
                <a href="mailto:omamazainab00@gmail.com" className="contact-link">
                    <i className="fa fa-envelope"></i>
                </a>
            </div>
        </div>

    )
}

export default ContactMe
