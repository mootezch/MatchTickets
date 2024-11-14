import React from 'react'
import '../../styles/testimonial.css'
import { Swiper, SwiperSlide } from "swiper/react";

//Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";


// import required modules
import { EffectCards } from "swiper";
import avatar01 from '../../assets/img/ca2.png'
import avatar02 from '../../assets/img/ca.jpg'
import avatar03 from '../../assets/img/ETOILE-SAHEL_LOGO-1024x425.jpg'


export default function Testimonial() {
  return (
    <>
      <section>
        <div className="container sliders">

            <h2 className="section__title">PRODUITS</h2>
        <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        <SwiperSlide>
            <div className="slide__item">
                <div className="slide__img-01">
                <img src={avatar03} alt="" /></div>
                 

                <h4>Jessica Fernandes</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                Dolore iusto iste suscipit asperiores corporis maxime incidunt 
                similique cupiditate assumenda numquam, 
                cum molestias debitis necessitatibus minus quia sunt dignissimos modi est?</p>
                </div>
        </SwiperSlide>


        <SwiperSlide><div className="slide__item">
                <div className="slide__img-02">
                <img src={avatar01} alt="" /></div>
                 

                <h4>Jessica Fernandes</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                Dolore iusto iste suscipit asperiores corporis maxime incidunt
                similique cupiditate assumenda numquam, 
                cum molestias debitis necessitatibus minus quia sunt dignissimos modi est?</p>
                </div>
                </SwiperSlide>


        <SwiperSlide><div className="slide__item">
                <div className="slide__img-03">
                <img src={avatar02} alt="" /></div>
                 

                <h4>Jessica Fernandes</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                Dolore iusto iste suscipit asperiores corporis maxime incidunt 
                similique cupiditate assumenda numquam, 
                cum molestias debitis necessitatibus minus quia sunt dignissimos modi est?</p>
                </div>
                </SwiperSlide>
    
      </Swiper>
        </div>
      </section>
    </>
  );
}