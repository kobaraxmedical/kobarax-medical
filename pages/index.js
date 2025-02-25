import React, { Fragment } from 'react';
import { connect } from "react-redux";

import AnimateMarquee from '../components/AnimateMarquee/AnimateMarquee';
import Categorys from '../components/Categorys/Categorys';
import CtaBanner from '../components/CtaBanner/CtaBanner';
import CtaBannerS2 from '../components/CtaBannerS2/CtaBannerS2';
import FeaturesSection from '../components/FeaturesSection/FeaturesSection';
import Footer from '../components/footer/Footer';
import Hero from '../components/hero/hero';
import LatestProduct from '../components/LatestProduct/LatestProduct';
import Navbar from '../components/Navbar/Navbar'
import PartnerSection from '../components/PartnerSection/PartnerSection';
import Scrollbar from '../components/scrollbar/scrollbar';
import { readToken } from '../lib/sanity.api'
import { getAllProducts, getClient, getSettings, getAllCategories } from '../lib/sanity.client'
import { addToCart, addToCompareList, addToWishList } from "../store/actions/action";
import WhatsAppButton from '../components/WhatsAppButton/WhatsAppButton';

const HomePage = ({ 
    addToCart, 
    addToWishList, 
    addToCompareList, 
    sanityproducts, 
    categories,
}) => {

  const addToCartProduct = (product, qty = 1) => {
      addToCart(product, qty);
  };
  const addToWishListProduct = (product, qty = 1) => {
      addToWishList(product, qty);
  };
  const addToCompareListProduct = (product, qty = 1) => {
      addToCompareList(product, qty);
  };

  const products = sanityproducts;
  
  return (
      <Fragment>
          <Navbar/>
          <Hero />
          <AnimateMarquee categories={categories}/>
          <Categorys categories={categories} />
          <LatestProduct 
              addToCartProduct={addToCartProduct}
              addToWishListProduct={addToWishListProduct}
              addToCompareListProduct={addToCompareListProduct}
              products={products}
              categories={categories}
          />
          <CtaBanner />
          <FeaturesSection />
          <PartnerSection partners={products}/>
          <CtaBannerS2 />
          <Footer /> 
          <Scrollbar />
      </Fragment>
  )
};
// Separate the Redux connection
const mapStateToProps = (state) => ({});

const mapDispatchToProps = {
  addToCart, 
  addToWishList, 
  addToCompareList
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);

export const getStaticProps = async (ctx) => {
    const { draftMode = false } = ctx
    const client = getClient(draftMode ? { token: readToken } : undefined)
  
    const [settings, products = [], categories = []] = await Promise.all([
      getSettings(client),
      getAllProducts(client),
      getAllCategories(client),
    ])
  
    return {
      props: {
        sanityproducts: products,
        categories,
        draftMode,
        token: draftMode ? readToken : '',
      },
    }
}