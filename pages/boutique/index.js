import React, { Fragment, useState } from 'react';
import { connect } from "react-redux";

import FilterAllProduct from "../../components/FilterAllProduct";
import FilterSidebar from "../../components/FilterSidebar";
import Footer from '../../components/footer/Footer';
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from '../../components/pagetitle/PageTitle'
import Scrollbar from '../../components/scrollbar/scrollbar'
import { getAllCategories, getAllProducts, getClient, getSettings } from '../../lib/sanity.client'
import { addToCart, addToCompareList, addToWishList } from "../../store/actions/action";

const ShopPage = ({ addToCart, addToWishList, addToCompareList, sanityproducts, categories }) => {

    const productsArray = sanityproducts;

    const [filter, setFilter] = useState({
        price: "",
        size: "",
        category: "",
        brand: "",
    });

    const changeHandler = ({ target: { name, value } }) => {
        setFilter({ ...filter, [name]: value });
    };

    const addToCartProduct = (product) => {
        addToCart(product, 1, filter.category, filter.size);
    };

    const products = productsArray
        .filter((product) => {
            if (!filter.category) return true;
            return product.category?.name === filter.category;
        });

    return (
        <Fragment>
            <Navbar />
            <PageTitle pageTitle={'Produits'} pagesub={'Produits'} />
            <div className="shop-section">
                <div className="max-w-[1920px] mx-auto md:px-24 w-full">
                    {/* Filter at the top */}
                    <div className="mb-8 bg-white rounded-lg shadow p-4">
                        <FilterSidebar
                            filter={filter}
                            changeHandler={changeHandler}
                            categories={categories}
                        />
                    </div>
                    
                    {/* Products grid below */}
                    <div className="w-full">
                        <FilterAllProduct
                            addToCartProduct={addToCartProduct}
                            products={products}
                        />
                    </div>
                </div>
            </div>
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {
  addToCart, 
  addToWishList, 
  addToCompareList
};

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);

export const getStaticProps = async (ctx) => {
    try {
      const { draftMode = false } = ctx
      const client = getClient(draftMode ? { token: readToken } : undefined)
      
      const [settings, products = [], categories = []] = await Promise.all([
        getSettings(client),
        getAllProducts(client),
        getAllCategories(client)
      ])
      
      return {
        props: {
          sanityproducts: products,
          categories,
          token: draftMode ? readToken : '',
        },
      }
    } catch (error) {
      console.error('Error fetching data from Sanity:', error)
      return {
        props: {
          sanityproducts: [],
          categories: [],
          token: '',
        }
      }
    }
}