import React, { useState } from "react";
type PortfolioCardType = {
  image: string;
  category: string;
  totalLike: string;
  title: string;
  description: string;
  link: string;
};

const Card = (props: PortfolioCardType) => {
  const [modal, setModal] = useState<Boolean>(false);
  const toggleModal = () => {
    setModal(!modal);
  };

  const handleClick = () => {
    // Navigate to the specified link when the button is clicked
    window.open(props.link, "_blank"); // Use "_blank" to open the link in a new tab
    // Or use the following for React Router navigation
    // history.push(props.link);
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  return (
    <>
      <div className="box btn_shadow">
        <div className="img">
          <img src={props.image} alt="" onClick={toggleModal} />
        </div>
        <div className="category d_flex">
          <span onClick={toggleModal}>{props.category}</span>
          {/* <label>
            <i className="far fa-heart"></i> {props.totalLike}
          </label> */}
        </div>
        <div className="title">
          <h2 onClick={toggleModal}>{props.title}</h2>
          <a href="#popup" className="arrow" onClick={toggleModal}>
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
              <h1>{props.title}</h1>
              <p>{props.description}</p>
              <div className="button f_flex mtop">
                {/* <button className='btn_shadow'>
                  LIKE THIS <i className='far fa-thumbs-up'></i>
                </button> */}
                <button className="btn_shadow" onClick={handleClick}>
                  VIEW PROJECT
                  <i className="fas fa-chevron-right"></i>
                </button>
              </div>
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
