import React from "react";
import { BrowserRouter } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Skills from "./Skills";
import Work from "./Work";

const Navbar = () => {
    return (
        <section className="App-header" id= "Navbar">
            <BrowserRouter>
            <ul>
    <li><a><Link to='#home' smooth>Home</Link></a></li>
    <li><a><Link to='#about' smooth>About</Link></a></li>
    <li><a><Link to='#skills' smooth>Skills</Link></a></li>
    <li><a><Link to='#work' smooth>Work</Link></a></li>
    <li><a><Link to='#contact' smooth>Contact</Link></a></li>
    </ul>
    </BrowserRouter>
        </section>
    )
}

export default Navbar;