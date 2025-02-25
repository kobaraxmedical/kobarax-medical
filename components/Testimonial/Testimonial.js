import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ts1 from '/public/images/testimonial/img-1.jpg'
import ts2 from '/public/images/testimonial/img-2.jpg'
import ts3 from '/public/images/testimonial/img-3.jpg'
import lImg from '/public/images/testimonial/left-img.png'
import Image from 'next/image';


const testimonial = [
    {
        id: '01',
        tImg: ts1,
        Des: "SITEC s'appuie sur 28 années d'expérience et d'expertise technologique dans la fabrication de systèmes à rayons X, se positionnant comme un leader industriel axé sur l'innovation. À mesure que le paysage des soins de santé évolue, de nouveaux défis deviennent impératifs. Grâce à la fusion stratégique avec le fabricant de détecteurs DRTECH, SITEC va de l’avant pour façonner l’avenir de l’imagerie numérique à rayons X. Le nouveau SITEC offre désormais une solution de diagnostic complète avec une intégration transparente, englobant non seulement le système mais également le détecteur et le logiciel, permettant ainsi de fournir des solutions d’imagerie par rayons X sur mesure et de qualité supérieure à leurprécieuse clientèle.",
        Title: 'SITEC MEDICAL Co., Ltd',
        Sub: "NOTRE PARTENAIRE",
    },
    {
        id: '02',
        tImg: ts2,
        Des: "Transforming ideas into user-fProin efficitur, mauris vel condimentum pulvinar, velit orci consectetur ligula, eget egestas magna mi ut arcu. Phasellus nec odio orci. Nunc id massa ante. Suspendisse sit amet neque euismod, convallis quam eget, dignissim massa. Aliquam blandit risus purus.",
        Title: 'Robert Miller',
        Sub: "UX/UI Designer",
    },
    {
        id: '03',
        tImg: ts3,
        Des: "Transforming ideas into user-fProin efficitur, mauris vel condimentum pulvinar, velit orci consectetur ligula, eget egestas magna mi ut arcu. Phasellus nec odio orci. Nunc id massa ante. Suspendisse sit amet neque euismod, convallis quam eget, dignissim massa. Aliquam blandit risus purus.",
        Title: 'Ken William',
        Sub: "Programmer",
    }
]

const Testimonial = (props) => {

    const settings = {
        dots: false,
        arrows: false,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
    };


    return (
        <section className="testimonial-section separator-padding">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="testimonial-left-img">
                            <Image src={lImg} alt=""/>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="testimonial-items testimonial-active">
                            <Slider {...settings}>
                                {
                                    testimonial.map((tesmnl, tsm) => (
                                        <div className="testimonial-item" key={tsm}>
                                            <div className="testimonial-text">
                                                <p>“{tesmnl.Des}”</p>
                                                <div className="testimonial-text-btm">
                                                    <h3>{tesmnl.Title}</h3>
                                                    <span>{tesmnl.Sub}</span>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Testimonial;