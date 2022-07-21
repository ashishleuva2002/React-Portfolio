import React from "react";

const skills = () => {
  const sk = [
    {
      id: "https://img.icons8.com/color/900/000000/html-5--v1.png",
      alt: "html",
    },
    {
      id: "https://img.icons8.com/color/900/000000/css3.png",
      alt: "css3",
    },
    {
      id: "https://img.icons8.com/color/900/000000/javascript--v1.png",
      alt: "Js",
    },
    {
      id: "https://img.icons8.com/color/900/000000/bootstrap.png",
      alt: "Bootstarp",
    },
    {
      id: "https://img.icons8.com/windows/900/000000/mdb.png",
      alt: "MDB",
    },
   
    {
      id: "https://img.icons8.com/color/900/000000/react-native.png",
      alt: "ReactJS",
    },
    {
      id: "https://img.icons8.com/color/900/000000/nextjs.png",
      alt: "NextJS",
    },
    {
      id: "https://img.icons8.com/material/900/000000/c-plus-plus.png",
      alt: "C+=",
    },
    {
      id: "https://img.icons8.com/metro/900/000000/c.png",
      alt: "C",
    },
    {
      id: "https://img.icons8.com/color/900/000000/java-coffee-cup-logo--v1.png",
      alt: "JAVA",
    },
    {
      id: "https://img.icons8.com/color/900/000000/python.png",
      alt: "Python",
    }, {
      id: "https://img.icons8.com/color/900/000000/nodejs.png",
      alt: "Nodejs",
    },
    {
      id: "https://img.icons8.com/color/900/000000/mongodb.png",
      alt: "MongoDB",
    },
    {
      id: "https://img.icons8.com/color/900/000000/git.png",
      alt: "Git",
    },
  ];
  return (
    <>
      <section className="skills" id="skills">
        <div className="max-width">
          <h2 className="title">My skills</h2>
          <div className="skills-content">
            <div className="column left">
              <div className="text">My creative skills & experiences.</div>
              <p>
                As i mentioned above that we are currently working on a project.
                <br />I was completed my intership in Vnurture Technologies.
              </p>
              <a href="#home">Read more</a>
            </div>
            <div className="column right">
              {sk.map((cur) => {
                return <img src={cur.id} width={"65px"} alt={cur.alt} />;
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default skills;
