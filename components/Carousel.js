import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

const Carousel = ({ data }) => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <div>
            <Slider {...settings}>
                {data.map(slide => (
                    <div key={slide.id}>
                        <div
                            className="carrousel_wrapper"
                            style={{ background: `url(/images/arts/${slide.name}) no-repeat` }}
                        >
                            <div>
                                {slide.title}
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default Carousel;