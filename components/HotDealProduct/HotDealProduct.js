import React from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import Link from "next/link";
import TimeCountDown from "../countdown";
import dImg1 from '/public/images/deal/deal-left2.png'
import dImg2 from '/public/images/deal/deal-left3.png'
import shape1 from '/public/images/deal/shape.png'
import shape2 from '/public/images/banner/blur-shape.png'
import Image from "next/image";



const HotDealProduct = ({ products }) => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    };

    return (
        <section className="hot-deal-section separator-padding pb-0">
            <div className="container sortable-gallery">
                <div className="hot-deal-title">
                    <div className="row align-items-center">
                        <div className="col-lg-8">
                            <SectionTitle sTitle={'The hot product for this week'} />
                        </div>
                        <div className="col-lg-4">
                            <div className="deal-countdown">
                                <TimeCountDown />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hot-deal-wrap">
                    <div className="row">
                        <div className="col-xl-5 col-lg-4 order-lg-1 order-2">
                            <div className="hot-deal-left">
                                <Image src={dImg1} alt="" />
                                <div className="inner-shape">
                                    <Image src={shape1} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 offset-xl-1 col-lg-8 order-lg-2 order-1">
                            <div className="hot-deal-right">
                                <div className="row">
                                    {products.length > 0 &&
                                        products.slice(0, 4).map((product, pitem) => (
                                            <div className="col-lg-6 col-md-6 col-12" key={pitem}>
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
                                </div>
                                <div className="offer-banner-item blue-card">
                                    <div className="offer-image">
                                        <Image src={dImg2} alt="" />
                                    </div>
                                    <div className="text">
                                        <span>-10% OFF</span>
                                        <h2>Hand <small>sanitizer</small></h2>
                                        <p>I have been a loyal customer.</p>
                                        <Link onClick={ClickHandler} href="/boutique" className="small-btn-style">Achetez maintenant</Link>
                                    </div>
                                    <div className="blur-shape"><Image src={shape2} alt="" /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HotDealProduct;
