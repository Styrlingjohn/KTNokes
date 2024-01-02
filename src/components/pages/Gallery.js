import React from 'react';



function Gallery() {


  return (
    <div className='container-fluid'>
      <h1 style={{ textDecoration: 'underline', display: 'flex', justifyContent: 'center' }}> Photo Gallery </h1>
      <br />

      <div className='row'>

        <section className='col-md-6' >

          <h1 className='text-center'>Basement's</h1>

          <img
            src='./Pics/Basement/Basement1.jpg'
            className='w-100 img-fluid'
            alt='BGallery'
          >
          </img>
        </section>
        <section className='col-md-6'>
          <h1 className=' text-center'> New Construction </h1>
          <img
            src='./Pics/Framing/F1.jpg'
            className='w-100 img-fluid'
            alt='New'
          >
          </img>
        </section>

      </div>


      <br />

      <div className='row'>

        <section className='col-md-6'>
          <h1 className=' text-center'> Addition's</h1>
          <img
            src='./Pics/Garage/Garage4.jpg'
            className='w-100 img-fluid'
            alt='garage'
          >
          </img>
        </section>


        <section className='col-md-6'>
          <h1 className=' text-center'> Remodel's </h1>
          <img
            src='./Pics/Bathroom Remodel/BR1.jpg'
            className='w-100 img-fluid'
            alt='Remodel'
          >
          </img>
        </section>
      </div>
    </div>
  );
}

export default Gallery; 