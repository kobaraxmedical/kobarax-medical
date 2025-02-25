import React, { useState } from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import Link from "next/link";
import ViewModal from "../Modal";
import { Tooltip } from 'react-tooltip'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const NewArrivalProduct = ({ products, addToCartProduct, addToWishListProduct, addToCompareListProduct }) => {
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


    const settings = {
        dots: false,
        arrows: true,
        speed: 2000,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        responsive: [{
            breakpoint: 1200,
            settings: {
                slidesToShow: 2,
            }
        },{
            breakpoint: 991,
            settings: {
                slidesToShow: 2,
                arrows: false,
                dots: true,

            }
        },
        {
            breakpoint: 575,
            settings: {
                slidesToShow: 1,
                dots: true,
                arrows: false,
            }
        },
        ]
    };


    return (
        <section className="best-seller-section separator-padding top-selling-section pt-0">
            <div className="container sortable-gallery">
                <div className="row">
                    <div className="col-xl-12 col-lg-12">
                        <div className="product-wrap">
                            <SectionTitle sTitle={'Nouveautés'} sClass={'heading-title-s3'} />
                            <div className="top-selling top-selling-active">
                                <Slider {...settings}>
                                    {products.length > 0 &&
                                        products.slice(0, 8).map((product, pitem) => (
                                            <div className="col-lg-3 col-md-6 col-sm-6 col-12" key={pitem}>
                                                <div className="product-item">
                                                    <div className="product-image">
                                                        <img src={product.proImg} alt="" />
                                                        <ul className="tag-wrap">
                                                            {product.badge1 ? <li className={`tag ${product.badgeClass}`}>{product.badge1}</li> : ""}
                                                            {product.badge2 ? <li className={`tag ${product.badgeClass2}`}>{product.badge2}</li> : ""}
                                                        </ul>
                                                        <ul className="info-wrap">
                                                            <li>
                                                                <button
                                                                    data-tooltip-id="compare-tooltip" data-tooltip-content="Add to Compare"
                                                                    data-tooltip-place="left"
                                                                    onClick={() => addToCompareListProduct(product)}
                                                                >
                                                                    <i className="icon-left-and-right-arrows-1"></i>
                                                                </button>
                                                                <Tooltip id="compare-tooltip" />
                                                            </li>
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
                                                        <div className="rating-product">
                                                            <i className="icon-star"></i>
                                                            <i className="icon-star"></i>
                                                            <i className="icon-star"></i>
                                                            <i className="icon-star"></i>
                                                            <i className="icon-star"></i>
                                                        </div>
                                                        <div className="price">
                                                            <span className="present-price">${product.price}</span>
                                                            <del className="old-price">${product.delPrice}</del>
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
                                </Slider>
                            </div>
                        </div>
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

export default NewArrivalProduct;
