import React from "react";
import "./Home.css";
import hero from "../../images/hero3.png";
import skill1 from "../../images/skill1.png";
import skill2 from "../../images/skill2.png";
import skill3 from "../../images/skill3.png";
import { Typewriter } from "react-simple-typewriter";
import Features from "../features/Features";
import Contact from "../contact/Contact";

const Home = () => {
  return (
    <>
      <section className="hero" id="home">
        <div className="center-container f_flex top">
          <div className="top">
            <h3>Hello World!</h3>
            <h1>
              My name is <span>Darren Neo</span>, I'm a
            </h1>
            <h2>
              <span>
                <Typewriter
                  words={[" Software Engineer.", " Coffee-addict.", " Tech-Enthusiast."]}
                  loop
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </h2>

            <p>
              I'm currently a software engineer at Credit Suisse/UBS, where I
              specialize in developing and enhancing backend systems and
              infrastructure. My focus revolves around refining a in-house
              trading system, optimizing order management processes, and
              facilitating seamless securities executions.
            </p>

            <div className="hero_btn d_flex">
              <div className="col_1">
                <h4>Reach out to me!</h4>
                <div className="button">
                  <button className="btn_shadow">
                    <a href="" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                  </button>
                  <button className="btn_shadow">
                    <a href="https://github.com/darrenalexanderneo" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-github"></i>
                    </a>
                  </button>
                  <button className="btn_shadow">
                    <a href="https://www.linkedin.com/in/darren-neo-yong-yi/" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                  </button>
                </div>
              </div>
              <div className="col_1"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
