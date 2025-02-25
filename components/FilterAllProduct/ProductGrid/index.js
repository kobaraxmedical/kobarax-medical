import Image from 'next/image';
import Link from "next/link";
import React, { useEffect,useState } from "react";

import { urlForImage } from '../../../lib/sanity.image'

const ProductGrid = ({ products, itemsPerPage = 15, addToCartProduct, addToWishListProduct, addToCompareListProduct }) => {
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(products.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
      setCurrentPage(pageNumber)
     ClickHandler()
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentProducts = products.slice(startIndex, endIndex);

  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <li key={i} className={currentPage === i ? "active" : ""}>
          <Link onClick={() => handlePageChange(i)} href="/boutique">{i}</Link>
        </li>
      );
    }
    return pageNumbers;
  };

  const redirectTo = (path) => {
    window
      .open(path, "_blank")
      .focus();
  }
  return (
    <div className="product-wrap w-full">
      <div className="grid gap-6 w-full max-w-[1920px] mx-auto">
        {currentProducts.map((product, pitem) => (
          <div className="w-full" key={pitem}>
            <div className="product-item bg-white rounded-lg border overflow-hidden w-full">
              <div className="flex flex-col md:flex-row max-w-[1600px] mx-auto">
                {/* Left side - Image */}
                <div className="md:w-1/3 lg:w-1/4 flex items-center justify-center relative min-h-[200px] md:min-h-[280px] lg:min-h-[320px]">
                  <Link
                    onClick={ClickHandler}
                    href={"/product-single/[slug]"}
                    as={`/product-single/${product.slug}`}
                    className="relative w-[90%] h-[90%] block"
                  >
                    <Image
                      src={urlForImage(product?.proImg?.asset?._ref)
                        .auto('format')
                        .fit('max')
                        .quality(80)
                        .url()} 
                      alt={product.title || "Product Image"}
                      layout="fill"
                      objectFit="contain"
                      className="hover:scale-105 transition-transform duration-300"
                      style={{ maxHeight: 'calc(100% - 2rem)' }}
                    />
                  </Link>
                </div>

                {/* Right side - Content */}
                <div className="md:w-2/3 lg:w-3/4 p-6 flex flex-col">
                  <div className="flex-grow">
                    <h2 className="text-xl font-bold mb-3">
                      <Link
                        onClick={ClickHandler}
                        href={"/product-single/[slug]"}
                        as={`/product-single/${product.slug}`}
                      >
                        {product.title}
                      </Link>
                    </h2>
                    <p className="text-gray-600 mb-4 text-justify">
                      {product.description || "Description non disponible"}
                    </p>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3 mt-4 border-t pt-4">
                    <button className="btn bg-[#1e6c92] hover:bg-[#165270] text-white px-4 py-2 rounded-md transition-colors duration-300">
                      Demander devis
                    </button>
                    <button className="btn bg-[#1e6c92]/90 hover:bg-[#165270] text-white px-4 py-2 rounded-md transition-colors duration-300">
                      Télécharger la brochure
                    </button>
                    <button onClick={() => redirectTo("/services-apres-vente")} className="btn bg-[#1e6c92]/80 hover:bg-[#165270] text-white px-4 py-2 rounded-md transition-colors duration-300">
                      Consulter notre service après-vente
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="pagination-wrapper pagination-wrapper-center mt-8">
        <ul className="pg-pagination">
          <li>
              <Link
              onClick={() => handlePageChange(currentPage - 1 < 1? 1 : currentPage - 1)}
              href="/boutique"
              aria-label="Previous"
              >
                  <i className="icon-angale-right"></i>
              </Link>
          </li>
            {renderPageNumbers()}
           <li>
              <Link
                 onClick={() => handlePageChange(currentPage + 1 > totalPages ? totalPages : currentPage + 1)}
                 href="/boutique"
                aria-label="Next"
              >
                  <i className="icon-angale-right2"></i>
             </Link>
            </li>
        </ul>
      </div>
    </div>
  );
};

export default ProductGrid;