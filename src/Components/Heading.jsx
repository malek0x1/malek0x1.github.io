import React from 'react'
import './Heading.css'
import Typed from 'react-typed';

const Heading = () => {
    return (
        <div className='Heading' id="top">

            <div className="text">
                Hello, I'm <span className="highlight">   <Typed strings={['Malek Mneimneh']} typeSpeed={60} /></span>
                <br />
                I'm a Front-End web developer.
            </div>
            <div className="button page-link" dest="about">
                View my work
                <i className="mdi mdi-arrow-right"></i>
            </div>



            <div className="navbar">
            <a href="#top"> <i className="mdi mdi-home-outline"></i></a>
                <a href="#about"><i className="mdi mdi-information-outline"></i></a>
                <a href="#projects"><i className="mdi mdi-view-grid"></i></a>
                <a href="#contact"><i className="mdi mdi-email-outline"></i></a>
                <a href="https://github.com/malek0x1/" target="_blank"><i className="mdi mdi-github"></i></a>
            </div>
        </div>
    )
}

export default Heading