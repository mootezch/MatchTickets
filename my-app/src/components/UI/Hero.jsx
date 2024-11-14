


import React from 'react'
import  heroImg from '../../assets/img/stade3.jpg'
import dumbleIcon from '../../assets/img/dumble.png'
import '../../styles/Hero.css'

const Hero = () => {
  return (
  <section id='home'>
    <div className="container">
                        

        <div className="hero__wrapper">

            {/*======== hero content=====*/}
        <div className="hero__content">
            <h2 className='section__title' 
            data-aos='fade-up'
            data-aos-delay='100'
            data-aos-duration='1800'>
                 Vos billets pour <br /> toutes les 
                <span className='highlights'> Rencontres </span>
                <br /> De la Ligue Professionnelle 1</h2>
            <p data-aos='fade-up'
            data-aos-duration='1500'>
                Le lorem ipsum est, en imprimerie, <br />
                le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée. 
                </p>
            
            <div className='hero__btns' data-aos='fade-up'
            data-aos-delay='200'
            data-aos-duration='2000'>
                <button className='register__btn'>Get Started</button>
               
            </div>
            
            </div>    
            {/*=========hero img==========*/ }
        <div className="hero__img">
            <div className='hero__img-wrapper'>

            <div className="box-01">
                <div className="box-02">
                  <div className="box-03">
                    <div className="box__img">
                        <img src={heroImg} alt='' />
                    </div>
                    </div>  
                </div>
            </div>

            <div className="heart__rate" data-aos='fade-right'
                data-aos-duration='1500'>
                <h5>Take a breath</h5>
                <span><i class="ri-heart-pulse-fill"></i></span>
                <h5>The game is about to start</h5>
               </div>


               <div className="gym__location" data-aos='fade-left'
                data-aos-duration='1500'>

                <span><i class="ri-map-pin-2-fill"></i></span>
                <h5>
                    Find a place <br /> and enjoy the game
                    </h5>
               </div>


               <div className="double__icon" data-aos='fade-down'
                data-aos-duration='1500'>
                <img src={dumbleIcon} alt='' /> 
               </div>

            </div>
        </div>
        </div>
    </div>
  </section>
  );
}

export default Hero