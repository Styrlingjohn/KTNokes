import React from "react";
import Slider from '../adds/Slider';




function Home() {




  const Style = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: '5%',
    paddingTop: '5%',
  
  };


  return (
    <div className='S-H-1'>

      <Slider />

      <br />

      <section className='Home-G-L' style={Style}>
        <h1>Guaranteed Customer Satisfaction</h1>
        <div style={{ width: '75%', display:'flex', textAlign:'center', opacity: '.8' }}>
          I have had multiple areas of my house remodeled by KT Nokes and have loved his work.
          Kadin is responsive, friendly, organized and really knows his stuff!  I was pleasantly
          surprised that my detached garage was completed so quickly.  He's got really good crews who
          do great work.  I would highly recommend  this company to anyone for small or large jobs.
          <br />
          -Racquel Augat
        </div>
      </section>


    </div>

  );
}

export default Home; 