import React from "react";
import './HomeStyles.css';
import CTA from "./CTA";
import us from "../../assets/us.jpg";
import HeaderSocials from "./HeaderSocials";

const Home = () => {
    return (
        <section className="App-header" id= "home">
          <header>
            <div>
              <h5>Hello I'm</h5>
              <h1>Anthony Harpestad</h1>
              <h5>Fullstack Developer</h5>
              <CTA />
              <HeaderSocials />
              <div className="me">
                <img src={us} alt="us" />
              </div>
            </div>
          </header>
        </section>
    )
}

export default Home;