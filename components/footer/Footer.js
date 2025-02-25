import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import mail from '/public/images/icon/mail.png'
import Logo from '/public/images/logo.png'

const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const SubmitHandler = (e) => {
    e.preventDefault()
}

const FooterS2 = (props) => {
    return (
        <footer className="footer-section-s2">
            <div className="upper-footer">
                <div className="container">
                    <div className="row">
                        <div className="col col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="widget about-widget flex items-center">
                                <div className="widget-logo flex-shrink-0">
                                    <Image src={Logo} alt="KOBARAX MEDICAL" className="h-auto" />
                                </div>
                                <div className="ml-4 flex-grow">
                                    <h2 className="mb-2">KOBARAX MEDICAL</h2>
                                    <p>Une Technologie Médicale De Pointe, Pour Un Plateau Médical À La Hauteur.</p>
                                </div>
                            </div>
                            <div className="contact-ft">
                                <ul>
                                    <li><i><Image src={mail} alt="" /></i>Email:
                                        info@kobarax-medical.com</li>
                                    <li><i className="icon-contact"></i>Fix : +221-32-824-64-86 / 
                                    <br />
                                    Mobile: +221-78-897-30-14</li>
                                    <li><i className="icon-placeholder"></i> KOBARAX MEDICAL SARL, 2B Immeuble PANORAMA, Cis Ecole Ibra Caty Ba, Escale Sud, Avenue Leopold Senghor,  BP 21000 Thies, Senegal.
                                        </li>
                                    <li> <i className="icon-time"></i> {"Heures d'ouverture : 8h00 - 17h00, Lundi - Vendredi"}</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col col-lg-2 col-md-6 col-sm-12 col-12">
                            <div className="widget link-widget">
                                <div className="widget-title">
                                    <h3>Information</h3>
                                </div>
                                <ul>
                                    <li><Link onClick={ClickHandler} href="/boutique">Assemblage et Production</Link></li>
                                    <li><Link onClick={ClickHandler} href="/about">Qui sommes nous</Link></li>
                                    <li><Link onClick={ClickHandler} href="/checkout">Demander un devis</Link></li>
                                    <li><Link onClick={ClickHandler} href="/contact">Nous Contacter</Link></li>
                                    <li><Link onClick={ClickHandler} href="/contact">Sitemap</Link></li>
                                    <li><Link onClick={ClickHandler} href="/boutique">Produits et Services</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col col-xl-3  col-lg-3 col-md-6 col-sm-12 col-12">
                            <div className="widget link-widget custom">
                                <div className="widget-title">
                                    <h3>Nos Partenaires</h3>
                                </div>
                                <ul>
                                    <li><Link onClick={ClickHandler} target='_blank' href="https://www.kobarax.com">KOBARAX Co., Ltd</Link></li>
                                    <li><Link onClick={ClickHandler} target='_blank' href="http://en.sitec-med.com/">SITEC MEDICAL Co., Ltd</Link></li>
                                </ul>
                            </div>
                            <div className="widget link-widget custom">
                                <div className="widget-title">
                                    <h3>Liens utiles</h3>
                                </div>
                                <ul>
                                    <li><Link onClick={ClickHandler} href="/politique-de-confidentialite">Politique de confidentialité</Link></li>
                                    <li><Link onClick={ClickHandler} href="/termes-et-onditions-dutilisation">{"Termes et Conditions d'utilisation"}</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12">
                            <div className="widget subscribe">
                                <div className="widget-title">
                                    <h3>Newsletter</h3>
                                </div>
                                <p>Subscribe to our newsletter </p>
                                <form onSubmit={SubmitHandler}>
                                    <div className="form-field">
                                        <input type="email" placeholder="Entrer votre email" id="semail" required />
                                        <button type="submit" className="btn-style-1">Soumettre</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="lower-footer">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col col-lg-4 col-12">
                            <div className="copy-left">
                                <p className="copyright">2024 &copy; KOBARAX Co., Ltd Tous droits reservés<a
                                    href="/Kobarax/portfolio"> Kobarax</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default FooterS2;