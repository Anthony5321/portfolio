import React from "react";
import './FooterStyles.css'

const Footer = () => {
  return (
    <footer>
      
      <ul className="permalinks">
        <li><a href="/#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#languages">Skills</a></li>
        <li><a href="#work">Work</a></li>
      </ul>
      <br/>
      <div className="footer_copyright">
        <small>&copy; Made with care, Anthony Harpestad. All rights reserved.</small>
      </div>
    </footer>

  )
}

export default Footer;