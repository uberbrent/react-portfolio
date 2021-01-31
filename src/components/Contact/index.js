import React from 'react';

function Contact() {
    return(
        <section>
            <h1>Contact Me</h1>
            <form id="contact-form">
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="name" defaultValue="" />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="text" name="email" defaultValue="" />
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea name="message" rows="5" defaultValue="" />
                </div>
            </form>
        </section>
    )
}

export default Contact;