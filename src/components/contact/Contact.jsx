import React from 'react'
import './contact.css'
import {AiOutlineMail} from 'react-icons/ai'
import {AiOutlineWhatsApp} from 'react-icons/ai'
import { RiLinkedinBoxFill } from "react-icons/ri";

import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_wasj2nb', 'template_vwfmast', form.current, 'SEwJUV8u6lmhBQFch')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset();
  };

  return (
    <section id='contact'>
       <h5>Juste en un clique</h5>
       <h2>Contactez moi</h2>

       <div className="container contact__container">
        <div className="contact__options">
        <article className="contact__option">
            <RiLinkedinBoxFill className='contact__option-icon'/>
            <h4>LinkedIn</h4>
            <h5>Joachim-Willy DEGBOE</h5>
            <a href="https://www.linkedin.com/in/joachim-degboe/" target="_blank">Voir mon profil</a>
          </article>
          <article className="contact__option">
            <AiOutlineMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>degboejoachim@gmail.com</h5>
            <a href="mailto:degboejoachim@gmail.com" target="_blank">Envoyer un message</a>
          </article>
          <article className="contact__option">
            <AiOutlineWhatsApp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>Joachim</h5>
            <a href="https://wa.me/33784839298" target="_blank">Envoyer un message</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder='Votre nom complet' required/>
          <input type="email" name="email" placeholder='Votre email' required/>
          <textarea name="message" rows="7" placeholder='Votre message' required></textarea>
          <button type="submit" className='btn btn-primary'>Envoyez le message</button>
        </form>
       </div>
    </section>
  )
}

export default Contact