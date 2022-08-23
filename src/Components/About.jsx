import React from 'react'
import './Abouts.css'
const About = () => {
    return (
        <div className="container flex" id='about' >



            <div className="header waypoint">
                ABOUT
            </div>
            <div className="header-bar waypoint" data-animation="slide-in-left" data-delay=".5s"></div>

            <div className="about-wrapper obj">
                <div className="flex g-10 about-wrapper-item ">
                    <i className="mdi mdi-speedometer"></i>
                    <h4>Develop User interfaces</h4>
                    <p> I like to code things from scratch, and enjoy bringing ideas to life in the browser </p>
                </div>

                <div className="flex g-10 about-wrapper-item ">
                    <i className="mdi mdi-cellphone-link"></i>
                    <h4>My Objective</h4>
                    <p>  Responsive websites built for an optimal user experience that achieves your business goals  </p>
                </div>
                <div className="flex g-10 about-wrapper-item ">
                    <i className="mdi mdi-lightbulb-outline"></i>
                    <h4>Intuitive</h4>
                    <p>  Strong preference for easy to use, intuitive UX/UI. User Friendly </p>
                </div>
                <div className="flex g-10 about-wrapper-item ">
                    <i className="mdi mdi mdi-rocket"></i>
                    <h4>Dynamic</h4>
                    <p>  Websites don't have to be static, I love making pages come to life.   </p>
                </div>

                


            </div>





        </div>
    )
}

export default About