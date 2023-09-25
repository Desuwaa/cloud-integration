import React from "react";

const Contact = ()=> {
    return(
        <>
            <div className="container">
                <div className="contact-form">
                    <form action="#" method="POST" className="contact-inputs">
                        <input
                        type="text"
                        name="username"
                        placeholder="username"
                        autoComplete="off"
                        required
                        />

                        <input
                        type="email"
                        name="Email"
                        placeholder="Email"
                        autoComplete="off"
                        required
                        />

                        <textarea 
                        name="message" 
                        cols="30"
                        rows="6"
                        autoComplete="off"
                        required></textarea>

                        <input type="submit" value="send" ></input>
                    </form>
                </div>
            </div>
    </>
    )
}

export default Contact;