import React from "react";

const services = () => {
  let ser = [
    {
      cls: "fas fa-paint-brush",
      data: "Web Design",
      pra: "Currently I'm learning web designing so i'm not that pretty much comfortable with design part and styling but i do.",
    },
    {
      cls: "fa-solid fa-layer-group",
      data: "Web Development",
      pra: "I am a full stack software engineer skilled in MERN stack.I am familiar with HTML, CSS, JavaScript, NodeJS, React Js, MongoDB, SQL etc.",
    },
    {
      cls: "fas fa-code",
      data: "Apps Design",
      pra: "I  was provide a range of mobile application development services including  building cross-platform apps,designing user experience ",
    },
  ];

  return (
    <>
      <section className="services" id="services">
        <div className="max-width">
          <h2 className="title">My services</h2>
          <div className="serv-content">
            {ser.map((cur) => {
              return (
                <>
                  <div className="card">
                    <div className="box">
                      <i className={cur.cls}></i>
                      <div className="text">{cur.data}</div>
                      <p>{cur.pra} </p>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default services;
