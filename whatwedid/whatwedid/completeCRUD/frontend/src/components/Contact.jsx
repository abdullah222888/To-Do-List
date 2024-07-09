import React from 'react';

class Contact extends React.Component {
  handleSubmit = (event) => {
    event.preventDefault();
    alert("Thank you for your feedback! We have received your message and will get back to you as soon as possible.");

    // Reset the form fields
    event.target.reset();
  };

  render() {
    return (
      <div className="contact-container">
        <h1 className="contact-heading">Contact Us</h1>
        <form className="contact-form" onSubmit={this.handleSubmit}>
          <label className="contact-label" htmlFor="name">Name:</label>
          <input className="contact-input" type="text" id="name" name="name" required />

          <label className="contact-label" htmlFor="email">Email:</label>
          <input className="contact-input" type="email" id="email" name="email" required />

          <label className="contact-label" htmlFor="subject">Subject:</label>
          <select className="contact-select" id="subject" name="subject">
            <option value="General Inquiry">General Inquiry</option>
            <option value="Technical Support">Technical Support</option>
            <option value="Feedback">Feedback</option>
          </select>

          <label className="contact-label" htmlFor="message">Message:</label>
          <textarea className="contact-textarea" id="message" name="message" rows="6" required></textarea>

          <label className="contact-label" htmlFor="phone">Phone (optional):</label>
          <input className="contact-input" type="tel" id="phone" name="phone" />

          <label className="contact-label" htmlFor="attachment">Attachment (optional):</label>
          <input className="contact-file" type="file" id="attachment" name="attachment" />

          <button className="contact-button" type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default Contact;
