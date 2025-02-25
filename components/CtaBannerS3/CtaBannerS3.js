import React from 'react'
import Link from 'next/link'
import erimg from '/public/images/cta/left-img4.png'
import erimg2 from '/public/images/cta/left-img5.png'
import Image from 'next/image'


const CtaBannerS3 = (props) => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <section className="cta-banner-section3">
            <div className="container">
                <div className="cta-banner-wrap">
                    <div className="cta-banner cta-banner-left">
                        <div className="cta-banner-img">
                            <Image src={erimg} alt="" />
                        </div>
                        <div className="small-heading-title">
                            <h3>Sale off 20%</h3>
                            <h5>On Sanitizers</h5>
                            <Link onClick={ClickHandler} href="/boutique" className="small-btn-style">Achetez maintenant</Link>
                        </div>
                    </div>
                    <div className="cta-banner cta-banner-right">
                        <div className="cta-banner-img">
                            <Image src={erimg2} alt="" />
                        </div>
                        <div className="small-heading-title">
                            <span>Nouveau</span>
                            <h3>When purchasing any CocoSoul product as a gift Parachute 100% coconut oil.</h3>
                            <Link onClick={ClickHandler} href="/boutique" className="small-btn-style">Achetez maintenant</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CtaBannerS3;