import React from "react";

type CardType = {
  image: string;
  title: string;
  desc: string;
  frameworks: string;
};
const Card = (props: CardType) => {
  return (
    <>
      <div className="box btn_shadow">
        <img src={props.image} alt="" />
        <h2>{props.title}</h2>
        <p>{props.desc}</p>
        <br />
        <div>
          <p>
            <b> Language, Framework:</b> <br />
            {props.frameworks}
          </p>
        </div>
        <a href="/">
          <i className="fas fa-arrow-right"></i>
        </a>
      </div>
    </>
  );
};

export default Card;
