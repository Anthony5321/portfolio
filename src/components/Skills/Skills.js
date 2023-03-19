import React from "react";
import './SkillsStyles.css';
import { FaHtml5 } from "react-icons/fa";
import { DiCss3 } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { SiExpress } from "react-icons/si";
import { SiPostgresql } from "react-icons/si";
import { SiSequelize } from "react-icons/si";

const Skills = () => {
    return (
        <section id="languages">
            <div className="container">
                <h1 className="text-center">Languages &amp; Frameworks</h1>
                <div className="row">
                    <div className="col-lg-3 col-md-6 mt-4">
                        <div className="card-body">
                            <FaHtml5 className="skill-icon" />
                            <h4 className="card-title mt-3">HTML</h4>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 mt-4">
                        <div className="card-body">
                            <DiCss3 className="skill-icon" />
                            <h4 className="card-title mt-3">CSS</h4>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 mt-4">
                        <div className="card-body">
                            <IoLogoJavascript className="skill-icon" />
                            <h4 className="card-title mt-3">Javascript</h4>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 mt-4">
                        <div className="card-body">
                            <FaReact className="skill-icon" />
                            <h4 className="card-title mt-3">React</h4>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-3 col-md-6 mt-4">
                        <div className="card-body">
                            <DiMongodb className="skill-icon" />
                            <h4 className="card-title mt-3">MongoDB</h4>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 mt-4">
                        <div className="card-body">
                            <SiExpress className="skill-icon" />
                            <h4 className="card-title mt-3">Express</h4>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 mt-4">
                        <div className="card-body">
                            <SiPostgresql className="skill-icon" />
                            <h4 className="card-title mt-3">SQL</h4>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 mt-4">
                        <div className="card-body">
                            <SiSequelize className="skill-icon" />
                            <h4 className="card-title mt-3">Sequelize</h4>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills;