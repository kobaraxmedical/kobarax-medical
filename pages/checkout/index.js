import React, {Fragment} from 'react';
import {connect} from "react-redux";

import CheckoutSection from '../../components/CheckoutSection'
import Footer from '../../components/footer/Footer';
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from "../../components/pagetitle/PageTitle";
import Scrollbar from '../../components/scrollbar/scrollbar'

const CheckoutPage =({cartList}) => {
    return(
        <Fragment>
            <Navbar/>
            <PageTitle pageTitle={'Envoi de devis'} pagesub={'Envoi de devis'}/> 
            <CheckoutSection cartList={cartList}/>
            <Footer />
            <Scrollbar/>
        </Fragment>
    )
};
const mapStateToProps = state => {
    return {
        cartList: state.cartList.cart,
        symbol: state.data.symbol
    }
};

export default connect(mapStateToProps)(CheckoutPage);
