import React from "react";
import './HomeStyles.css';
import CTA from "./CTA";
import profile from "../../assets/profile.png";
import HeaderSocials from "./HeaderSocials";

const Home = () => {
    return (
        <section className="App-header" id= "home">
          <div className="container">
          <header>
            <div className="header-info">
            <h1 className="header-intro">Hey, nice to meet you!</h1>
              <h1 className="header-intro">I'm Anthony Harpestad</h1>
              <h1 className="header-intro">and I'm a fullstack developer</h1>
              <CTA />
              </div>
              <HeaderSocials />
                <img className="me" src={profile} alt="profile-pic" />
          </header>
          </div>
        </section>
    )
}

export default Home;