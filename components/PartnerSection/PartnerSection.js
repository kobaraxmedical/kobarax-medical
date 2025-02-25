import React from "react";
import PropTypes from 'prop-types';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { urlForImage } from '../../lib/sanity.image';

const PartnerSection = (props) => {
    const settings = {
        dots: false,
        arrows: false,
        speed: 1000,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        responsive: [
            {
                breakpoint: 1500,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <section className={`partners-section ${props.pClass}`}>
            <div className="container">
                <div className="row">
                    <div className="col col-xs-12">
                        <div className="partner-grids partners-slider">
                            <Slider {...settings}>
                                {props?.partners?.map((partner, pitem) => (
                                    <div className="grid" key={partner?.proImg?.asset?._ref || pitem}>
                                        <Image 
                                            width={100} 
                                            height={100} 
                                            src={urlForImage(partner?.proImg?.asset?._ref).width(100).height(100).url()} 
                                            alt={partner.title || "Partner Image"} 
                                            className="mx-auto"
                                        />
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
PartnerSection.propTypes = {
    partners: PropTypes.arrayOf(PropTypes.shape({
        proImg: PropTypes.shape({
            asset: PropTypes.shape({
                _ref: PropTypes.string
            })
        }),
        title: PropTypes.string
    })),
    pClass: PropTypes.string
};

export default PartnerSection;