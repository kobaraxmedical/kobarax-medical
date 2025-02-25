import React from "react";
import Link from "next/link";
import CoverImage from '../../../components/CoverImage'

const truncateText = (text, maxLength) => {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength) + '...';
};

const ProductList = ({ products, addToCartProduct }) => {
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  return (
    <div className="product-list">
      <div className="product-wrap">
        <div className="row align-items-center">
          {products.length > 0 &&
            products.slice(0, 16).map((product, pitem) => (
              <div className="col-xl-6 col-lg-6 col-md-6 col-12" key={pitem}>
                <div className="horizontal-product-item">
                  <div className="product-image">
                    <CoverImage slug={product.slug} title={product.title} image={product.proImg} priority />
                  </div>
                  <div className="product-info">
                    <h2><Link onClick={ClickHandler} href={'/product-single/[slug]'} as={`/product-single/${product.slug}`}>{product.title}</Link></h2>
                    <div className="rating-product">
                      <i className="icon-star"></i>
                      <i className="icon-star"></i>
                      <i className="icon-star"></i>
                      <i className="icon-star"></i>
                      <i className="icon-star gray"></i>
                    </div>
                    <p className="product-description">
                      {truncateText(product.description || "Description non disponible", 100)}
                    </p>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ProductList;


