import React from "react";
import PropTypes from 'prop-types';
import './contact-form.scss';

const ContactForm = ({copy, formSuccess, name, email, phone, message, submit}) => {
    const handleSubmit = e => {
		let form = document.getElementById('contact-form');
		const data = new FormData(form);
		data.append('contact__form', 'contact')
		fetch('/', {
			method: 'POST',
			headers: { "Content-Type": "application/x-www-form-urlencoded" },
			body: new URLSearchParams(data).toString()
		})
		.then(() => {
			form.innerHTML = `<div class="submit-container"><div class="form__success">${formSuccess}</div></div>`;
		})
		.catch(er => {
			form.innerHTML = `<div class="submit-container"><div class="form__error">${er}</div></div>`;
		})
		e.preventDefault();
    }
    
    return (
        <div className="contact-us-form">
            <p>{copy}</p>
            <form id="contact-form" className="contact__form" method="POST" name="contactUs" data-netlify="true" netlify-honeypot="bot-field" onSubmit={handleSubmit} action="/">
                <div className="form-group hidden" aria-hidden="true">
                    <input type="hidden" name="contact" value="contactUs" />
                    <label>Don’t fill this out if you’re human:</label>
                    <input name="bot-field" />
                </div>
                <div className="form-group">
                    <label id="label-name" htmlFor="name">{name}</label>
                    <input type="text" aria-labelledby="label-name" name="name" className="form-control required" id="inputName" placeholder="Enter your name" required="required" aria-required="true"/>
                </div>
                <div className="form-group">
                    <label htmlFor="email" id="label-email">{email}</label>
                    <input type="email" aria-labelledby="label-email" name="email" className="form-control" id="inputEmail" required="required" aria-required="true" placeholder="Enter your email"/>
                </div>
                <div className="form-group">
                    <label htmlFor="phone" id="label-phone">{phone}</label>
                    <input type="tel" aria-labelledby="label-phone" name="phone" className="form-control" id="inputPhone" required="required" aria-required="true" placeholder="Enter your phone number"/>
                </div>
                <div className="form-group">
                    <label htmlFor="message" id="label-message">{message}</label>
                    <textarea type="text" aria-labelledby="label-message" name="message" className="form-control required" id="inputMessage" placeholder="Enter a message" required="required" aria-required="true" rows="5" cols="50"/>
                </div> 
                <button type="submit" name="submit" className="btn btn-primary">{submit}</button>
            </form>
        </div>
    )
}

export default ContactForm

ContactForm.propTypes = {
    copy: PropTypes.string,
    formSuccess: PropTypes.string,
    name: PropTypes.string,
    email: PropTypes.string,
    phone: PropTypes.string,
    message: PropTypes.string,
    submit: PropTypes.string,
}

ContactForm.defaultProps = {
    copy: null,
    formSuccess: null,
    name: null,
    email: null,
    phone: null,
    message: null,
    submit: null,
}