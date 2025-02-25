import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Image from 'next/image';
import Link from "next/link";
import PropTypes from 'prop-types';
import React, { useState } from "react";

import { urlForImage } from '../../lib/sanity.image';
import erimg from '../../public/images/evss-premiun-series.png';
import ViewModal from "../Modal";
import SectionTitle from "../SectionTitle/SectionTitle";

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <Typography
            component="div"
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && <Box>{children}</Box>}
        </Typography>
    );
}

const LatestProduct = ({ products, categories, addToCartProduct, addToWishListProduct, addToCompareListProduct }) => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    };

    const [open, setOpen] = React.useState(false);

    function handleClose() {
        setOpen(false);
    }

    const [state, setState] = useState({});


    const [value, setValue] = React.useState(0);

    const handleSelectChange = (event) => {
        setValue(parseInt(event.target.value));
    };

    function ProductGrid({ products, value, index, category }) {
        const filteredProducts = products.filter(product => product.category?.name === category.name);
        return (
            <TabPanel value={value} index={index}>
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {filteredProducts.length > 0 &&
                        filteredProducts.map((product, pitem) => (
                            <div key={product.id} className="bg-white rounded-xl border p-6 flex flex-col items-center transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                                <Link href={'/product-single/[slug]'} as={`/product-single/${product.slug}`} className="w-full">
                                    <div className="relative min-h-[200px] md:min-h-[280px] lg:min-h-[320px] flex items-center justify-center">
                                        <Image
                                            src={urlForImage(product?.proImg?.asset?._ref)
                                                .auto('format')
                                                .fit('max')
                                                .quality(80)
                                                .url()} 
                                            alt={product.title || "Product Image"}
                                            className="w-[90%] h-[90%] object-contain hover:scale-105 transition-transform duration-300"
                                            style={{ maxHeight: 'calc(100% - 2rem)' }}
                                            layout="fill"
                                        />
                                    </div>
                                </Link>
                                <div className="flex-1 w-full">
                                    <h2 className="text-xl font-bold mb-3 text-gray-800">
                                        <Link href={'/product-single/[slug]'} as={`/product-single/${product.slug}`} className="text-[#1e6c92] hover:text-[#165270] transition-colors">
                                            {product.title}
                                        </Link>
                                    </h2>
                                    <p className="text-gray-600 mb-6 text-justify line-clamp-3">
                                        {product?.description || "Description non disponible"}
                                    </p>
                                </div>
                                <div className="w-full flex flex-col sm:flex-row gap-3">
                                    <button onClick={() => addToCartProduct(product)} className="flex-1 bg-[#1e6c92] hover:bg-[#165270] text-white px-6 py-3 rounded-lg transition-colors duration-300 text-center font-semibold">
                                        Ajouter au devis
                                    </button>
                                </div>
                            </div>
                        ))}
                </div>
            </TabPanel>
        );
    }

    return (
        <section className="latest-product-section separator-padding pt-0">
            <div className="container mx-auto px-4">
                <div className="latest-product-title mb-8">
                    <div className="flex flex-col md:flex-row justify-between items-center w-full">
                        <SectionTitle sTitle={'Nos derniers produits'} />
                        <div className="block w-full mt-4 md:mt-0"> {/* Changed from block md:hidden */}
                            <select
                                className="form-select w-full p-2 border rounded-md"
                                value={value}
                                onChange={handleSelectChange}
                            >
                                {categories?.map((category, index) => (
                                    <option key={index} value={index}>
                                        {category.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>
                <div className="flex flex-wrap">
                    <div className="w-full lg:w-1/4 mb-8 lg:mb-0">
                        <div className="latest-product-left-sidebar">
                            <div className="left-sidebar-text">
                                <div className="small-heading-title">
                                    <span>100% Premium Quality</span>
                                    <h3>ULTRASOUND Q40</h3>
                                    <Link onClick={ClickHandler} href="/boutique" className="small-btn-style">Ajouter au devis</Link>
                                </div>
                            </div>
                            <div className="left-sidebar-img">
                                <div className="discount">
                                    <span>Qualite</span>
                                    <h3>100%</h3>
                                </div>
                                <img src={erimg.src} alt="" className="w-full h-full object-cover rounded-lg" />
                            </div>
                        </div>
                    </div>
                    <div className="w-full lg:w-3/4">
                        {categories.map((category, index) => (
                            <ProductGrid key={index} products={products} value={value} index={index} category={category} />
                        ))}
                    </div>
                </div>
            </div>
            <ViewModal
                addToCartProduct={addToCartProduct}
                open={open}
                onClose={handleClose}
                product={state}
            />
        </section>
    );
};

LatestProduct.propTypes = {
    products: PropTypes.array.isRequired,
    categories: PropTypes.array.isRequired,
    addToCartProduct: PropTypes.func.isRequired,
    addToWishListProduct: PropTypes.func.isRequired,
    addToCompareListProduct: PropTypes.func.isRequired,
};

export default LatestProduct;
