import React from 'react';



function Services() {

  return (
    <div className='P-S-H'>

      <div className='P-S-I'>
        <div className='P-S'>
          <img
          className='PS-img'
            src='./Pics/Kadins Home/K1.jpg'
            alt='img'
            style={{ width: '50%', height: '100%' }} />
        </div>
        <div className='P-S'>
          <h1>New Build's</h1>
          <div style={{ display: 'flex', width: '80%', textAlign: 'center' }}>
            We commence by delving into detailed consultations to grasp your vision and needs.
            From initial site assessments to collaborating with architects and engineers for
            meticulous planning, we handle all permitting and approvals seamlessly. During the
            construction phase, our expert team executes every aspect, from laying the foundation
            to finishing touches, ensuring top-notch quality and compliance. Prior to handover,
            rigorous inspections and client walkthroughs, guarantee satisfaction. Our
            comprehensive services encompass new residential and commercial construction,
            custom builds, aimed at delivering your dream build with precision and excellence.
          </div>
        </div>
      </div>


      <div className='P-S-I'>
        <div class='remodel'>
          <div className='remodel-P-S'>
            <h1>Remodel's</h1>
            <div style={{ display: 'flex', width: '80%', textAlign: 'center' }}>
              We begin with a detailed assessment and
              consultation to understand your goals. Collaborating closely with skilled
              architects, we create tailored plans within your budget. Managing permits,
              we handle everything from structural adjustments to interior upgrades like kitchens,
              bathrooms, flooring, and painting. Our aim is to ensure your vision comes to life
              with quality and attention to detail, delivering a stunning transformation for your
              existing space.
            </div>

          </div>
          <div className='remodel-P-S'>
            <img
              className='PS-img'
              src='./Pics/Bathroom Remodel/BR1.jpg'
              alt='img'
              style={{ width: '60%', height: '100%' }} />
          </div>
        </div>
      </div>

      <div className='P-S-I'>
        <div className='P-S'>
          <img
            className='PS-img'
            src='./Pics/Basement/Basement1.jpg'
            alt='img'
            style={{ width: '100%', height: '100%' }} />
        </div>
        <div className='P-S'>
          <h1>Basement's</h1>
          <div style={{ display: 'flex', width: '80%', textAlign: 'center' }}>
            Transforming basements into functional and inviting spaces is our expertise. Our
            process starts with a thorough assessment and consultation to understand your vision
            for the space. We craft customized plans that maximize the potential of your
            basement while staying within your budget. From framing and insulation to electrical
            and plumbing work, we handle every aspect of the finishing process. Our services
            encompass drywall installation, flooring, lighting, and creating tailored spaces
            such as home theaters, offices, or recreational areas. With a keen eye on quality,
            we ensure meticulous finishing touches throughout the project. Our goal is to turn
            your basement into a valuable extension of your home, providing comfort and
            functionality for your needs.
          </div>
        </div>
      </div>
    </div>

  );
}

export default Services; 