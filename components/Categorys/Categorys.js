import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Link from 'next/link'
import React from 'react';
import Slider from "react-slick";

import { urlForImage } from '../../lib/sanity.image'

const Categorys3 = ({ categories = [] }) => {
    const settings = {
        dots: false,
        arrows: false,
        speed: 1000,
        slidesToShow: 2,  // default for mobile
        slidesToScroll: 1,
        autoplay: true,
        responsive: [
            {
                breakpoint: 10000, // large screens
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 2,
                }
            }
        ]
    };

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <section className="featured-section style-3">
            <div className="container-fluid px-4">
                <div className="featured-category-slider items-center featured-category-slider-active">
                    <Slider {...settings}>
                        {
                            categories.map((category, index) => (
                                <div className="featured-item" key={index}>
                                    <div className="mr-1">
                                        <img 
                                            src={urlForImage(category.picture).url()} 
                                            alt={category.name || "Category Image"} 
                                            className="w-24 h-12 md:w-16 md:h-16 rounded-full object-cover mx-auto"
                                        />
                                    </div>
                                    <div className="text">
                                        <h2 className="text-sm md:text-base"><Link onClick={ClickHandler} href={'/shop'}>{category.name}</Link></h2>
                                        <span className="text-xs md:text-sm">{category.id} Product</span>
                                    </div>
                                </div>
                            ))
                        }
                    </Slider>
                </div>
            </div>
        </section>
    );
}

export default Categorys3;