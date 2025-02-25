import React, { useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from "../../components/pagetitle/PageTitle";
import SimpleReactValidator from "simple-react-validator";
import { toast } from "react-toastify";
import { useRouter } from 'next/router'
import Footer from '../../components/footer/Footer';


const ForgotPassword = (props) => {

    const router = useRouter()

    const [value, setValue] = useState({
        email: '',
    });

    const changeHandler = (e) => {
        setValue({ ...value, [e.target.name]: e.target.value });
        validator.showMessages();
    };

    const [validator] = React.useState(new SimpleReactValidator({
        className: 'errorMessage'
    }));

    const submitForm = (e) => {
        e.preventDefault();
        if (validator.allValid()) {
            setValue({
                email: '',
            });
            validator.hideMessages();
            toast.success('Send a code Your Mail!');
            router.push('/login')
        } else {
            validator.showMessages();
            toast.error('Empty field is not allowed!');
        }
    };
    return (
        <div>
            <Navbar />
            <PageTitle pageTitle={'Reset Password'} pagesub={'Reset Password'} />
            <div className="login-area separator-padding">
                <div className="container">
                    <div className="contact-form-wrap">
                        <div className="heading-title">
                            <h2>Reset Password</h2>
                        </div>
                        <form className="contact-form" onSubmit={submitForm}>
                            <div className="row">
                                <div className="form-field">
                                    <label>Email*</label>
                                    <input type="email"
                                        value={value.email}
                                        variant="outlined"
                                        name="email"
                                        onBlur={(e) => changeHandler(e)}
                                        onChange={(e) => changeHandler(e)}
                                    />
                                    {validator.message('email', value.email, 'required|email')}
                                </div>
                                <div className="form-field">
                                    <button type="submit" className="btn-style-1">Resend Password</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </div >
    )
};

export default ForgotPassword;