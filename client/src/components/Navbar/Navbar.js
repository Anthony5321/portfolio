import React, { Component } from "react";
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
    <div className="navbar-links">
        <ul id="navbar" className={this.state.clicked ? "#navbar active": "#navbar"}>
            <li><a href="#">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#work">Work</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
    </div>
    <div id="mobile" onClick={this.handleClick}>
        <i id="bar"
        className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
    </div>
    </section>
    )
}
}

export default Navbar;