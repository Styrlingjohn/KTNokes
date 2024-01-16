import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Basement1 from './Pics/Basement1.jpg';
import Basement2 from './Pics/Basement2.jpg';
import KRB1 from './Pics/KRB2.jpg';





const Slider = () => {
    return (
        <div className='carousel'>

            <Carousel data-bs-theme='dark'>
                <Carousel.Item interval={5000}>
                    <img style={{
                        maxHeight: '90vh',
                        objectFit: 'cover'
                    }}
                        className='d-block w-100'
                        src={Basement1}
                        alt='first slide' />

                </Carousel.Item>
                <Carousel.Item interval={5000}>
                    <img style={{
                        maxHeight: '90vh',
                        objectFit: 'cover'
                    }}
                        className='d-block w-100'
                        src={Basement2}
                        alt='second slide' />

                </Carousel.Item>
                <Carousel.Item >
                    <img style={{
                        maxHeight: '90vh',
                        objectFit: 'cover',
                    }}
                        className='d-block w-100'
                        src={KRB1}
                        alt='third slide' />

                </Carousel.Item>

            </Carousel>
            <div className='carousel-words'>
                <div >
                    Your local professional for Custom Homes,
                    <br />
                    Basement Finishing and Home Remodels
                </div>
            </div>
        </div>
    );
};

export default Slider;