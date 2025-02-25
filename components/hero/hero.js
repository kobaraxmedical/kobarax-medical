import React from "react";
import Link from 'next/link'
import hero1 from '/public/images/hero/ceiling-mounted.png'
import hero2 from '/public/images/hero/U-arm.png'
import shape from '/public/images/hero/shape.png'
import { Slide } from "react-awesome-reveal";
import Image from "next/image";

const Hero = () => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (

        <section className="static-hero">
            <div className="container-fluid">
                <div className="static-hero-wrap">
                    <div className="row">
                        <div className="col-lg-9">
                            <div className="static-hero-left">
                                <div className="row align-items-center">
                                    <div className="col-lg-8">
                                        <div className="hero-content">
                                            <Slide direction='up' triggerOnce={'false'}>
                                                <span>100% Premium Quality</span>
                                            </Slide>
                                            <Slide direction='up' triggerOnce={'false'}>
                                                <h2>DIGIRAD Ceiling</h2>
                                            </Slide>
                                            <Slide direction='up' triggerOnce={'false'}>
                                                <p>Type - Fixé au plafond</p>
                                            </Slide>
                                            <Slide direction='up' triggerOnce={'false'}>
                                                <Link onClick={ClickHandler} href="/boutique" className="btn-style-1">Ajouter au devis</Link>
                                            </Slide>
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <Slide direction='right' triggerOnce={'false'}>
                                            <div className="hero-img">
                                                <Image src={hero1} alt="" />
                                                <div className="save-wrap">
                                                    <div className="save-inner">
                                                        <p>Promotion 20%</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </Slide>
                                    </div>
                                </div>
                                <div className="blur-shape">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="586" height="586"
                                        viewBox="0 0 586 586" fill="none">
                                        <g filter="url(#filter0_f_98_52)">
                                            <circle cx="293" cy="293" r="75" fill="#1e6c92" />
                                        </g>
                                        <defs>
                                            <filter id="filter0_f_98_52" x="0.600006" y="0.600006" width="584.8"
                                                height="584.8" filterUnits="userSpaceOnUse"
                                                colorInterpolationFilters="sRGB">
                                                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix"
                                                    result="shape" />
                                                <feGaussianBlur stdDeviation="108.7"
                                                    result="effect1_foregroundBlur_98_52" />
                                            </filter>
                                        </defs>
                                    </svg>
                                </div>
                                <div className="p-shape">
                                    <Image src={shape} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col">
                            <div className="static-hero-right">
                                <div className="static-hero-right-text">
                                    <span>Type - Bras en U</span>
                                    <h4>DIGIRAD U-Arm</h4>
                                </div>
                                <div className="hero-img">
                                    <Slide direction='left' triggerOnce={'false'}>
                                        <Image src={hero2} alt="" />
                                    </Slide>
                                </div>
                                <div className="rate-wrap">
                                    <Slide direction='up' triggerOnce={'false'}>
                                        <Link onClick={ClickHandler} href="/boutique" className="btn-style-1">Ajouter au devis</Link>
                                    </Slide>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero;