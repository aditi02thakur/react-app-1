import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import Footer from '../Footer';

function Home() {
  return (
    
    <>
    
    <div className='front' >
    <p className='texttt'> <br/>Web Design 
    <br/>Web Development
    &nbsp; 
    

    <img src='svgs/download.png' alt ='fronttt'/>
    <img src='svgs/download.png' alt ='frontt'/>
    <img src='svgs/download.png' alt ='front'/>
    <br/>
    <br/>by SB
    <br/>
    </p>
    </div>
      <HeroSection />
      <Cards />
      <Footer />
    </>
  );
}

export default Home;