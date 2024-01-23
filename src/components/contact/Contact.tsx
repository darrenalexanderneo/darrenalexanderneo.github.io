import React from "react";
import logo from "../../images/contact1.png";
import "./Contact.css"

const Contact = () => {
  return (
    <section className="Contact" id="contact">
      <div className="container top">
        <div className="heading text-center">
          <h4>CONTACT</h4>
          <h1>Contact With Me</h1>
        </div>
        <div className="content d_flex">
          <div className="left">
            <div className="box box_shodow">
              <div className="img">
                <img src={logo} alt="" />
              </div>
              <div className="details">
                <h1>Nevine Acotanza</h1>
                <p>Chief Operating Officer</p>
                <p>
                  I am available for freelance work. Connect with me via and
                  call in to my account.
                </p>{" "}
                <br />
                <p>Phone: +01234567890</p>
                <p>Email: admin@example.com</p> <br />
                <span>FIND WITH ME</span>
                <div className="button f_flex">
                  <button className="btn_shadow">
                    <i className="fab fa-facebook-f"></i>
                  </button>
                  <button className="btn_shadow">
                    <i className="fab fa-instagram"></i>
                  </button>
                  <button className="btn_shadow">
                    <i className="fab fa-twitter"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
