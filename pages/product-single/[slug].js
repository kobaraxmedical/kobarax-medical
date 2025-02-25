import React from 'react';
import { connect } from "react-redux";

// Component imports
import Footer from '../../components/footer/Footer';
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from '../../components/pagetitle/PageTitle'
import Scrollbar from '../../components/scrollbar/scrollbar'
// Sanity imports
import { getAllProducts, getClient, getProductAndMoreStories, getSettings } from '../../lib/sanity.client';
import { addToCart } from "../../store/actions/action";
import ProductTabs from './alltab';
import Product from './product'

const ProductSinglePage = ({ 
  product, 
  addToCart 
}) => {
  if (!product) {
    return <div>Loading or Product Not Found</div>;
  }

  // Get the category name safely
  const categoryName = product.category?.name || 'No Category';

  return (
    <React.Fragment>
      <Navbar/>
      <PageTitle 
        pageTitle={product.title} 
        pagesub={categoryName}
      /> 
      <div className="product-single-section separator-padding">
        <div className="container">
          <Product
            item={product}
            addToCart={addToCart}
          />
        </div>
      </div>
      <Footer />
      <Scrollbar/>
    </React.Fragment>
  )
};

// Redux connection
const mapStateToProps = (state) => ({
  products: state.data.products,
});

const mapDispatchToProps = {
  addToCart
};

export const getStaticPaths = async () => {
  const client = getClient()
  const products = await getAllProducts(client)
  
  return {
    paths: products?.map((product) => ({
      params: {
        slug: product.slug || ''
      }
    })) || [],
    fallback: 'blocking',
  }
}

export const getStaticProps = async (ctx) => {
  try {
    const { draftMode = false, params = {} } = ctx
    const client = getClient(draftMode ? { token: readToken } : undefined)

    if (!params?.slug) {
      return { notFound: true }
    }
    
    const [settings, { product, moreProducts }] = await Promise.all([
      getSettings(client),
      getProductAndMoreStories(client, params.slug)
    ])

    if (!product) {
      return { notFound: true }
    }

    return {
      props: {
        product,
        moreProducts,
        settings,
        draftMode,
        token: draftMode ? readToken : '',
      },
      revalidate: 60
    }
  } catch (error) {
    console.error('Error in getStaticProps:', error)
    return { notFound: true }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductSinglePage);

