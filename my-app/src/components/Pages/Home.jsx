import React from 'react';
import Exercices from '../UI/Exercices';
import Footer from '../UI/Footer';
import Header from '../UI/Header';
import Hero from '../UI/Hero';
import Pricing from '../UI/Pricing';
import Start from '../UI/Start';
import Testimonial from '../UI/Testimonial';


const Home = () => {
  return (
    <div>
      <Header />
    <Hero />
    
  
  <Start />
  <Exercices />
  
  <Pricing />
  <Testimonial />
  <Footer />
  
  
    </div>
  )
}

export default Home;