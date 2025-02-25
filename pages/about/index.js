import React, { Fragment } from 'react';

import About from '../../components/about/about';
import AboutHistory from '../../components/AboutHistory/AboutHistory';
import Footer from '../../components/footer/Footer';
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from '../../components/pagetitle/PageTitle'
import PartnerSection from '../../components/PartnerSection/PartnerSection';
import Scrollbar from '../../components/scrollbar/scrollbar'

const AboutPage = () => {
    return (
        <Fragment>
            <Navbar />
            <PageTitle pageTitle={'Qui sommes nous'} pagesub={'Qui sommes nous'} />
            <div className="about-page">
                <About />
                <AboutHistory/>
            </div>
            <PartnerSection pClass={'style-2 separator-padding pt-0'} />
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};
export default AboutPage;
