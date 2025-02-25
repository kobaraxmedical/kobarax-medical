import React, { useState } from 'react'
import SimpleReactValidator from 'simple-react-validator';


const ContactForm = () => {

    const [forms, setForms] = useState({
        civilite: '',
        titre: '',
        nom: '',
        prenom: '',
        etablissement: '',
        department: '',
        fonction: '',
        adresseEtablissement: '',
        codePostal: '',
        region: '',
        pays: '',
        email: '',
        telephone: '',
        sujet: '',
        objet: '',
        message: '',
        policyAccepted: false,
    });
    const [validator] = useState(new SimpleReactValidator({ className: 'errorMessage' }));

    const changeHandler = (e) => {
        const { name, value, type, checked } = e.target;
        setForms({ ...forms, [name]: type === 'checkbox' ? checked : value });
        if (validator.allValid()) {
            validator.hideMessages();
        } else {
            validator.showMessages();
        }
    };

    const submitHandler = (e) => {
        e.preventDefault();
        if (validator.allValid()) {
            validator.hideMessages();
            alert("Formulaire soumis avec succès !");
            setForms({
                civilite: '',
                titre: '',
                nom: '',
                prenom: '',
                etablissement: '',
                department: '',
                fonction: '',
                adresseEtablissement: '',
                codePostal: '',
                region: '',
                pays: '',
                email: '',
                telephone: '',
                sujet: '',
                objet: '',
                message: '',
                policyAccepted: false,
            });
        } else {
            validator.showMessages();
        }
    };

    return (
        <form method="post" className="contact-activation" onSubmit={(e) => submitHandler(e)}>
            <div className="form-group">
                <label>Civilité *</label>
                <select
                    name="civilite"
                    value={forms.civilite}
                    onChange={changeHandler}
                    className="form-control">
                    <option value="">- Sélectionner -</option>
                    <option value="Mr">Mr</option>
                    <option value="Mme">Mme</option>
                </select>
                {validator.message('civilite', forms.civilite, 'required')}
            </div>

            {/* Other input fields */}
            <div className="form-group">
                <label>Nom *</label>
                <input
                    name="nom"
                    value={forms.nom}
                    onChange={changeHandler}
                    className="form-control"
                    placeholder="Nom"
                />
                {validator.message('nom', forms.nom, 'required|alpha_space')}
            </div>

            <div className="form-group">
                <label>Prénom(s) *</label>
                <input
                    name="prenom"
                    value={forms.prenom}
                    onChange={changeHandler}
                    className="form-control"
                    placeholder="Prénom(s)"
                />
                {validator.message('prenom', forms.prenom, 'required|alpha_space')}
            </div>

            <div className="form-group">
                <label>Message *</label>
                <textarea
                    name="message"
                    value={forms.message}
                    onChange={changeHandler}
                    className="form-control"
                    placeholder="Message"
                />
                {validator.message('message', forms.message, 'required')}
            </div>

            <div className="form-group">
                <label>Politique de Confidentialité *</label>
                <p>
                    {"Veuillez vérifier le traitement des informations personnelles de notre société à partir de l'URL suivante."}{' '}
                    <a href="/privacy-policy" target="_blank" rel="noopener noreferrer">Politique de Confidentialité</a>
                </p>
                <input
                    type="checkbox"
                    name="policyAccepted"
                    checked={forms.policyAccepted}
                    onChange={changeHandler}
                />
                <label>Accepter les termes de la politique de confidentialité</label>
                {validator.message('policyAccepted', forms.policyAccepted, 'accepted')}
            </div>

            <div className="submit-area">
                <button type="submit" className="btn-style-1"><span>Envoyer</span></button>
            </div>
        </form>
    )
}

export default ContactForm;