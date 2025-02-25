import Image from "next/image";
import Link from "next/link";
import React from "react";

import shape2 from '/public/images/banner/frame-1.png'
import shape1 from '/public/images/banner/greencard-bg.png'
import dImg2 from '/public/images/banner/img-4.png'
import dImg1 from '/public/images/banner/img-5.png'

import TimeCountDown from "../countdown";
import SectionTitle from "../SectionTitle/SectionTitle";



const DealOfDay = ({ products }) => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    };

    return (
        <section className="hot-deal-section style-2 separator-padding">
            <div className="container sortable-gallery">
                <div className="hot-deal-title">
                    <div className="row align-items-center">
                        <div className="col-lg-8">
                            <SectionTitle sTitle={'Offres du jour'} />
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
                        {products.length > 0 &&
                            products.slice(0, 4).map((product, pitem) => (
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
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-8">
                        <div className="category-banner">
                            <div className="offer-banner-item green-card">
                                <div className="text">
                                    <span>-10% OFF</span>
                                    <h2>{"Nouveau stéthoscope d'équipement médical 2024"}</h2>
                                    <p>I have been a loyal customer of this auto parts company for years.</p>
                                    <Link onClick={ClickHandler} href="/boutique" className="small-btn-style">Achetez maintenant</Link>
                                </div>
                                <div className="offer-image">
                                    <Image src={dImg1} alt=""/>
                                </div>
                                <div className="frame"><Image src={shape1} alt=""/></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="offer-banner-item yellow-banner">
                            <div className="offer-image">
                                <Image src={dImg2} alt=""/>
                            </div>
                            <div className="text">
                                <h4>Upto 25% Off</h4>
                                <h2>Hand <small>sanitizer</small></h2>
                                <p>I have been a loyal customer of this auto parts company for years.</p>
                                <Link onClick={ClickHandler} href="/boutique" className="small-btn-style primary">Achetez maintenant</Link>
                            </div>
                            <div className="frame"><Image src={shape2} alt=""/></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DealOfDay;
