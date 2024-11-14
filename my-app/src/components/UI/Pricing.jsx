
import React from 'react'
import '../../styles/pricing.css'

const Pricing = () => {
  return (
  <section id='pricing-plan'>
    <div className='container'>
    <div className="pricing__top">
        <h2 className="section__title"> 
        Abonnements <span className="highlights"> Saison</span> <br></br> 2022 - 2023
        </h2>
        <p> 
        Lorem ipsum dolor sit amet consectetur adipisicing <br /> elit. 
        Natus tenetur reprehenderit ex consequatur iusto iure.
        </p>
    </div>

    { /*======== pricing wrapper ========*/}
    <div className='pricing__wrapper'>
        <div className="pricing__item" data-aos='fade-up'
            data-aos-duration='1500'>
            <div className="pricing__card-top">
                <h2 className='section__title'>Regular Member</h2>
                <h2 className='pricing section__title'>200Dt <span>/3 months</span> </h2>

            </div>

            <div className="services">
                <ul>
                    <li><span><i class="ri-checkbox-blank-circle-fill"></i></span>Unlimited access to the gym</li>
                    <li><span><i class="ri-checkbox-blank-circle-fill"></i></span>Customer support</li>
                    <li><span><i class="ri-checkbox-blank-circle-fill"></i></span>Personel Trainer</li>
                    <li><span><i class="ri-checkbox-blank-circle-fill"></i></span>Standart options</li>
                    <li><span><i class="ri-checkbox-blank-circle-fill"></i></span>Classes per week</li>
                </ul>

                <button className='register__btn'>Join Now</button>
            </div>
        </div>

        <div className="pricing__item pricing__item-02" data-aos='fade-up'
            data-aos-duration='1800'>
            <div className="pricing__card-top">
                <h2 className='section__title'>Premium Member</h2>
                <h2 className='pricing section__title'>1200 Dt <span>/1 year</span> </h2>

            </div>

            <div className="services">
                <ul>
                    <li><span><i class="ri-checkbox-blank-circle-fill"></i></span>Unlimited access to the gym</li>
                    <li><span><i class="ri-checkbox-blank-circle-fill"></i></span>Customer support</li>
                    <li><span><i class="ri-checkbox-blank-circle-fill"></i></span>Personel Trainer</li>
                    <li><span><i class="ri-checkbox-blank-circle-fill"></i></span>Standart options</li>
                    <li><span><i class="ri-checkbox-blank-circle-fill"></i></span>Classes per week</li>
                </ul>

                <button className='register__btn'>Join Now</button>
            </div>
        </div>

        <div className="pricing__item" data-aos='fade-up'
            data-aos-duration='2000'>
            <div className="pricing__card-top">
                <h2 className='section__title'>Standard Member</h2>
                <h2 className='pricing section__title'>600 Dt <span>/5 months</span> </h2>

            </div>

            <div className="services">
                <ul>
                    <li><span><i class="ri-checkbox-blank-circle-fill"></i></span>Unlimited access to the gym</li>
                    <li><span><i class="ri-checkbox-blank-circle-fill"></i></span>Customer support</li>
                    <li><span><i class="ri-checkbox-blank-circle-fill"></i></span>Personel Trainer</li>
                    <li><span><i class="ri-checkbox-blank-circle-fill"></i></span>Standart options</li>
                    <li><span><i class="ri-checkbox-blank-circle-fill"></i></span>Classes per week</li>
                </ul>

                <button className='register__btn'>Join Now</button>
            </div>
            
        </div>
        
                

    </div>
    </div>
  </section>
  );
}

export default Pricing