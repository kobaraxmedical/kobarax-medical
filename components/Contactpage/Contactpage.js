import React from 'react';
import ContactForm from '../ContactFrom/ContactForm'
import icon1 from '/public/images/icon/pin.png'
import Image from 'next/image';


const Contactpage = () => {

    return (
        <section className="contact-page-wrap">
            <div className="contact-page-section separator-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7">
                            <div className="map">
                                <iframe title='map' 
                                src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d61722.425467771674!2d-16.968468697075973!3d14.788644133564969!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sAvenue%20Leopold%20Senghor%2C%20%20BP%2021000%20Thies%2C%20Senegal!5e0!3m2!1sen!2sjp!4v1733366201953!5m2!1sen!2sjp" 
                                allowfullscreen="" 
                                loading="lazy" 
                                referrerpolicy="no-referrer-when-downgrade"></iframe>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="contact-info">
                                <h2>Pourquoi choisir nos produits?</h2>
                                <p>Une Technologie Médicale De Pointe, Pour Un Plateau Médical À La Hauteur.</p>
                                <div className="contact-info-item mt-4">
                                    <h3>Thies, Senegal</h3>
                                    <p><i><Image src={icon1} alt="" /></i>KOBARAX MEDICAL SARL, 2B Immeuble PANORAMA, Cis Ecole Ibra Caty Ba, Escale Sud, Avenue Leopold Senghor,  BP 21000 Thies, Senegal.</p>
                                </div>
                                <div className="contact-info-item">
                                    <h3>Japon</h3>
                                    <p><i><Image src={icon1} alt="" /></i>KOBARAX MEDICAL</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="contact-page separator-padding">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-7">
                            <div className="contact-area-wrapper">
                                <div className="contact-form-area">
                                    <h2>CONTACTEZ-NOUS!</h2>
                                    <p>Veuillez renseigner les informations nécessaires.
                                    {"les champs marqués d'un (*)sont obligatoires."}</p>
                                   <ContactForm/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )

}

export default Contactpage;
