import React from "react";

const fot = () => {
  const image = [
    { url: "https://www.facebook.com/", i: "fab fa-facebook-f" },
    { url: "https://github.com/ashishleuva2002/", i: "fab fa-github" },
    {
      url: "https://www.instagram.com/ashish_leuva_2002/",
      i: "fab fa-instagram",
    },
    {
      url: "https://www.linkedin.com/in/ashish-leuva-388b931aa/",
      i: "fab fa-linkedin",
    },
  ];
  return (
    <>
      <footer style={{ overflow: "hidde" }}>
        <span>
          Created By <a href="#home">Ashish Leuva</a> |{" "}
          <span class="far fa-copyright"></span> 2021 All rights reserved.
        </span>
        <div class="social">
          <ul>
            {image.map((cur) => {
              return (
                <li>
                  <a href={cur.url} target="blank">
                    <i class={cur.i} style={{ color: "blue" }}></i>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </footer>
    </>
  );
};

export default fot;
