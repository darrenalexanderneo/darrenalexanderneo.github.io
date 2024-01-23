import React from "react";
import data from "./ExperienceApi";
import Card from "./Card";
import "./Experience.css";

const Experience = () => {
  return (
    <>
      <section className="Resume" id="resume">
        <div className="container top">
          <div className="heading text-center">
            <h4>Experience Level</h4>
            <h1>My Experiences</h1>
          </div>

          <div className="content-section mtop d_flex">
            <div className="">
              <div className="content">
                {data.map((value: any, index: number) => {
                  if (value.category === "experience") {
                    return (
                      <Card
                        key={index}
                        title={value.title}
                        year={value.year}
                        rate={value.rate}
                        description={value.desc}
                        company={value.company}
                        image={value.image}
                      />
                    );
                  }
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Experience;
