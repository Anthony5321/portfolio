import React from "react";
import './FooterStyles.css'
import {FaGithub} from 'react-icons/fa'
import {FaLinkedin} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#work">Work</a></li>
        <li><a href="#contact">Contact</a></li>

      </ul>
      <div className="footer_socials">
        <a href="https://github.com/Anthony5321"><FaGithub/></a>
        <a href="https://www.linkedin.com/in/anthonyharpestad/"><FaLinkedin/></a>
      </div>

      <div className="footer_copyright">
        <small>&copy; Made with care, Anthony Harpestad. All rights reserved.</small>
      </div>
    </footer>

  )
}

export default Footer;