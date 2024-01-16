import React from 'react';



function Gallery() {


  return (
    <div className='container-fluid'>
      <h1 style={{ textDecoration: 'underline', display: 'flex', justifyContent: 'center', color:'white' }}> PHOTO GALLERY </h1>
      <br />

      <div className='row'>

        <section className='Gal-Pics col-md-6' >

          <h1 className='text-center'>BASEMENTS</h1>
          <a href='/Basements'>
            <img
              src='./Pics/Basement/Basement1.jpg'
              className='w-100 img-fluid'
              alt='BGallery'
            >
            </img>
          </a>
        </section>
        
        <section className='Gal-Pics col-md-6'>
          <h1 className=' text-center'> NEW CONSTRUCTION </h1>
          <a href='/NewBuilds'><img
            src='./Pics/Framing/F1.jpg'
            className='w-100 img-fluid'
            alt='New'
          >
          </img>
          </a>
        </section>

      </div>


      <br />

      <div className='row'>

        <section className='Gal-Pics col-md-6'>
          <h1 className=' text-center'> ADDITIONS</h1>
          <a href='/Additions'>
            <img
              src='./Pics/Garage/Garage4.jpg'
              className='w-100 img-fluid'
              alt='garage'
            >
            </img>
          </a>
        </section>


        <section className='Gal-Pics col-md-6'>
          <h1 className=' text-center'> REMODELS </h1>
          <a href='/Remodels'>
            <img
              src='./Pics/Bathroom Remodel/BR1.jpg'
              className='w-100 img-fluid'
              alt='Remodel'
            >
            </img>
          </a>
        </section>
      </div>
    </div>
  );
}

export default Gallery; 