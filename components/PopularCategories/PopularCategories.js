import React, { useState } from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import Link from "next/link";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { urlForImage } from '../../lib/sanity.image'



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


const PopularCategories = ({ products, addToCartProduct, addToWishListProduct, addToCompareListProduct }) => {


    const [open, setOpen] = React.useState(false);

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    };
    function ProductGrid({ products, value, index, sliceStart, sliceEnd }) {
        return (
            <TabPanel value={value} index={index}>
            <section className="container mx-auto p-10 md:py-12 px-0 md:p-8 md:px-0">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-10 items-start">
                    {products.length > 0 &&
                        products.slice(sliceStart, sliceEnd).map((product, pitem) => (
                            <div key={pitem} className="p-5 py-10 h-full bg-white rounded-3xl shadow-xl text-center transform duration-500 hover:-translate-y-2 cursor-pointer flex flex-col">
                                <Link href={'/product-single/[slug]'} as={`/product-single/${product.slug}`}>
                                    <img
                                        src={urlForImage(product?.proImg?.asset?._ref).width(500).height(500).url()} 
                                        alt={product.title || "Product Image"}
                                        className="mx-auto"
                                    />
                                </Link>
                                <h1 className="text-2xl my-5">{product.title}</h1>
                                <div className="mt-auto"> 
                                    <button onClick={() => addToCartProduct(product)} className="small-btn-style">Ajouter au devis</button>
                                </div>
                            </div>
                        ))}
                </div>
            </section>
        </TabPanel>
        );
    }

    
    return (
        <section className="popular-category-section mt-5">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6">
                        <SectionTitle sTitle={'Catégories populaires'} sClass={'heading-title-s2'}/>
                    </div>
                </div>
                <div className="product-wrap">
                    <div className="product-tab">
                        <ul className="nav nav-mb-3 main-tab" id="tab" role="tablist">
                            <Tabs value={value}
                                classes={{
                                    root: 'prdTab',
                                    indicator: 'prdTabIndicator'
                                }}
                                onChange={handleChange}
                                aria-label="simple tabs example">
                                <Tab label="Categories 1" />
                                <Tab label="Categories 2" />
                                <Tab label="Categories 3" />
                            </Tabs>
                        </ul>
                    </div>
                    <div className="tab-content">
                        <ProductGrid products={products} value={value} index={0} sliceStart={0} sliceEnd={4} />
                        <ProductGrid products={products} value={value} index={1} sliceStart={4} sliceEnd={8} />
                        <ProductGrid products={products} value={value} index={2} sliceStart={8} sliceEnd={12} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PopularCategories;
