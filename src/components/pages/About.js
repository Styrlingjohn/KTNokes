import React from 'react';





function About() {

  return (
    <div className=' about-all container-fluid'>
      <div className=' A-C container-fluid'>
        <div className='A-C-1 container'>
          <img
            src='./Pics/Headshot.png'
            alt='headshot'
            style={{ width: '50%', height: '100%' }}></img>
        </div>


        <div className='A-C-1 container'>
          <h1>About KT Nokes Custom Homes</h1>
          <div className='Atext'>
            At KT Nokes Custom Homes, we're dedicated to bringing your construction dreams to life. With a
            commitment to quality and client satisfaction, our experienced team handles residential and commercial
            projects, ensuring precision and reliability in every aspect of construction. From renovations and
            basements to new builds, we focus on delivering excellence while prioritizing open communication and
            transparency throughout the process. With over 8 years of experience in new construction, trust KT Nokes
            Custom Homes for your construction needs and let's build your dreams together.
          </div>
        </div>
      </div>



      <div className='A-C-2'>
        <h1 style={{ color: 'white' }}>Our Core Values</h1>
        <div className='core'>
          <div className='core-H'>
            <div className='C-text'>
              <h5>Quality</h5>
              We take immense pride in our craftsmanship, ensuring that each project reflects
              the highest standards of quality and attention to detail.
            </div>
            <div className='c-Img-H rounded-circle bg-white'>
              <img
                style={{ width: '100%' }}
                src='./Pics/Icons/quality.png'
                alt='quality'
              />
            </div>
          </div>
          <div className='core-H'>
            <div className='C-text'>
              <h5>Open Communication</h5>
              We conduct business ethically, valuing transparency, fairness, and integrity in all our interactions.
            </div>
            <div className='c-Img-H rounded-circle bg-white'>
              <img
                style={{ width: '100%' }}
                src='./Pics/Icons/communication.png'
                alt='quality'
              />
            </div>
          </div>
          <div className='core-H'>
            <div className='C-text'>
              <h5>Customer satisfaction</h5>
              We excel by understanding needs, on-time and attentive feedback. Our aim is lasting relationships through
              exceptional service, setting us apart in construction.
            </div>
            <div className='c-Img-H rounded-circle bg-white'>
              <img
                style={{ width: '100%' }}
                src='./Pics/Icons/customer.png'
                alt='quality'
              />
            </div>
          </div>
        </div>
      </div>

    </div>

  );
}

export default About; 