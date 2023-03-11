import React from "react";
import './AboutStyles.css'
import {GiAirplane} from "react-icons/gi";
import {IoAirplaneOutline} from "react-icons/io5";
import {RiComputerLine} from "react-icons/ri";

const About = () => {
    return (
          <section id="about">
            <div className="container">
              <div className="main-title">
                <h1 className="about-me">About Me</h1>
              </div>
                <div className="about-container">
                  <div className="left-about">
                    <div className="about-text">
                    <h2>Information About me</h2><br/><h3>After moving to Massachusetts to study to become an airline mechanic, I got a job at Nexair, a small avionics company, where I excelled and learned a lot. I then moved on to Bombardier, a larger private jet service center, to work as an avionics technician and became fascinated by the technology. I took online courses to learn to program and eventually became a student at General Assembly, starting a new chapter in my career.</h3>
                    </div>
                  </div>
                  <div className="right-about">
                    <div className="about-item">
                      <div className="abt-text">
                        <p className="large-text">90+</p>
                        <p className="small-text">projects <br /> Completed</p>
                    </div>
                  </div>
                  <div className="about-item">
                      <div className="abt-text">
                        <p className="large-text">8+</p>
                        <p className="small-text">programs <br /> Learned</p>
                    </div>
                  </div>
                  <div className="about-item">
                      <div className="abt-text">
                        <p className="large-text">70+</p>
                        <p className="small-text">hours <br /> A Week</p>
                    </div>
                  </div>
                  <div className="about-item">
                      <div className="abt-text">
                        <p className="large-text">1</p>
                        <p className="small-text">Dream <br /> Achieved</p>
                    </div>
                  </div>
                  </div>
                </div>
                <div className="container">
                <h2 className="timeline-title">My timeline</h2>
                <div className="container-timeline">
                <div className="timeline">
                  <div className="timeline-item">
                    <div className="tl-icon">
                      <i className=""><RiComputerLine /></i>
                    </div>
                    <h2 className="tl-duration">01/23 - present</h2>
                    <h2>Fullstack Developer - <span> - General Assembly</span></h2>
                    <h3>I learned practical skills in coding, design, and data through hands-on projects and collaboration with peers.</h3>
                  </div>
                </div>
                <div className="timeline">
                  <div className="timeline-item">
                    <div className="tl-icon">
                      <i className=""><IoAirplaneOutline /></i>
                    </div>
                    <h2 className="tl-duration">04/22 - 01/23</h2>
                    <h2>Avionics Technician - <span> - Bombardier</span></h2>
                    <h3>installation of new modules in preexisting aircraft using several schematics.</h3>
                  </div>
                </div>
                <div className="timeline">
                  <div className="timeline-item">
                    <div className="tl-icon">
                      <i className=""><GiAirplane /></i>
                    </div>
                    <h2 className="tl-duration">02/21 — 04/22</h2>
                    <h2>Avionics Technician - <span> - NexAir Avionics</span></h2>
                    <h3>Installation of new instruments using schematics and harness fabrication.</h3>
                  </div>
                </div>
                </div>
                </div>
                </div>
        </section>
    )
}

export default About;