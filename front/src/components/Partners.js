// src/Partners.js
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './partners.css';
import partner from '../images/codex.png'
import enchanting from '../images/logo2.png'

const Partners = () => {
    const settings = {
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        rtl: true,
        arrows: false,
    };

    const partners = [
        { id: 1, src: enchanting, alt: 'Partner 1' },
        { id: 1, src: partner, alt: 'Partner 1' },
        { id: 1, src: enchanting, alt: 'Partner 1' },
        { id: 1, src: partner, alt: 'Partner 1' },
        { id: 1, src: enchanting, alt: 'Partner 1' },
        { id: 1, src: partner, alt: 'Partner 1' },
    ];

    return (
        <div className="partners-section">
            <h2>Our Partners</h2>
            <Slider {...settings}>
                {partners.map((partner) => (
                    <div key={partner.id}>
                        <img src={partner.src} alt={partner.alt} />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Partners;
