import React from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';

const Feaures = [
    {
        id: '1',
        icon: 'icon-star', // Use an existing icon
        title: "Pièces de Rechange",
        des: "Nous vous fournissons rapidement les pièces de rechange d'origine nécessaires, pour une réparation sans compromis sur la qualité.",
    },
    {
        id: '2',
        icon: 'icon-user',
        title: "Maintenance et Réparations",
        des: "Notre équipe de techniciens qualifiés assure la maintenance et la réparation de vos équipements, avec des interventions rapides et efficaces.",
    },
    {
        id: '3',
        icon: 'icon-Path', // Use an existing icon
        title: "Assistance Technique",
         des: "Une question, un problème ? Notre service d'assistance technique est disponible pour vous accompagner et vous apporter des solutions personnalisées.",
    },
    {
        id: '4',
        icon: 'icon-calendar', // Use an existing icon
        title: "Mises à Jour et Évolutions",
         des: "Bénéficiez des dernières mises à jour et évolutions de vos produits, afin d'optimiser leurs performances et prolonger leur durée de vie.",
    }
]
const FeaturesSection = (props) => {

    return (
        <section className="features-section separator-padding">
            <div className="container px-8">
                <SectionTitle sTitle={'Comprenez ce pour quoi vous payez'} sClass={'heading-title-s2'} />
                <div className="features-wrap content-wrap">
                    <div className="row">
                        {
                            Feaures.map((feaures, cat) => (
                                <div className="col-lg-6 col-md-6 col-12" key={cat}>
                                    <div className="features-item">
                                        <div className="features-icon">
                                            <div className="icon">
                                                <i className={feaures.icon}></i>
                                            </div>
                                        </div>
                                        <div className="features-text">
                                            <h2>{feaures.title}</h2>
                                            <p>{feaures.des}</p>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    );
}

export default FeaturesSection;