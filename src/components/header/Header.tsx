import React, { useState } from "react";
import "./Header.css";
import logo from "../../images/logo.png";

const Header = () => {
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    header?.classList.toggle("active", window.scrollY > 100);
  });

  const [mobile, setMobile] = useState<Boolean>(false);
  return (
    <>
      <header className="header">
        <div className="container d_flex">
          {/* <div className="logo">
            <img src={logo} alt="" />
          // </div> */} <h2>© Darren Neo.</h2>

          <div className="navlink">
            <ul
              className={mobile ? "nav-links-mobile" : "link f_flex uppercase"}
              onClick={() => setMobile(false)}
            >
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#features">Features</a>
              </li>
              <li>
                <a href="#portfolio">Portfolio</a>
              </li>
              <li>
                <a href="#resume">Resume</a>
              </li>
            </ul>
            <button className="toggle" onClick={() => setMobile(!mobile)}>
              {mobile ? (
                <i className="fas fa-times close home-btn"></i>
              ) : (
                <i className="fas fa-bars open"></i>
              )}
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
