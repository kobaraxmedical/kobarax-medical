import React, {Fragment} from 'react';

import Contactpage from '../../components/Contactpage/Contactpage'
import Footer from '../../components/footer/Footer';
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from '../../components/pagetitle/PageTitle'
import Scrollbar from '../../components/scrollbar/scrollbar'

const ContactPage =() => {
    return(
        <Fragment>
            <Navbar/>
            <PageTitle pageTitle={'Nous Contacter'} pagesub={'Nous Contacter'}/> 
            <Contactpage/>
            <Footer ftClass={'s2'}/>
            <Scrollbar/>
        </Fragment>
    )
};
export default ContactPage;

