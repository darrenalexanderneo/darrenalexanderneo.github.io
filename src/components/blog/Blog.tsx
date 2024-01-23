import React from "react";
import data from "./BlogApi";
import Card from "./Card";
import "./Blog.css"

const Blog = () => {
  return (
    <>
      <section className="Portfolio Blog" id="blog">
        <div className="container top">
          <div className="heading text-center">
            <h4>Personal Blog</h4>
            <h1> My Blog </h1>
          </div>
          <div className="content grid">
            {data.map((value: any, index: number) => {
              return (
                <Card
                  key={index}
                  image={value.image}
                  date={value.date}
                  title={value.title}
                  content={value.content}
                />
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
