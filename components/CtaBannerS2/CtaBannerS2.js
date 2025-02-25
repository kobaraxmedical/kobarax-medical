import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import erimg from '/public/images/ct-scanner.webp';
import erimg2 from '/public/images/hemodialysis.webp';

const CtaBannerS2 = (props) => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    };

    return (
        <section className="cta-banner-section2 separator-padding mb-24">
            <div className="container">
                <div className="cta-banner-wrap">
                    <div className="cta-banner-left">
                        <div className="small-heading-title">
                            <span>Nouveauté</span>
                            <h3>{"Découvrez notre sélection d'équipements médicaux de pointe."}</h3>
                            <Link onClick={ClickHandler} href="/boutique" className="small-btn-style">Voir notre boutique</Link>
                        </div>
                        <div className="cta-banner-img">
                            <Image src={erimg} alt="Équipement Médical" width={200} height={200} />
                        </div>
                    </div>
                    <div className="cta-banner-right">
                        <div className="small-heading-title">
                            <span>Nouveauté</span>
                            <h3>Des solutions innovantes pour les professionnels de la santé.</h3>
                             <Link onClick={ClickHandler} href="/boutique" className="small-btn-style">Découvrir</Link>
                        </div>
                        <div className="cta-banner-img">
                           <Image src={erimg2} alt="Solutions Médicales" width={200} height={200} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CtaBannerS2;