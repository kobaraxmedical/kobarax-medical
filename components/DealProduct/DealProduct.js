import React from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import Link from "next/link";
import { Tooltip } from 'react-tooltip'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TimeCountDown from "../countdown";

import CoverImage from '../../components/CoverImage'


const DealProduct = ({ products, addToCartProduct }) => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    };

    const settings = {
        dots: false,
        arrows: true,
        speed: 1000,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        responsive: [{
            breakpoint: 991,
            settings: {
                slidesToShow: 1,
                dots: true,

            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                dots: true,
                arrows: false,
            }
        },
        ]
    };

    return (
        <section className="deal-product-section">
            <div className="container sortable-gallery">
                <div className="deal-product-title">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <SectionTitle sTitle={'Promotion'} />
                        </div>
                        <div className="col-lg-6">
                            <div className="count-up">
                                <p>Get 50% off your first purchase </p>
                                 <TimeCountDown/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="deal-wrap">
                    <div className="deal-active">
                        <Slider {...settings}>
                            {products.length > 0 &&
                                products.slice(7, 10).map((product, pitem) => (
                                    <div className="deal-item" key={pitem}>
                                        <div className="">
                                            <CoverImage slug={product.slug} title={product.title} image={product.proImg} priority width={400} height={600} />
                                        </div>
                                        <div className="product-info">
                                            <h2><Link onClick={ClickHandler} href={'/product-single/[slug]'} as={`/product-single/${product.slug}`}>{product.title}</Link></h2>
                                            <div className="rating-product">
                                                <i className="icon-star"></i>
                                                <i className="icon-star"></i>
                                                <i className="icon-star"></i>
                                                <i className="icon-star"></i>
                                                <i className="icon-star gray"></i>
                                            </div>
                                            <p>I have been a loyal customer of this auto parts company for years .</p>
                                            <div className="progress">
                                                <div className="progress-bar" data-wow-duration="0.5s"
                                                    data-wow-delay=".3s" role="progressbar" aria-valuenow="66"
                                                    aria-valuemin="0" aria-valuemax="100" style={{ width: "60%" }}>
                                                </div>
                                            </div>
                                            <span>Sold : 4 / 66</span>
                                            <div className="price">
                                                <button
                                                    className="cart-btn"
                                                    data-tooltip-id="cart-tooltip" data-tooltip-content="add to cart"
                                                    data-tooltip-place="left"
                                                    onClick={() => addToCartProduct(product)}
                                                >
                                                    <i className="icon-cart"></i>
                                                </button>
                                                <Tooltip id="cart-tooltip" />
                                            </div>
                                        </div>
                                    </div>
                                ))}
                        </Slider>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DealProduct;
