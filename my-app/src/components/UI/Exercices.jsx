

import React from 'react'
import '../../styles/exercices.css'
import image2 from '../../assets/img/2.png'
import images from '../../assets/img/images.png'
import image3 from '../../assets/img/3.png'






const Exercices = () => {
  return (
  <section id='schedule'>
    <div className='container exercise__container'>
        <div className='exercise__top'>
            <h2 className='section__title'>
                Benefits of <span className='highlights'> JAM3ITI</span>

            </h2>

            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing <br /> elit. 
                Nisi fugit ea maxime, unde minima tempore.
            </p>

        </div>

        { /*========== exercise list ========*/}
        <div className="exercise__wrapper">
            <div className="exercise__item" data-aos='zoom-in'
            data-aos-duration='1500'>
            <span className='exercise__icon'> 
            <img src={images} alt='' />
                </span>    

                <div className="exercise__content">
                <h4>Trouvez vos billets</h4>
                <p>Comparez les tarifs des billets pour toutes les rencontres de
                    football dans plus de 16 clubs dans la ligue professionelle 1 
                    </p>
                </div>
            </div>


            <div className="exercise__item" data-aos='zoom-in'
            data-aos-duration='1500'>
            <span className='exercise__icon'> 
            <img src={image2} alt='' />
                </span>    

                <div className="exercise__content">
                <h4>Recevez vos billets</h4>
                <p>Les plateformes référencées sur notre site livrent vos billets à
                    temps pour le match, on a facilite l'entré au stade avec un code QR
                    </p>
                </div>
            </div>  


            <div className="exercise__item" data-aos='zoom-in'
            data-aos-duration='1500'>
            <span className='exercise__icon'> 
            <img src={image3} alt='' />
                </span>    

                <div className="exercise__content">
                <h4>Profitez du match</h4>
                <p>Rejoignez plus de 20,000 personnes satisfaites ayant déjà 
                    asisté à un match de foot grace à notre réseau. 
                    </p>
                </div>
            </div>  



        </div>
    </div>
  </section>
  );
}

export default Exercices