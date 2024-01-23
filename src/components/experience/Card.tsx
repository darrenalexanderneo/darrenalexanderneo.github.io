import React, { useState } from "react";

type ExperienceCardType = {
  title: string;
  year: string;
  rate: string;
  description: string[];
  company: string;
  image: string;
};
const Card = (props: ExperienceCardType) => {
  return (
    <>
      <div className="box btn_shadow">
        <div className="title_content d_flex">
          <div className="image-container">
            <div className="">
              <img src={props.image} />
            </div>
            <div className="title">
              <h2>{props.company}</h2>
              <h3>{props.title}</h3>
              <span>{props.year}</span>
            </div>
          </div>
        </div>
        <hr />
        <ul>
          {props.description.map((value: any, index: number) => {
            return <li> {value} </li>;
          })}
        </ul>
      </div>
    </>
  );
};

export default Card;
