import React from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const TopSellingProduct2 = ({ products}) => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    };

    const settings = {
        dots: false,
        arrows: true,
        speed: 2000,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: false,
        responsive: [{
            breakpoint: 1200,
            settings: {
                slidesToShow: 2,
            }
        }, {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                dots: true,

            }
        },
        {
            breakpoint: 575,
            settings: {
                slidesToShow: 1,
                dots: true,
                arrows: false,
            }
        },
        ]
    };


    return (
        <section className="best-seller-section separator-padding top-selling-section top-selling-s2">
            <div className="container sortable-gallery">
                <div className="row">
                    <div className="col-xl-12 col-lg-12 col-12">
                        <div className="product-wrap">
                            <SectionTitle sTitle={'Produits les plus vendus'} sClass={'heading-title-s3'} />
                            <div className="top-selling top-selling-active">
                                <Slider {...settings}>
                                    {products.length > 0 &&
                                        products.slice(0, 6).map((product, pitem) => (
                                            <div className="col-lg-3 col-md-6 col-12" key={pitem}>
                                                <div className="horizontal-product-item">
                                                    <div className="product-image">
                                                        <img src={product.proImg} alt="" />
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
                                                        <div className="price">
                                                            <span className="present-price">${product.price}</span>
                                                            <del className="old-price">${product.delPrice}</del>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                </Slider>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TopSellingProduct2;
