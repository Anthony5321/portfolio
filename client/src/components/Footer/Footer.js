import React from "react";
import './FooterStyles.css'
import {FaGithub} from 'react-icons/fa'
import {FaLinkedin} from 'react-icons/fa'
import { HashLink as Link } from "react-router-hash-link";
import { BrowserRouter } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <BrowserRouter>
      <ul className="permalinks">
        <li><a><Link to='#home' smooth>Home</Link></a></li>
        <li><a><Link to='#about' smooth>About</Link></a></li>
        <li><a><Link to='#skills' smooth>Skills</Link></a></li>
        <li><a><Link to='#work' smooth>Work</Link></a></li>
      </ul>
      </BrowserRouter>
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