import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Basement1 from './Pics/Basement1.jpg';
import Basement2 from './Pics/Basement2.jpg';

import F2 from './Pics/F2.jpg';




const Slider = () => {
    return (
        <div className='carousel'>

            <Carousel fade data-bs-theme='dark'> 
                <Carousel.Item interval={5000}>
                    <img style={{
                        maxHeight: '90vh',
                        objectFit: 'contain'
                    }}
                        className='d-block w-100'
                        src={Basement1}
                        alt='first slide' />
                </Carousel.Item>
                <Carousel.Item interval={5000}>
                    <img style={{
                        maxHeight: '90vh',
                        objectFit: 'contain'
                    }}
                        className='d-block w-100'
                        src={Basement2}
                        alt='second slide' />
                </Carousel.Item>
                <Carousel.Item interval={5000}>
                    <img style={{
                        maxHeight: '90vh',
                        objectFit: 'contain'
                    }}
                        className='d-block w-100'
                        src={F2}
                        alt='third slide' />
                </Carousel.Item>
            
            </Carousel>
        </div>
    );
};

export default Slider;