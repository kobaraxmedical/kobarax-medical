import React, { useState } from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import Link from "next/link";
import { Tooltip } from 'react-tooltip'
import ViewModal from "../Modal";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CoverImage from '../../components/CoverImage'


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


const DailyBestSelling = ({ products, addToCartProduct, addToWishListProduct, addToCompareListProduct }) => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    };

    const [open, setOpen] = React.useState(false);

    function handleClose() {
        setOpen(false);
    }

    const [state, setState] = useState({});

    const handleClickOpen = (item) => {
        setOpen(true);
        setState(item);
    };

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <section className="daily-best-sell-section separator-padding">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-4 col-12">
                        <SectionTitle sTitle={'Meilleures ventes quotidiennes'}/>
                    </div>
                    <div className="col-lg-8 col-12">
                        <div className="product-tab">
                            <ul className="nav nav-mb-3 main-tab" id="tab" role="tablist">
                                <Tabs value={value}
                                    classes={{
                                        root: 'prdTab',
                                        indicator: 'prdTabIndicator'
                                    }}
                                    onChange={handleChange}
                                    aria-label="simple tabs example">
                                    <Tab label="Exemples 1" />
                                    <Tab label="Exemples 2" />
                                    <Tab label="Exemples 3" />
                                </Tabs>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="product-wrap">
                    <div className="tab-content">
                        <TabPanel value={value} index={0}>
                            <div className="row">
                                {products.length > 0 &&
                                    products.slice(0, 4).map((product, pitem) => (
                                        <div className="col-lg-3 col-md-6 col-sm-6 col-12" key={pitem}>
                                            <div className="product-item">
                                                <div className="product-image">
                                                    <CoverImage slug={product.slug} title={product.title} image={product.proImg2} priority />
                                                    <ul className="tag-wrap">
                                                        {product.badge1 ? <li className={`tag ${product.badgeClass}`}>{product.badge1}</li> : ""}
                                                        {product.badge2 ? <li className={`tag ${product.badgeClass2}`}>{product.badge2}</li> : ""}
                                                    </ul>
                                                    <ul className="info-wrap">
                                                        <li data-bs-toggle="modal" data-bs-target="#modal-cart-view">
                                                            <button
                                                                data-tooltip-id="view-tooltip" data-tooltip-content="Voir"
                                                                data-tooltip-place="left"
                                                                onClick={() => handleClickOpen(product)}
                                                            >
                                                                <i className="icon-open-eye-1"></i>
                                                            </button>
                                                            <Tooltip id="view-tooltip" />
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="product-info">
                                                    <h2><Link onClick={ClickHandler} href={'/product-single/[slug]'} as={`/product-single/${product.slug}`}>{product.title}</Link></h2>
                                                    <div className="price">
                                                        <button
                                                            className="cart-btn"
                                                            data-tooltip-id="cart-tooltip" data-tooltip-content="Ajouter au devis"
                                                            data-tooltip-place="left"
                                                            onClick={() => addToCartProduct(product)}
                                                        >
                                                            <i className="icon-cart"></i>
                                                        </button>
                                                        <Tooltip id="cart-tooltip" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                            </div>
                        </TabPanel>
                        <TabPanel value={value} index={1}>
                            <div className="row">
                                {products.length > 0 &&
                                    products.slice(4, 8).map((product, pitem) => (
                                        <div className="col-lg-3 col-md-6 col-sm-6 col-12" key={pitem}>
                                            <div className="product-item">
                                                <div className="product-image">
                                                    <CoverImage slug={product.slug} title={product.title} image={product.proImg} priority />
                                                    <ul className="tag-wrap">
                                                        {product.badge1 ? <li className={`tag ${product.badgeClass}`}>{product.badge1}</li> : ""}
                                                        {product.badge2 ? <li className={`tag ${product.badgeClass2}`}>{product.badge2}</li> : ""}
                                                    </ul>
                                                    <ul className="info-wrap">
                                                        <li data-bs-toggle="modal" data-bs-target="#modal-cart-view">
                                                            <button
                                                                data-tooltip-id="view-tooltip" data-tooltip-content="Voir"
                                                                data-tooltip-place="left"
                                                                onClick={() => handleClickOpen(product)}
                                                            >
                                                                <i className="icon-open-eye-1"></i>
                                                            </button>
                                                            <Tooltip id="view-tooltip" />
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="product-info">
                                                    <h2><Link onClick={ClickHandler} href={'/product-single/[slug]'} as={`/product-single/${product.slug}`}>{product.title}</Link></h2>
                                                    <div className="price">
                                                        <button
                                                            className="cart-btn"
                                                            data-tooltip-id="cart-tooltip" data-tooltip-content="Ajouter au devis"
                                                            data-tooltip-place="left"
                                                            onClick={() => addToCartProduct(product)}
                                                        >
                                                            <i className="icon-cart"></i>
                                                        </button>
                                                        <Tooltip id="cart-tooltip" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                            </div>
                        </TabPanel>
                        <TabPanel value={value} index={2}>
                            <div className="row">
                                {products.length > 0 &&
                                    products.slice(8, 12).map((product, pitem) => (
                                        <div className="col-lg-3 col-md-6 col-sm-6 col-12" key={pitem}>
                                            <div className="product-item">
                                                <div className="product-image">
                                                    <CoverImage slug={product.slug} title={product.title} image={product.proImg} priority />
                                                    <ul className="tag-wrap">
                                                        {product.badge1 ? <li className={`tag ${product.badgeClass}`}>{product.badge1}</li> : ""}
                                                        {product.badge2 ? <li className={`tag ${product.badgeClass2}`}>{product.badge2}</li> : ""}
                                                        {product.badge3 ? <li className={`tag ${product.badgeClass3}`}>{product.badge3}</li> : ""}
                                                    </ul>
                                                    <ul className="info-wrap">
                                                        <li data-bs-toggle="modal" data-bs-target="#modal-cart-view">
                                                            <button
                                                                data-tooltip-id="view-tooltip" data-tooltip-content="Voir"
                                                                data-tooltip-place="left"
                                                                onClick={() => handleClickOpen(product)}
                                                            >
                                                                <i className="icon-open-eye-1"></i>
                                                            </button>
                                                            <Tooltip id="view-tooltip" />
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="product-info">
                                                    <h2><Link onClick={ClickHandler} href={'/product-single/[slug]'} as={`/product-single/${product.slug}`}>{product.title}</Link></h2>
                                                    <div className="price">
                                                        <button
                                                            className="cart-btn"
                                                            data-tooltip-id="cart-tooltip" data-tooltip-content="Ajouter au devis"
                                                            data-tooltip-place="left"
                                                            onClick={() => addToCartProduct(product)}
                                                        >
                                                            <i className="icon-cart"></i>
                                                        </button>
                                                        <Tooltip id="cart-tooltip" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                            </div>
                        </TabPanel>
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

export default DailyBestSelling;
