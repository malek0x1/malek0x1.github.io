import React, { useEffect } from 'react'
import './Projects.css'
import ScrollReveal from "scrollreveal";
import IMG1 from './assets/Admin-Dashboard7.png'
import IMG2 from './assets/Admin-Dashboard4.png'
import IMG3 from './assets/Admin-Dashboard5.png'
import IMG4 from './assets/Admin-Dashboard6.png'
import IMG5 from './assets/Admin-Dashboard3.png'
import IMG6 from './assets/login-form.png'
const Projects = () => {


  useEffect(() => {
    ScrollReveal().reveal('.container',{ duration: 600});
    // , { duration: 600, origin: "top", distance: "5.5em", delay: 0, easing: "ease" });

  }, []);
  return (
    <div className="container flex" id="projects" >
      <div className="header waypoint" data-animation="slide-in-left">
        Projects
      </div>
      <div className="header-bar waypoint" data-animation="slide-in-left" data-delay=".5s"></div>
      <div className="projects-wrapper">
        <div className="project-item">
          <img src={IMG1} alt="" />
          <div className="mask flex tac g-20" >
            <h3 style={{ paddingBottom: "25px" }}> Professional Crypto Dashboard (React)  </h3>
            <div className="flex row g-15">
              <a href="https://github.com/malek0x1/Admin-Dashboard7" target="_blank" ><button className="btn btn1" >Source Code</button></a>
              <a href="https://malek0x1.com/Admin-Dashboard7" target="_blank" ><button className="btn just">Visit Website</button></a>
            </div>
          </div>
        </div>
        <div className="project-item">
          <img src={IMG2} alt="" />
          <div className="mask flex tac g-20" >
            <h3 style={{ paddingBottom: "25px" }}> Professional Admin Dashboard (React & Rest Api)  </h3>
            <div className="flex row g-15">
              <a href="https://github.com/malek0x1/Admin-Dashboard4" target="_blank" ><button className="btn btn1" >Source Code</button></a>
              <a href="https://malek0x1.com/Admin-Dashboard4" target="_blank" ><button className="btn just">Visit Website</button></a>


            </div>
          </div>
        </div>
        <div className="project-item">
          <img src={IMG3} alt="" />
          <div className="mask flex tac g-20" >
            <h3 style={{ paddingBottom: "25px" }}> Cryptocurrency Dashboard 1 (React)  </h3>
            <div className="flex row g-15">
              <a href="https://github.com/malek0x1/Admin-Dashboard5" target="_blank" ><button className="btn btn1" >Source Code</button></a>
              <a href="https://malek0x1.com/Admin-Dashboard5" target="_blank" ><button className="btn just">Visit Website</button></a>


            </div>
          </div>
        </div>
        <div className="project-item">
          <img src={IMG4} alt="" />
          <div className="mask flex tac g-20" >
            <h3 style={{ paddingBottom: "25px" }}> Cryptocurrency Dashboard 2 (React)  </h3>
            <div className="flex row g-15">
              <a href="https://github.com/malek0x1/Admin-Dashboard6" target="_blank" ><button className="btn btn1" >Source Code</button></a>
              <a href="https://malek0x1.com/Admin-Dashboard6" target="_blank" ><button className="btn just">Visit Website</button></a>


            </div>
          </div>
        </div>
        <div className="project-item">
          <img src={IMG5} alt="" />
          <div className="mask flex tac g-20" >
            <h3 style={{ paddingBottom: "25px" }}> Professional Admin Dashboard (React & Rest Api)  </h3>
            <div className="flex row g-15">
              <a href="https://github.com/malek0x1/Admin-Dashboard3" target="_blank" ><button className="btn btn1" >Source Code</button></a>
              <a href="https://malek0x1.com/Admin-Dashboard3" target="_blank" ><button className="btn just">Visit Website</button></a>


            </div>
          </div>
        </div>
        <div className="project-item">
          <img src={IMG6} alt="" />
          <div className="mask flex tac g-20" >
            <h3 style={{ paddingBottom: "25px" }}> Login Form With with validation (React)  </h3>
            <div className="flex row g-15">
              <a href="https://github.com/malek0x1/login-form" target="_blank" ><button className="btn btn1" >Source Code</button></a>
              <a href="https://malek0x1.com/login-form" target="_blank" ><button className="btn just">Visit Website</button></a>


            </div>
          </div>
        </div>




      </div>
    </div>

  )
}

export default Projects