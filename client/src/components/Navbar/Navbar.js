import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
// import Home from "./Home";
// import About from "./About";
// import Contact from "./Contact";
// import Skills from "./Skills";
// import Work from "./Work";
import "./NavbarStyles.css"


class Navbar extends Component {
state={clicked: false}
handleClick = () => {
    this.setState({clicked: 
        !this.state.clicked})
}
render(){

    return (
        <section className="navbar">
            <BrowserRouter>
            <div className="navbar-links">
            <ul id="navbar" className={this.state.clicked ? "#navbar active": "#navbar"}>
    <li><a><Link to='#home' smooth>Home</Link></a></li>
    <li><a><Link to='#about' smooth>About</Link></a></li>
    <li><a><Link to='#skills' smooth>Skills</Link></a></li>
    <li><a><Link to='#work' smooth>Work</Link></a></li>
    <li><a><Link to='#contact' smooth>Contact</Link></a></li>
    </ul>
    </div>
    <div id="mobile" onClick={this.handleClick}>
        <i id="bar"
        className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
    </div>
    </BrowserRouter>
        </section>
    )
}
}

export default Navbar;