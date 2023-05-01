import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <section className="contact">
      <div className="container">
        <h2 className="text-center mb-5">Contact Us</h2>
        <form>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" className="form-control" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" className="form-control" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea className="form-control" id="message" name="message" required></textarea>
          </div>
          <button type="submit" className="btn btn-primary btn-lg btn-block">Send</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;