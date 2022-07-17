import React from 'react'
import logo from '../images/pro.jpeg';

const about = () => {
  return (
    <>
       <section className="about" id="about">
        <div className="max-width">
            <h2 className="title">About me</h2>
            <div className="about-content">
                <div className="column left">
                <img src={logo} alt="logo"/>
                </div>
                <div className="column right">
                    <div className="text">I'm Ashish and I'm a <span className="typing-2"></span></div>
                    <p>Hy guys, I'm from Kalol, Gujarat. I'm currently 21 years old. I want to become a successful
                        Engineer in life. Currently I'm pursuing my 6th semester of engineering in Vishwakarma
                        Government Engineering College, Ahemdabad in Information and Technology branch. My hobbies are
                        to listen songs, watching movies, especially coding.</p>
                    <a href="https://drive.google.com/file/d/1prtalzcnAtkSrtq92TFPp8oUOVU_wkKC/view?usp=sharing" target="blank" >Download CV</a>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default about
