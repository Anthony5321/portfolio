import React from "react";
import './HomeStyles.css';
import CTA from "./CTA";
import profile from "../../assets/profile.png";
import HeaderSocials from "./HeaderSocials";

const Home = () => {
    return (
        <section className="App-header" id= "home">
          <header>
            <div>
              <h1>Hey, nice to meet you! I'm</h1>
              <h1>Anthony Harpestad</h1>
              <h5>Fullstack Developer</h5>
              <CTA />
              <HeaderSocials />
              <div className="me">
                <img src={profile} alt="profile-pic" />
              </div>
            </div>
          </header>
        </section>
    )
}

export default Home;