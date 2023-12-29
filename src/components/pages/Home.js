import React from 'react';
import Slider from '../adds/Slider';



function Home() {


  const Style = { 
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '20vw',
};
  
  
  return (
    <div className='S-H-1'>

      <Slider />

      <br />

      <section className='Home-G-L' style={Style}>
        <a className='btn btn-primary btn-listing btn-cta' href='https://www.ktnokes.com/#about'>
        Kadin builds good homes
        </a>
      </section>

    </div>

  );
}

export default Home; 