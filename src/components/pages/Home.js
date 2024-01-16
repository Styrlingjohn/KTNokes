import React from "react";
import Slider from '../adds/Slider';




function Home() {




  const Style = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: '3%',
    paddingTop: '5%',
    marginTop: '5%'

  };


  return (
    <div className='S-H-1'>

      <Slider />

      <section className='Home-G-L' style={Style}>
        <h1>Guaranteed Customer Satisfaction</h1>
        <div style={{ width: '75%', display: 'flex', textAlign: 'center', opacity: '.8', }}>
          I have had multiple areas of my house remodeled by KT Nokes and have loved his work.
          Kadin is responsive, friendly, organized and really knows his stuff!  I was pleasantly
          surprised that my detached garage was completed so quickly.  He's got really good crews who
          do great work.  I would highly recommend  this company to anyone for small or large jobs.
          <br />
          -Racquel Augat
        </div>
        <br />
        <a className="btn btn-primary" href="https://g.co/kgs/Htcfg9"> Reviews </a>

      </section>
    </div>

  );
}

export default Home; 