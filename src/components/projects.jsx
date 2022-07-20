import React from "react";

const projects = () => {
  let pro = [
      {
      name: "Project 1",
      pra: "Hotel Management System was written in C . It adapted to provide us reserving rooms, book an event, check the features etc.",
      i2: "fa-thin fa-c",
    }, 
    {
      name: "Project 2",
      pra: "Chatbot is doing Automate customer service of restaurants . It is created in python using nltk and show in form of website using flask",
      i2: "fa-brands fa-python",
    },
     {
      name: "Project 3",
      pra: "Portfolio website is created using ReactJS. Also used MDB for responsive design, Some icon CDN link and Font-Awesome Icon To feel interactive.",
      i1: "fa-brands fa-react",
      i2: "fa-brands fa-mdb",
      i3: "fa-regular fa-font-awesome",
    },  
    {
      name: "Project 4",
      pra: "React api call project using github api. It show user profile name and profile photo , repositary email and address",
      i1: "fa-brands fa-react",
      i2: "fa-brands fa-github",
 
    },  
    {
      name: "Project 5",
      pra: "It is develoed using react js with state. In this  press any 3 button out of 9 button  which sum is greater than 10 to win the game.",
      i2: "fa-brands fa-react",
    
    }, 
    {
      name: "Project 6",
      pra: "TO-Do list is website that can store daily task list.This project is created using NodeJS, ExpressJS for rounthing ,Mongodb for database & Bootstrap-5.",
      i1: "fa-brands fa-bootstrap",
      i2: "fa-solid fa-database",
      i3: "fa-brands fa-node",
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
