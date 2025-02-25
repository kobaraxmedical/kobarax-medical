import React, { Fragment, useState } from 'react';
import SimpleReactValidator from "simple-react-validator";
import { toast } from "react-toastify";
import { useRouter } from 'next/router';

const CheckoutSection = ({ cartList }) => {
    // states
    const [tabs, setExpanded] = React.useState({
        cupon: false,
    });

    // tabs handler
    function faqHandler(name) {
        setExpanded({
            cupon: false,
            billing_adress: false,
            payment: true, [name]: !tabs[name]
        });
    }

    const router = useRouter()

    const [value, setValue] = useState({
        email: 'user@gmail.com',
        fname: '',
        lname: '',
        company: '',
        country: '',
        post_code: '',
        phone: '',
        note: '',
    });

    const changeHandler = (e) => {
        setValue({ ...value, [e.target.name]: e.target.value });
        validator.showMessages();
    };


    const [validator] = React.useState(new SimpleReactValidator({
        className: 'errorMessage'
    }));

    const submitForm = async (e) => {
        e.preventDefault();
        if (validator.allValid()) {
            const userRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
            const email = value.email;

            if (email.match(userRegex)) {
                try {
                    const response = await fetch('/api/send-devis', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            userData: value,
                            cartList: cartList
                        }),
                    });

                    if (response.ok) {
                        toast.success('Devis envoyé!');
                        router.push('/devis-confirm');
                        setValue({
                            email: '',
                            fname: '',
                            lname: '',
                            company: '',
                            country: '',
                            post_code: '',
                            phone: '',
                            note: '',
                        });
                        validator.hideMessages();
                    } else {
                        throw new Error('Failed to send email');
                    }
                } catch (error) {
                    console.error('Error:', error);
                    toast.error('Erreur lors de l\'envoi du devis');
                }
            } else {
                toast.info("L'email doit commencer par user!");
            }
        } else {
            validator.showMessages();
            toast.error("Formulaire invalide!");
        }
    };

    return (
        <Fragment>
            <div className="checkout-area separator-padding">
                <div className="container">
                    <form onSubmit={submitForm}>
                        <div className="checkout-wrap">
                            <div className="row">
                                <div className="col-lg-6 col-12">
                                    <div className="biling-item">
                                        <div className="heading-title">
                                            <h2>Addresse</h2>
                                        </div>
                                        <div className="billing-adress">
                                            <div className="contact-form form-style">
                                                <div className="row">
                                                    <div className="col-lg-6 col-md-12 col-12">
                                                        <label>{"Votre prénom"} *</label>
                                                        <input type="text" placeholder="Votre prénom"
                                                            name="fname"
                                                            value={value.fname}
                                                            onChange={(e) => changeHandler(e)}
                                                        />
                                                    </div>
                                                    <div className="col-lg-6 col-md-12 col-12">
                                                        <label>Nom de famille *</label>
                                                        <input type="text" placeholder="Nom de famille"
                                                            name="lname"
                                                            value={value.lname}
                                                            onChange={(e) => changeHandler(e)}
                                                        />
                                                    </div>
                                                    <div className="col-lg-12 col-md-12 col-12">
                                                        <label>Email *</label>
                                                        <input type="text" placeholder="Email*"
                                                            name="email"
                                                            value={value.email}
                                                            onChange={(e) => changeHandler(e)}
                                                        />
                                                    </div>
                                                    <div className="col-lg-12 col-md-12 col-12">
                                                        <label>Nom de compagnie (optionel)</label>
                                                        <input type="text" placeholder="Nom de compagnie" id="cname"
                                                            name="company"
                                                            value={value.company}
                                                            onChange={(e) => changeHandler(e)}
                                                        />
                                                    </div>
                                                    <div className="col-lg-12 col-md-12 col-12">
                                                        <select className="form-control"
                                                            name="state"
                                                            value={value.country}
                                                            onChange={(e) => changeHandler(e)}
                                                        >
                                                            <option disabled="" selected="">Region *</option>
                                                            <option>Dakar</option>
                                                            <option>Diourbel</option>
                                                            <option>Fatick</option>
                                                            <option>Kolda</option>
                                                            <option>Matam</option>
                                                            <option>Kaffrine</option>
                                                            <option>Sedhiou</option>
                                                            <option>Thies</option>
                                                            <option>Tambacounda</option>
                                                            <option>Keur Massar</option>
                                                            <option>St. Louis</option>
                                                            <option>Louga</option>
                                                            <option>Mbour</option>
                                                            <option>Kedougou</option>
                                                            <option>Kaolack</option>
                                                        </select>
                                                    </div>
                                                    <div className="col-lg-12 col-md-12 col-12">
                                                        <label>Addresse Rue*</label>
                                                        <input type="text" placeholder="Addresse Rue" id="address" name="address" />
                                                    </div>
                                                    <div className="col-lg-12 col-md-12 col-12">
                                                        <input type="text" placeholder="Address ligne 2" id="address2" name="address2" />
                                                    </div>
                                                    <div className="col-lg-12 col-md-12 col-12">
                                                        <select name="address" id="City" className="form-control">
                                                            <option disabled="" selected="">Ville / Cite *</option>
                                                            <option>Thies</option>
                                                            <option>Tambacounda</option>
                                                            <option>Keur Massar</option>
                                                            <option>St. Louis</option>
                                                            <option>Louga</option>
                                                            <option>Mbour</option>
                                                            <option>Kedougou</option>
                                                            <option>Kaolack</option>
                                                            <option>Dakar</option>
                                                            <option>Diourbel</option>
                                                            <option>Fatick</option>
                                                            <option>Kolda</option>
                                                        </select>
                                                    </div>
                                                    <div className="col-lg-6 col-md-12 col-12">
                                                        <label>Code Postale *</label>
                                                        <input type="text" placeholder="Code postale *" id="Post2"
                                                            name="post_code"
                                                            value={value.post_code}
                                                            onChange={(e) => changeHandler(e)}
                                                        />
                                                    </div>
                                                    <div className="col-lg-6 col-md-12 col-12">
                                                        <label>Numero de telephone *</label>
                                                        <input type="text" placeholder="Phone number"
                                                            name="phone"
                                                            value={value.phone}
                                                            onChange={(e) => changeHandler(e)}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-12">
                                    <div className="heading-title">
                                        <h2>Information Additionnelle</h2>
                                    </div>
                                    <div className="note-area">
                                        <label>Notes (optional)</label>
                                        <textarea name="massage"
                                            placeholder="Remarque sur votre devis, par exemple des notes spéciales pour la livraison."></textarea>
                                    </div>
                                    <div className="checkout-order-area">
                                        <h3>Votre Devis</h3>
                                        <div className="oreder-item">
                                            <div className="title bg-title">
                                                <h2>Produits <span>Quantite</span></h2>
                                            </div>
                                            {cartList.map(item => (
                                                <div className="oreder-product" key={item.id}>
                                                    <div className="images">
                                                        <span>
                                                            <img src={item.proImg} alt="" />
                                                        </span>
                                                        <small>{item.title}</small>
                                                    </div>
                                                    <span> {item.qty}</span>
                                                </div>
                                            ))}
                                        </div>
                                        <div className="payment-option">
                                            <h3>Methode de paiement</h3>
                                            <div className="payment-select">
                                                <ul>
                                                    <li className="addToggle">
                                                        <input id="add" type="radio" name="payment"
                                                            checked="checked" value="30" />
                                                        <label for="add">Tansfert par banque</label>
                                                    </li>
                                                    <li className="removeToggle">
                                                        <input id="remove" type="radio" name="payment"
                                                            value="30" />
                                                        <label for="remove">Cheque</label>
                                                    </li>
                                                    <li className="getwayToggle">
                                                        <input id="getway" type="radio" name="payment"
                                                            value="30" />
                                                        <label for="getway">Cash</label>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="payment-bottom">
                                                <p>{"Vos données personnelles seront utilisées pour traiter votre commande, soutenir votre expérience sur ce site Web et à d'autres fins décrites dans notre politique de confidentialité."}</p>
                                                <div className="payment-btn">
                                                    <button className="btn-style-1">Envoyer</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </Fragment>
    )
};


export default CheckoutSection;