import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import erimg from '/public/images/senegal-in-map.jpg';

const CtaBanner = (props) => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    };

    return (
        <section className={`cta-banner-section separator-padding ${props.ctaClass}`}>
            <div className="container">
                <div className="cta-banner-wrap">
                    <div className="row justify-content-center">
                        <div className="col-lg-3 col-md-5">
                            <div className="cta-banner-img">
                                <Image src={erimg} alt="Équipement Médical" />
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-6">
                            <div className="cta-banner-text">
                                <span>Pointe de vente</span>
                                <h3>{"Retrouvez notre sélection d'équipements médicaux de pointe."}</h3>
                                <Link onClick={ClickHandler} href="/contact" className="small-btn-style">Contactez-nous</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CtaBanner;