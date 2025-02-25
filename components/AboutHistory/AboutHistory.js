import Image from 'next/image';
import React from 'react'

import abImg from '/public/images/about/img-3.png'

import SectionTitle from '../SectionTitle/SectionTitle';


const AboutHistory = (props) => {

    return (
        <div className="about-history-section separator-padding pb-0">
            <div className="container">
                <div className="history-top">
                    <div className="row">
                        <div className="col-lg-8">
                            <SectionTitle sTitle={'NOTRE PARTENAIRE'} />
                        </div>
                    </div>
                </div>
                <div className="history-wrap">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="history-img">
                                <Image src={abImg} alt="" />
                            </div>
                        </div>
                        <div className="col-lg-7 offset-lg-1">
                            <div className="history-items">
                                <div className="history-item">
                                    <h3><i className="icon-medicine"></i>SITEC MEDICAL Co., Ltd</h3>
                                    <p className="text-justify">{"SITEC s'appuie sur 28 années d'expérience et d'expertise technologique dans la fabrication de systèmes à rayons X, se positionnant comme un leader industriel axé sur l'innovation. À mesure que le paysage des soins de santé évolue, de nouveaux défis deviennent impératifs. Grâce à la fusion stratégique avec le fabricant de détecteurs DRTECH, SITEC va de l’avant pour façonner l’avenir de l’imagerie numérique à rayons X. Le nouveau SITEC offre désormais une solution de diagnostic complète avec une intégration transparente, englobant non seulement le système mais également le détecteur et le logiciel, permettant ainsi de fournir des solutions d’imagerie par rayons X sur mesure et de qualité supérieure à leurprécieuse clientèle."}</p>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutHistory;