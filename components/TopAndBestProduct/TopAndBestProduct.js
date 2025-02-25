import React from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import sImg from '/public/images/best-selling/right-side-img.png'
import Image from "next/image";
import CoverImage from '../../components/CoverImage'



const TopAndBestProduct = ({ products }) => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    };

    const settings = {
        dots: false,
        arrows: true,
        speed: 1000,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: false,
        responsive: [{
            breakpoint: 1200,
            settings: {
                slidesToShow: 1,
                dots: true,
                arrows: false,
            }
        },
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 2,
                dots: true,

            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                dots: true,

            }
        },
        
        ]
    };

    return (
        <section className="best-seller-section separator-padding">
            <div className="container sortable-gallery">
                <div className="row">
                    <div className="col-xl-6 col-lg-6">
                        <div className="product-wrap">
                            <SectionTitle sTitle={'Meilleures ventes'} sClass={'heading-title-s3'} />
                            <div className="best-selling-active owl-carousel">
                                <Slider {...settings}>
                                    <div className="orizontal-product-item-wrap">
                                        {products.length > 0 &&
                                            products.slice(0, 3).map((product, pitem) => (
                                                <div className="horizontal-product-item" key={pitem}>
                                                    <div className="product-image">
                                                        <CoverImage slug={product.slug} title={product.title} image={product.proImg} priority />
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
                                                    </div>
                                                </div>
                                            ))}
                                    </div>
                                    <div className="horizontal-product-item-wrap">
                                        {products.length > 0 &&
                                            products.slice(3, 6).map((product, pitem) => (
                                                <div className="horizontal-product-item" key={pitem}>
                                                    <div className="product-image">
                                                        <CoverImage slug={product.slug} title={product.title} image={product.proImg} priority />
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
                                                    </div>
                                                </div>
                                            ))}
                                    </div>
                                    <div className="horizontal-product-item-wrap">
                                        {products.length > 0 &&
                                            products.slice(9, 12).map((product, pitem) => (
                                                <div className="horizontal-product-item" key={pitem}>
                                                    <div className="product-image">
                                                        <CoverImage slug={product.slug} title={product.title} image={product.proImg} priority />
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
                                                    </div>
                                                </div>
                                            ))}
                                    </div>
                                </Slider>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-6">
                        <div className="product-wrap">
                            <SectionTitle sTitle={'Top Produits'} sClass={'heading-title-s3'} />
                            <div className="top-selling">
                                <div className="orizontal-product-item-wrap">
                                    {products.length > 0 &&
                                        products.slice(6, 9).map((product, pitem) => (
                                            <div className="horizontal-product-item" key={pitem}>
                                                <div className="product-image">
                                                    <CoverImage slug={product.slug} title={product.title} image={product.proImg} priority />
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
                                                </div>
                                            </div>
                                        ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-5">
                        <div className="best-selling-right-sidebar">
                            <div className="right-sidebar-text">
                                <div className="small-heading-title">
                                    <span>Popular Healthcare</span>
                                    <h3>Eye Testing Machine</h3>
                                    <Link onClick={ClickHandler} href={"/boutique"} className="small-btn-style">Achetez maintenant</Link>
                                </div>
                            </div>
                            <div className="left-sidebar-img">
                                <Image src={sImg} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TopAndBestProduct;
