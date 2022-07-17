import React from "react";

const nav = () => {
  let navbar=[{h:"#home",n:"Home"},{h:"#about",n:"About"},{h:"#skills",n:"Skills"},{h:"#services",n:"Services"},{h:"#contact",n:"Contact"}]
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark elegant-color-dark">
        <div className="container-fluid logo max-width">
          <a className="navbar-brand" href="/">
            Portfo<span>lio.</span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 menu">
              {navbar.map((cur)=>{
                return(
                  <>
                  <li className="nav-item">
                  <a  className="nav-link active menu-btn"   aria-current="page"   href={cur.h} >  {cur.n}  </a>
                  </li>
                  </>
                );
              })}
            
       
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default nav;
