import React from 'react'
import './testimonials.css'
import Avt from '../../assets/header-img.svg'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

const data = [
  {
    avatar: Avt,
    name: 'Jean DELACROIX',
    review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro, harum perspiciatis repellendus ullam labore cupiditate at vero sint dicta maiores nam nulla, vitae rem non voluptas libero possimus autem ea',
  },
  {
    avatar: Avt,
    name: 'Penelop CRUZ',
    review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro, harum perspiciatis repellendus ullam labore cupiditate at vero sint dicta maiores nam nulla, vitae rem non voluptas libero possimus autem ea',
  },
  {
    avatar: Avt,
    name: 'Gabin SHALL',
    review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro, harum perspiciatis repellendus ullam labore cupiditate at vero sint dicta maiores nam nulla, vitae rem non voluptas libero possimus autem ea',
  },
  {
    avatar: Avt,
    name: 'Sam DARTAGNAN',
    review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro, harum perspiciatis repellendus ullam labore cupiditate at vero sint dicta maiores nam nulla, vitae rem non voluptas libero possimus autem ea',
  },
];

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Retour des Clients</h5>
      <h2>Témoignages</h2>

      <Swiper 
       modules={[Pagination]}
       spaceBetween={50}
       slidesPerView={1}
       pagination={{ clickable: true }}
      className="container testimonials__container">
        {
          data.map(({avatar, name, review}, index) =>{
            return(
              <SwiperSlide key={index} className="testimonial">
                <div className="client__avatar">
                  <img src={Avt} alt={name}/>
                </div>
                <h5 className='client__name'>{name}</h5>
                <small className='client__review'>
                  {review}
                </small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials