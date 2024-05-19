import * as React from "react";
import './Contact.css';

function Contact() {
    return (
        <>
            <section style={{width:'100vw'}} id="Contact">
                <div className="div1">
                    <h2>Contact Us</h2>
                    <div className="separator"></div>

                    <div className="div2">
                        <p><i className="fa-solid fa-location-dot"></i> Tala : Egypt </p>
                        <p><i className="fa-solid fa-phone"></i> Phone : +1(1524)296-6758 </p>
                        <p><i className="fa-regular fa-envelope"></i> Email : Info@gmail.com </p>
                    </div>

                    <div className="div3">
                        <p>Let's Get In Touch, Send Us A Message</p>
                    </div>

                    <form action="/">
                        <div className="form-group">
                            <label >Name:</label>
                            <input type="text" id="name"  placeholder="Enter your name" />
                        </div>
                        <div className="form-group">
                            <label >Email:</label>
                            <input type="email" id="email"  placeholder="Enter your email" />
                        </div>
                        <div className="form-group">
                            <label >Subject:</label>
                            <input type="text" id="subject"  placeholder="Enter the subject" />
                        </div>
                        <div className="form-group">
                            <label>Message:</label>
                            <textarea id="message" rows="4" placeholder="Enter your message"></textarea>
                        </div>
                        <button type="submit" id="btn-Contact" className="btn btn-success w-100">Send A Message</button>
                    </form>
                </div>
            </section>
        </>
    )
}

export default Contact;
