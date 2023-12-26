
import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

const Slider = () => {


    return (
        <div>
            <Slide
                autoplay={true}
                onChange={function noRefCheck() { }}
                onStartChange={function noRefCheck() { }}
                duration={5000}
            >
                <div className="each-slide-effect">
                    <div
                        style={{
                            backgroundImage: 'url(./Logos/SubCode-logos.jpeg)'
                        }}
                    >
                    </div>
                </div>
           
            </Slide>
        </div>
    );
};

export default Slider;