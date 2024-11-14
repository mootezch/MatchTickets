

import React from 'react'
import '../../styles/footer.css'
import logo from '../../assets/img/dumble.jpg'
import styled from "styled-components";


const Payment = styled.img`
width: 80%
`;

const Footer = () => {

    const year = new Date().getFullYear()
  return <footer className="footer" data-aos='fade-up'
  data-aos-duration='1800'>
    <div className="container">
    <div className="footer__wrapper">
    <div className="footer__box">

        
        

    <div className="logo">
                    <div className="logo__img">
                        <img src={logo} alt='' /></div>
                    <h2>JAM3ITI</h2>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>

        </div>

        <div className="footer__box">
            <h4 className="footer__title">Company</h4>

            <ul className="footer__links">
                <li>
                    <a href="#/">Our program</a>
                </li>
                <li>
                    <a href="#/">Our plan</a>
                    </li>
                <li>
                    <a href="#/">Become a member</a>
                </li>
                
            </ul>
            </div>  

            <div className="footer__box">
            <h4 className="footer__title">Quick Links</h4>
                    
            <ul className="footer__links">
                <li>
                    <a href="#/">About Us</a>
                </li>
                <li>
                    <a href="#/">Contact Us</a>
                    </li>
                <li>
                    <a href="#/">Support</a>
                </li>
                
            </ul>
            </div>  

            <div className="footer__box">
            <h4 className="footer__title">Quick Links</h4>

            <ul className="footer__links">
                <li>
                    <a href="#/">About Us</a>
                </li>
                <li>
                    <a href="#/">Contact Us</a>
                    </li>
                <li>
                    <a href="#/">Support</a>
                </li>

                <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
                
            </ul>
            </div> 
        </div>

         <p className='copyright'>
            Copyright - {year} developed by Mootez Chihi. All rights reserved.</p>
    </div>
  </footer>
};

export default Footer