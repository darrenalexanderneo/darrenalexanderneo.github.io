import React, { useState } from "react";
type BlogCardType = {
  image: string;
  date: string;
  title: string;
  content: string;
};

const Card = (props: BlogCardType) => {
  const [modal, setModal] = useState<Boolean>(false);
  const toggleModal = () => setModal(!modal);
  return (
    <>
      <div className="box btn_shadow">
        <div className="img">
          <img src={props.image} alt="" onClick={toggleModal} />
        </div>
        <div className="category d_flex">
          <span onClick={toggleModal}>{props.date}</span>
        </div>
        <div className="title">
          <h2 onClick={toggleModal}>{props.title}</h2>
          <a href="#" className="arrow" onClick={toggleModal}>
            <i className="fas fa-arrow-right"></i>
          </a>
        </div>
      </div>

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content d_flex">
            <div className="modal-img left">
              <img src={props.image} alt="" />
            </div>
            <div className="modal-text right">
              <span>{props.date}</span>
              <h1>{props.title}</h1>
              <p>{props.content}</p>

              <button className="close-modal btn_shadow" onClick={toggleModal}>
                <i className="fas fa-times"></i>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Card;
