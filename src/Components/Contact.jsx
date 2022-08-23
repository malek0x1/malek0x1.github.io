import './Contact.css';
import emailjs from 'emailjs-com';
import React from 'react';
import { useRef } from 'react';




const Contact = () => {
    const form = useRef();







    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_y3eeni5', 'template_215j56j', form.current, 'jzM8xjUayRIecgnJR')
          .then((result) => {
              console.log(result.text);
              form.current.reset();
          }, (error) => {
              console.log(error.text);
          });
      };




    return (
        <div className="container flex" id="contact" >
            <div className="header waypoint" data-animation="slide-in-left">
                Contact Me
            </div>
            <div className="header-bar waypoint" data-animation="slide-in-left" data-delay=".5s"></div>
            <form onSubmit={sendEmail} ref={form} >
                <div className="form">
                    <input required={true} type="text" placeholder='Enter a your name' name="from_name" />
                    <input type="email" required={true} placeholder='Enter a valid email address' name="email" />
                    <textarea required={true} placeholder='Enter your message' name="message"></textarea>
                    <button className="btn custombtn">Submit</button>
                </div>
            </form>


        </div>
    )
}

export default Contact