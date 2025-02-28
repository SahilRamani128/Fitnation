import React, { useRef } from 'react'
import './JoinUs.css'
import emailjs from '@emailjs/browser'

const JoinUs = () => {

  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_ecurtox', 'template_5z9u9wn', form.current, {
        publicKey: 'TyvqYIHJ4_XhaXfBy',
      })
      .then((result) => {
          console.log('SUCCESS!');
        }, (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div className='Join' id='join-us'>
        <div class="left-join">
          <hr />
          <div>
            <span className='stroke-text'>READY TO </span>
            <span>LEVEL UP</span>
          </div>
          <div>
            <span>YOUR BODY </span>
            <span className='stroke-text'>WITH US?</span>
          </div>
        </div>
        <div className="right-join">
          <form ref={form} className="email-container" onSubmit={sendEmail}>
            <input type="email" name='user_email' placeholder='Enter Your Email Address'/>
            <button className='btn btn-join'>Join Now</button>
          </form>
        </div>
    </div>
  )
}

export default JoinUs