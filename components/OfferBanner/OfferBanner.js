import React from 'react'
import Link from 'next/link'
import { Slide } from "react-awesome-reveal";
import bImg1 from '/public/images/banner/img-1.png'
import bImg2 from '/public/images/banner/frame-1.png'
import bImg3 from '/public/images/banner/blur-shape.png'
import bImg4 from '/public/images/banner/img-2.png'
import bImg5 from '/public/images/banner/img-3.png'
import Image from 'next/image';


const OfferBanner = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }
    return (
        <section className="offer-banner-section separator-padding pt-0">
            <div className="container">
                <div className="offer-banner-wrap">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-12">
                            <Slide direction='up' triggerOnce={'false'}>
                                <div className="offer-banner-item blue-card">
                                    <div className="offer-image">
                                        <Image src={bImg1} alt="" />
                                    </div>
                                    <div className="text">
                                        <span>-10% OFF</span>
                                        <h2>Hand <small>sanitizer</small></h2>
                                        <p>I have been a loyal customer of this auto parts company for years.</p>
                                        <Link onClick={ClickHandler} href="/boutique" className="small-btn-style">Achetez maintenant</Link>
                                    </div>
                                    <div className="frame"><Image src={bImg2} alt="" /></div>
                                    <div className="blur-shape"><Image src={bImg3} alt="" /></div>
                                </div>
                            </Slide>
                        </div>
                        <div className="col-lg-4 col-md-6 col-12">
                            <Slide direction='up' triggerOnce={'false'}>
                                <div className="offer-banner-item yellow-banner">
                                    <div className="offer-image">
                                        <Image src={bImg4} alt="" />
                                    </div>
                                    <div className="text">
                                        <h4>Upto 25% Off</h4>
                                        <h2>Hand <small>sanitizer</small></h2>
                                        <p>I have been a loyal customer of this auto parts company for years.</p>
                                        <Link onClick={ClickHandler} href="/boutique" className="small-btn-style primary">Achetez maintenant</Link>
                                    </div>
                                    <div className="frame"><Image src={bImg2} alt="" /></div>
                                </div>
                            </Slide>
                        </div>
                        <div className="col-lg-4 col-md-6 col-12">
                            <Slide direction='up' triggerOnce={'false'}>

                                <div className="offer-banner-item red-banner">
                                    <div className="offer-image">
                                        <Image src={bImg5} alt="" />
                                    </div>
                                    <div className="text">
                                        <h4>Upto 25% Off</h4>
                                        <h2>Hand <small>sanitizer</small></h2>
                                        <p>I have been a loyal customer of this auto parts company for years.</p>
                                        <Link onClick={ClickHandler} href="/boutique" className="small-btn-style">Achetez maintenant</Link>
                                    </div>
                                    <div className="frame"><Image src={bImg2} alt="" /></div>
                                    <div className="blur-shape"><Image src={bImg3} alt="" /></div>
                                </div>
                            </Slide>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default OfferBanner;