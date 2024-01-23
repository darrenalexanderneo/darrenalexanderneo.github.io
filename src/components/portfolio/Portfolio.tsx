import React from "react";
import data from "./Portfolio-Api";
import Card from "./Card";
import "./Portfolio.css"

const Portfolio = () => {
  return (
    <>
      <section className="Portfolio top" id="portfolio">
        <div className="container">
          <div className="heading text-center ">
            <h4>Completed Projects</h4>
            <h1>My Portfolio</h1>
          </div>

          <div className="content grid">
            {data.map((value: any, index: number) => {
              return (
                <Card
                  key={index}
                  image={value.image}
                  category={value.category}
                  totalLike={value.totalLike}
                  title={value.title}
                  description={value.description}
                  link={value.link}
                />
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
