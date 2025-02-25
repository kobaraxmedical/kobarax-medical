import React, { useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from "../../components/pagetitle/PageTitle";
import SimpleReactValidator from "simple-react-validator";
import { toast } from "react-toastify";
import Link from "next/link";
import { useRouter } from 'next/router'
import Footer from '../../components/footer/Footer';
const LoginPage = (props) => {

    const router = useRouter()

    const [value, setValue] = useState({
        email: 'Kobarax@gmail.com',
        password: '123456',
        remember: false,
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
                password: '',
                remember: false
            });
            validator.hideMessages();

            const userRegex = /^Kobarax+.*/gm;
            const email = value.email;

            if (email.match(userRegex)) {
                toast.success('Successfully Login on Kobarax Medical !');
                router.push('/')
            }
        } else {
            validator.showMessages();
            toast.error('Empty field is not allowed!');
        }
    };
    return (
        <div>
            <Navbar />
            <PageTitle pageTitle={'My account'} pagesub={'My account'} />
            <div className="login-area separator-padding">
                <div className="container">
                    <div className="contact-form-wrap">
                        <div className="heading-title">
                            <h2>Login</h2>
                        </div>
                        <form className="contact-form" onSubmit={submitForm}>
                            <div className="row">
                                <div className="form-field">
                                    <label>Username or email address *</label>
                                    <input type="email"
                                        value={value.email}
                                        variant="outlined"
                                        name="email"
                                        onChange={(e) => changeHandler(e)}
                                    />
                                    {validator.message('email', value.email, 'required|email')}
                                </div>
                                <div className="form-field">
                                    <label>Password *</label>
                                    <input type="password"
                                        value={value.password}
                                        variant="outlined"
                                        name="password"
                                        onBlur={(e) => changeHandler(e)}
                                        onChange={(e) => changeHandler(e)}
                                    />
                                    {validator.message('password', value.password, 'required')}
                                </div>
                                <div className="form-field">
                                    <div className="input-box">
                                        <input type="checkbox" id="fruit4" name="fruit-4" value="Strawberry" />
                                        <label for="fruit4">Remember Me</label>
                                    </div>
                                </div>
                                <div className="form-field">
                                    <button type="submit" className="btn-style-1">Login Now</button>
                                    <Link href="/forgot" className="forgot">Lost your password? </Link>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
};

export default LoginPage;