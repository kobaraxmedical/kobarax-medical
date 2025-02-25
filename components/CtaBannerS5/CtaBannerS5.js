import React from 'react'
import Link from 'next/link'
import erimg from '/public/images/cta/left-img6.png'
import Image from 'next/image'


const CtaBannerS5 = (props) => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <section className="cta-banner-section3 style-2 separator-padding">
            <div className="container">
                <div className="cta-banner-wrap">
                    <div className="cta-banner cta-banner-left">

                    </div>
                    <div className="cta-banner cta-banner-right">
                        <div className="cta-banner-img">
                            <Image src={erimg} alt=""/>
                        </div>
                        <div className="small-heading-title">
                            <h3>Lorem ipsum dolor sit amet</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            <Link onClick={ClickHandler} href="/boutique" className="small-btn-style">Achetez maintenant</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CtaBannerS5;