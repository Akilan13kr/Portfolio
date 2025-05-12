import React from 'react';
import './Contact.css';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {


  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2 className="section-title">CONTACTS</h2>
        
        
        <div className="contact-grid">
          <div className="contact-info">
            <h3><FaMapMarkerAlt className="contact-icon" /> My Address</h3>
            <p>
              Thiruvanaikovil, Trichy,<br />
              TamilNadu,<br />
              India.<br />
              <a href="tel:+91-8189994078"><FaPhone className="contact-icon" />8189994078</a><br />
              <a href="mailto:akilan13kr@gmail.com"><FaEnvelope className="contact-icon" /> akilan13kr@gmail.com</a>
            </p>
            
            <div className="contact-social-links">
              <a href="https://github.com/Akilan13kr" target="_blank" rel="noopener noreferrer">
                <FaGithub className="contact-social-icon" />
              </a>
              <a href="www.linkedin.com/in/akilan-k-r" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="contact-social-icon" />
              </a>
              {/* Add more social links as needed */}
            </div>
          </div>
          
          <div className="contact-form">
            <h3>Write to me</h3>
            <form  action="https://formsubmit.co/akilan13kr@gmail.com" method="POST">
              <div className="form-group">
                <input type="text" name="name" placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <input type="email" name="email" placeholder="Email" required />
              </div>
              <div className="form-group">
                <input type="text" name="subject" placeholder="Subject" required />
              </div>
              <div className="form-group">
                <textarea placeholder="Message" name='message' rows="5" required></textarea>
              </div>
              <button type="submit" className="submit-btn">Send Message</button>
            </form>
          </div>
        </div>
        
        <div className="copyright">
          <p>&copy; {new Date().getFullYear()} Akilan K.R. All Rights Reserved.</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;