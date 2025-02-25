import React from 'react'
import Link from 'next/link'
import erimg from '/public/images/cta/man.png'
import erimg2 from '/public/images/cta/hand.png'
import erimg3 from '/public/images/cta/animate-shape.png'
import Image from 'next/image'


const CtaBannerS4 = (props) => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <section className="cta-banner-section-s2 separator-padding">
            <div className="container">
                <div className="cta-banner-wrap">
                    <div className="row align-items-center">
                        <div className="col-lg-7 col-md-12 offset-lg-2">
                            <div className="cta-banner-text">
                                <div className="small-heading-title">
                                    <span>100% Premium Quality</span>
                                    <h3>New Medical oxygen Meter 2024</h3>
                                    <p>I have been a loyal customer of this auto parts company for years</p>
                                    <Link onClick={ClickHandler} href="/boutique" className="small-btn-style">Achetez maintenant</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="cta-banner-img">
                <Image src={erimg} alt="" />
            </div>
            <div className="hand-img">
                <Image src={erimg2} alt="" />
            </div>
            <div className="animate-shape">
                <Image src={erimg3} alt="" />
            </div>
        </section>
    )
}

export default CtaBannerS4;