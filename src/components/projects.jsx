import React from "react";

const projects = () => {
  let pro = [
    {
      name: "Project 1",
      pra: "Chatbot is doing Automate customer service of restaurants . It is created in python using nltk and show in form of website using flask",
      i1: "fa-brands fa-html5",
      i2: "fa-brands fa-css3-alt",
      i3: "fa-brands fa-js",
    },
    {
      name: "Project 2",
      pra: "TO-Do list is website that can store daily task list.This project is created using NodeJS, ExpressJS ,Mongodb & Bootstrap-5.",
      i1: "fa-brands fa-bootstrap",
      i2: "fa-solid fa-database",
      i3: "fa-brands fa-node",
    },
    {
      name: "Project 3",
      pra: "Hotel Management System was written in c++. It adapted to provide us reserving rooms, book an event, check the features etc.",
      i1: "fa-thin fa-c",
      i2: "fa-thin fa-plus",
      i3: "fa-thin fa-plus",
    },
  ];
  return (
    <section className="project" id="project">
      <div className="max-width">
        <h2 className="title">Project</h2>
        <div className="serv-content">
          {pro.map((cur) => {
            return (
              <div className="card">
                <div className="box">
                  <div className="text">{cur.name}</div>
                  <p>{cur.pra}</p>
                  <i class={cur.i1}></i> &nbsp;&nbsp;
                  <i class={cur.i2}></i>&nbsp;&nbsp;
                  <i class={cur.i3}></i>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default projects;
