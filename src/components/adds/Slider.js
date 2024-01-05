import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Basement1 from './Pics/Basement1.jpg';
import Basement2 from './Pics/Basement2.jpg';
import K1 from './Pics/K1.jpg';
import K2 from './Pics/Kadins Home/K2.jpg';
import K3 from './Pics/Kadins Home/K3.jpg';
import K4 from './Pics/Kadins Home/K4.jpg';
import K6 from './Pics/Kadins Home/K6.jpg';





const Slider = () => {
    return (
        <div className='carousel'>

            <Carousel  data-bs-theme='dark'> 
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
                        src={K6}
                        alt='third slide' />
                </Carousel.Item>
            
                <Carousel.Item >
                    <img style={{
                        maxHeight: '90vh',
                        width: '190vw',
                        objectFit: 'contain',
                    }}
                        className='d-block w-100'
                        src={K1}
                        alt='fourth slide' />
                </Carousel.Item>
            
                <Carousel.Item >
                    <img style={{
                        maxHeight: '90vh',
                        width: '190vw',
                        objectFit: 'contain',
                    }}
                        className='d-block w-100'
                        src={K2}
                        alt='fourth slide' />
                </Carousel.Item>
            
                <Carousel.Item >
                    <img style={{
                        maxHeight: '90vh',
                        width: '190vw',
                        objectFit: 'contain',
                    }}
                        className='d-block w-100'
                        src={K3}
                        alt='fourth slide' />
                </Carousel.Item>
            
                <Carousel.Item >
                    <img style={{
                        maxHeight: '90vh',
                        width: '190vw',
                        objectFit: 'contain',
                    }}
                        className='d-block w-100'
                        src={K4}
                        alt='fourth slide' />
                </Carousel.Item>
            
                <Carousel.Item >
                    <img style={{
                        maxHeight: '90vh',
                        width: '190vw',
                        objectFit: 'contain',
                    }}
                        className='d-block w-100'
                        src={K1}
                        alt='fourth slide' />
                </Carousel.Item>
            
            </Carousel>
        </div>
    );
};

export default Slider;