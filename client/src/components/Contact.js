import React, { useRef } from "react";
import {MdOutlineMailOutline} from "react-icons/md"
import "./ContactStyles.css"
import emailjs from 'emailjs-com'


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_vyulfl8', 'template_vlyz2rr', form.current, 'q-Yx4iRRqV950_k_j')

    e.target.reset()
  };

  return (
    <section id= "contact">


      <div className="container contact_container">
      <div className="container contact_options">
        <article className="contact_option">
          <h2>Let's talk</h2>
          <h4>Reach me at</h4>
          <MdOutlineMailOutline className="contact_option-icon"/><h3>tyharpo12@gmail.com</h3>
        </article>
      </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Full Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" rows="7" placeholder="Your message" required></textarea>
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact;